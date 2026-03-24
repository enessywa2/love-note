import { useState, useEffect } from "react";
import { ImagePlus, Trash2, Loader2, Sparkles, Heart, ChevronLeft, ChevronRight, X } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import { usePartner } from "@/contexts/PartnerContext";
import { toast } from "sonner";
import { compressImage } from "@/lib/image-utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Photo {
  id: string;
  imageBase64: string;
  createdAt: string;
}

export default function Gallery() {
  const { user } = useAuth();
  const { partner } = usePartner();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance in pixels
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const handleNext = () => {
    if (!selectedPhoto) return;
    const currentIndex = photos.findIndex(p => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % photos.length;
    setSelectedPhoto(photos[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedPhoto) return;
    const currentIndex = photos.findIndex(p => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setSelectedPhoto(photos[prevIndex]);
  };

  useEffect(() => {
    if (!user) return;
    const fetchPhotos = async () => {
      let query = supabase
        .from("Photo")
        .select("*")
        .eq("isProfileFrame", false)
        .order("createdAt", { ascending: false });

      if (partner?.id) {
        query = query.or(`userId.eq.${user.id},userId.eq.${partner.id}`);
      } else {
        query = query.eq("userId", user.id);
      }

      const { data, error } = await query;

      if (error) {
        toast.error("Failed to load gallery.");
      } else {
        setPhotos(data || []);
      }
      setIsLoading(false);
    };
    fetchPhotos();
  }, [user, partner]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    setIsUploading(true);
    toast.loading("Adding to gallery... ✨", { id: "gallery-upload" });

    try {
      const compressedBase64 = await compressImage(file, 1000, 0.85);

      // Optimistic update
      const optimisticPhoto = { id: Date.now().toString(), imageBase64: compressedBase64, createdAt: new Date().toISOString() };
      setPhotos((prev) => [optimisticPhoto, ...prev]);

      if (!navigator.onLine) {
        toast.info("Offline: Photo saved locally and will sync when you're back online! ☁️", { id: "gallery-upload" });
        setIsUploading(false);
        return;
      }

      const { data, error } = await supabase
        .from("Photo")
        .insert({
          userId: user.id,
          imageBase64: compressedBase64,
          isProfileFrame: false,
        })
        .select()
        .single();

      if (error) throw error;
      
      setPhotos((prev) => prev.map((p) => (p.id === optimisticPhoto.id ? data : p)));
      toast.success("Beautiful! Photo added to your collage 💕", { id: "gallery-upload" });
    } catch (err) {
      console.error(err);
      toast.error("Failed to upload photo.", { id: "gallery-upload" });
      // Revert optimistic update only if it's a real error, not just offline
      if (navigator.onLine) {
        setPhotos((prev) => prev.filter(p => !p.id.includes(Date.now().toString().substring(0, 5))));
      }
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user) return;

    setPhotos((prev) => prev.filter((p) => p.id !== id));

    const { error } = await supabase
      .from("Photo")
      .delete()
      .eq("id", id)
      .eq("userId", user.id);

    if (error) {
      toast.error("Failed to delete photo.");
    }
  };

  if (isLoading) {
    return (
      <div className="page-container flex items-center justify-center min-h-[50vh]">
        <Loader2 className="animate-spin text-primary/50" size={40} />
      </div>
    );
  }

  return (
    <div className="page-container pb-24">
      <div className="flex items-center justify-between mb-8 animate-fade-up">
        <div>
          <h1 className="text-2xl font-extrabold text-foreground flex items-center gap-2">
            Our Gallery <Sparkles className="text-primary animate-pulse-soft" size={24} />
          </h1>
          <p className="text-muted-foreground text-sm mt-1">Collecting beautiful memories</p>
        </div>
        
        <label className={`w-12 h-12 rounded-full flex items-center justify-center shadow-glow transition-all duration-300 cursor-pointer active:scale-95 ${isUploading ? 'bg-muted text-muted-foreground' : 'bg-primary text-white hover:scale-105'}`}>
          {isUploading ? <Loader2 size={20} className="animate-spin" /> : <ImagePlus size={22} />}
          <input type="file" accept="image/*" className="hidden" onChange={handleUpload} disabled={isUploading} />
        </label>
      </div>

      {photos.length === 0 ? (
        <div className="text-center py-20 animate-fade-up glass-card rounded-[2rem] border border-border/50">
          <ImagePlus size={48} className="mx-auto text-primary/30 mb-4 animate-bounce-gentle" />
          <p className="text-muted-foreground font-medium">Your gallery is empty!</p>
          <p className="text-sm text-foreground/50 mt-2">Upload some cute photos of you both 💕</p>
        </div>
      ) : (
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {photos.map((photo, i) => {
            // Generate a random slight rotation for the polaroid effect
            const rotation = i % 2 === 0 ? (i % 3 === 0 ? 'rotate-[-3deg]' : 'rotate-[2deg]') : (i % 5 === 0 ? 'rotate-[4deg]' : 'rotate-[-1deg]');
            
            return (
              <div
                key={photo.id}
                className={`relative break-inside-avoid animate-scale-in group cursor-zoom-in`}
                style={{ animationDelay: `${(i % 10) * 100}ms` }}
                onClick={() => setSelectedPhoto(photo)}
              >
                {/* Cute Polaroid Wrapper */}
                <div className={`bg-white dark:bg-slate-800 p-2.5 pb-10 sm:p-3 sm:pb-12 rounded-lg shadow-soft-lg border border-border/10 transition-transform duration-500 hover:scale-105 ${rotation} hover:rotate-0 hover:z-10 relative overflow-hidden backdrop-blur-sm`}>
                  <img
                    src={photo.imageBase64}
                    alt="Memory"
                    className="w-full h-auto rounded-sm object-cover"
                    loading="lazy"
                  />
                  {/* Heart decoration on the bottom of polaroid */}
                  <Heart size={14} className="absolute bottom-3 left-1/2 -translate-x-1/2 text-primary/40 fill-primary/20 animate-pulse-soft" />
                  
                  {/* Delete Button - only shows on hover */}
                  <button
                    onClick={(e) => handleDelete(photo.id, e)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-rose-500 backdrop-blur-md"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Fullscreen Photo Viewer */}
      <Dialog open={!!selectedPhoto} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
        <DialogContent 
          className="max-w-[100vw] max-h-[100vh] p-0 overflow-hidden border-none bg-black/95 shadow-none flex items-center justify-center pwa-safe-area"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          {selectedPhoto && (
            <div 
              className="relative w-full h-full flex items-center justify-center animate-scale-in group/viewer touch-none"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* Navigation Arrows (Visible on hover/desktop) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all active:scale-95 opacity-0 md:group-hover/viewer:opacity-100 hidden md:flex"
              >
                <ChevronLeft size={32} />
              </button>

              <div className="w-full h-full flex items-center justify-center p-4">
                <img
                  src={selectedPhoto.imageBase64}
                  alt="Memory Fullscreen"
                  className="max-w-full max-h-full object-contain cursor-zoom-out select-none rounded-lg"
                  onClick={() => setSelectedPhoto(null)}
                  draggable={false}
                />
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all active:scale-95 opacity-0 md:group-hover/viewer:opacity-100 hidden md:flex"
              >
                <ChevronRight size={32} />
              </button>

              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 z-50 bg-black/20 rounded-full backdrop-blur-sm"
              >
                <X size={28} />
              </button>

              {/* Swipe Indicator for Mobile */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1.5 md:hidden">
                {photos.slice(0, 5).map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 rounded-full transition-all ${photos.findIndex(p => p.id === selectedPhoto.id) % 5 === i ? "w-4 bg-primary" : "w-1.5 bg-white/30"}`} 
                  />
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
