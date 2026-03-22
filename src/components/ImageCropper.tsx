import React, { useState, useCallback } from "react";
import Cropper, { Point, Area } from "react-easy-crop";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface ImageCropperProps {
  image: string;
  onCropComplete: (croppedImage: string) => void;
  onCancel: () => void;
  open: boolean;
}

export default function ImageCropper({ image, onCropComplete, onCancel, open }: ImageCropperProps) {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onCropChange = (crop: Point) => {
    setCrop(crop);
  };

  const onZoomChange = (zoom: number) => {
    setZoom(zoom);
  };

  const onCropAreaComplete = useCallback((_extended: Area, pixels: Area) => {
    setCroppedAreaPixels(pixels);
  }, []);

  const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener("load", () => resolve(image));
      image.addEventListener("error", (error) => reject(error));
      image.setAttribute("crossOrigin", "anonymous");
      image.src = url;
    });

  const getCroppedImg = async (imageSrc: string, pixelCrop: Area): Promise<string> => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) return "";

    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    return canvas.toDataURL("image/jpeg", 0.9);
  };

  const handleSave = async () => {
    if (croppedAreaPixels) {
      const croppedImage = await getCroppedImg(image, croppedAreaPixels);
      onCropComplete(croppedImage);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onCancel()}>
      <DialogContent className="sm:max-w-[500px] h-[600px] flex flex-col p-0 overflow-hidden">
        <DialogHeader className="p-4 border-b">
          <DialogTitle>Crop Photo 📸</DialogTitle>
        </DialogHeader>
        
        <div className="relative flex-1 bg-black">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropChange={onCropChange}
            onCropComplete={onCropAreaComplete}
            onZoomChange={onZoomChange}
          />
        </div>

        <div className="p-6 space-y-4 bg-background">
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-muted-foreground uppercase tracking-wider">
              <span>Zoom</span>
              <span>{Math.round(zoom * 100)}%</span>
            </div>
            <Slider
              value={[zoom]}
              min={1}
              max={3}
              step={0.1}
              onValueChange={([v]) => setZoom(v)}
              className="py-4"
            />
          </div>
          
          <DialogFooter className="flex gap-2 pt-2">
            <Button variant="outline" onClick={onCancel} className="flex-1 rounded-xl">
              Cancel
            </Button>
            <Button onClick={handleSave} className="flex-1 rounded-xl bg-primary shadow-glow">
              Apply Crop ✨
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
