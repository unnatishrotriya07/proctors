// GradientBackground — "Bloom Field gradient", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=fba2fa02-eb4c-49d4-8490-8d69c5c0baf7
export function GradientBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        containerType: "size",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          backgroundBlendMode: "overlay, normal, normal, normal, normal",
          backgroundColor: "#E2E2E2",
          backgroundImage:
            "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.500'/></svg>\"), radial-gradient(circle at 67.04% 45.93%, rgba(226, 226, 226, 1) 0%, rgba(226, 226, 226, 0.844) 19.02%, rgba(226, 226, 226, 0.5) 38.05%, rgba(226, 226, 226, 0.156) 57.07%, rgba(226, 226, 226, 0) 76.1%), radial-gradient(circle at 35.47% 65.92%, rgba(27, 159, 254, 1) 0%, rgba(27, 159, 254, 0.844) 12.9%, rgba(27, 159, 254, 0.5) 25.8%, rgba(27, 159, 254, 0.156) 38.7%, rgba(27, 159, 254, 0) 51.6%), radial-gradient(circle at 48.33% 20.11%, rgba(27, 159, 254, 1) 0%, rgba(27, 159, 254, 0.844) 16.75%, rgba(27, 159, 254, 0.5) 33.5%, rgba(27, 159, 254, 0.156) 50.25%, rgba(27, 159, 254, 0) 67%), radial-gradient(circle at 80.81% 88.03%, rgba(74, 201, 255, 1) 0%, rgba(74, 201, 255, 0.844) 10.28%, rgba(74, 201, 255, 0.5) 20.55%, rgba(74, 201, 255, 0.156) 30.83%, rgba(74, 201, 255, 0) 41.1%)",
          backgroundSize: "120px 120px, auto, auto, auto, auto",
          inset: 0,
          position: "absolute",
        }}
      />
      <svg
        aria-hidden="true"
        style={{
          height: "100%",
          inset: 0,
          mixBlendMode: "overlay",
          opacity: 0.5,
          position: "absolute",
          width: "100%",
        }}
      >
        <filter id="grain-fba2fa02">
          <feTurbulence
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
            type="fractalNoise"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect filter="url(#grain-fba2fa02)" height="100%" width="100%" />
      </svg>
    </div>
  );
}
