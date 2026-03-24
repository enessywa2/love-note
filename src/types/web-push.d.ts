declare module 'web-push' {
  const webpush: {
    sendNotification: (subscription: any, payload: any) => Promise<any>;
    setVapidDetails: (subject: string, publicKey: string, privateKey: string) => void;
  };
  export default webpush;
}
