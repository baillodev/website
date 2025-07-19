export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Couche de flou global */}
      <div className="absolute inset-0 bg-primary/10 backdrop-blur-xl" />

      {/* Blobs flous colorés */}
      <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-primary opacity-25 rounded-full filter blur-2xl" />
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-primary opacity-25 rounded-full filter blur-2xl" />
      <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] bg-primary opacity-25 rounded-full filter blur-2xl" />
    </div>
  );
}
