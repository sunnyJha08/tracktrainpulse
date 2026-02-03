export default function BgBlueRadial({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "#ffffff",
        backgroundImage: `
       radial-gradient(circle at top center, var(--primary),transparent 70%)
     `,
      }}>
      {children}
    </div>
  );
}
