import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black relative">
      {/* Vercel Grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Your Content/Components */}
    </div>
  );
}
