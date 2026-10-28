import React from 'react';

interface CoastlineEmblemProps {
  className?: string;
  size?: number;
  variant?: 'color' | 'monochrome' | 'white';
}

export const CoastlineEmblem: React.FC<CoastlineEmblemProps> = ({
  className = '',
  size = 40,
  variant = 'color',
}) => {
  // Brand color tokens
  const waveDark = variant === 'white' ? '#FFFFFF' : variant === 'monochrome' ? 'currentColor' : '#028090';
  const waveLight = variant === 'white' ? '#FFFFFF' : variant === 'monochrome' ? 'currentColor' : '#00A896';
  const birdColor = variant === 'white' ? '#FFFFFF' : variant === 'monochrome' ? 'currentColor' : '#FFFFFF';
  const crestAccent = variant === 'white' ? '#E2E8F0' : variant === 'monochrome' ? 'currentColor' : '#20C9B4';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Coastline Reporters Bird and Wave Emblem"
    >
      <title>Coastline Reporters Emblem</title>
      {/* Background circle badge container */}
      <rect width="100" height="100" rx="22" fill="#0A192F" />

      {/* Stylized Coastal Ocean Waves */}
      {/* Deep foundation wave */}
      <path
        d="M14 74C24 66 36 67 48 73C60 79 72 80 86 72V86H14V74Z"
        fill={waveDark}
        fillOpacity={variant === 'color' ? 0.95 : 1}
      />
      {/* Cresting foreground wave */}
      <path
        d="M14 65C28 58 40 60 52 67C64 74 74 74 86 64C86 64 82 72 72 76C60 80 48 76 38 71C28 66 20 68 14 72V65Z"
        fill={waveLight}
      />
      {/* Subtle spray / light reflection wave */}
      <path
        d="M32 60C38 57 44 58 50 62C44 61 38 61 32 63V60Z"
        fill={crestAccent}
        opacity="0.8"
      />

      {/* Soaring Bird in Flight Emblem */}
      {/* Wing Left / Trailing wing */}
      <path
        d="M26 38C34 32 46 29 55 33C50 35 44 38 40 43C34 42 29 41 26 38Z"
        fill={crestAccent}
      />
      {/* Main Bird Body and Primary Soaring Wing */}
      <path
        d="M74 24C62 25 51 32 44 42C48 41 53 41 58 43C55 45 52 48 50 52C58 49 68 47 78 48C74 44 71 39 71 34C73 30 75 27 74 24Z"
        fill={birdColor}
      />
      {/* Bird Head & Beak pointing forward/horizon */}
      <path
        d="M78 48C80 47.5 83 47 85 48C83 49 80 50 78 51V48Z"
        fill={crestAccent}
      />
    </svg>
  );
};
