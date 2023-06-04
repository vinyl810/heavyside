export default function Logo({
  width,
  height,
  primary,
  secondary,
  shadow,
}: {
  width?: number;
  height?: number;
  primary?: string;
  secondary?: string;
  shadow?: string;
}) {
  const shadowSize = (((width ?? 100) + (height ?? 100)) / 2 / 100) * 1.5;

  return (
    <svg
      width={width}
      height={height}
      viewBox="-10 15 80 90"
      color="black"
      stroke={primary}
      style={{
        filter: `drop-shadow(0 0 ${shadowSize}px ${shadow})`,
      }}
    >
      <path
        d=" M 0 85 L 0 25
            M 20 90 L 20 35
            M 60 85 L 60 40
            M 40 40 C 50 35, 50 35, 60 40
            M 20 75 L 30 75 L 40 70
            M 20 90 C 30 95, 30 95, 40 90"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M -5 58 L 20 58 C 30 53 30 53 40 58 L 65 58"
        stroke={secondary}
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path d="M 40 70 L 40 40" strokeWidth="10" strokeLinecap="round" />
    </svg>
  );
}

Logo.defaultProps = {
  width: 50,
  height: 50,
  primary: '#dddddd',
  secondary: '#aaaaff',
  shadow: '#a1a1a1',
};
