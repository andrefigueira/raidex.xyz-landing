import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="RAIDEX"
      width={32}
      height={32}
      className={className}
    />
  );
}
