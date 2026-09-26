import { type ImgHTMLAttributes } from "react";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  name: string;
  src?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  alt?: string;
}

const sizeClasses = {
  xs: "w-6 h-6 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-12 h-12 text-lg",
  xl: "w-16 h-16 text-xl",
};

export function Avatar({ name, src, size = "md", alt, className = "", ...props }: AvatarProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const bgColors = [
    "bg-emerald-500",
    "bg-blue-500",
    "bg-purple-500",
    "bg-amber-500",
    "bg-rose-500",
    "bg-indigo-500",
    "bg-orange-500",
    "bg-teal-500",
  ];

  const colorIndex = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % bgColors.length;
  const bgColor = bgColors[colorIndex];

  if (src) {
    return (
      <img
        src={src}
        alt={alt || name}
        className={`${sizeClasses[size]} rounded-full object-cover ${className}`}
        {...props}
      />
    );
  }

  return (
    <div
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center font-medium text-white ${bgColor} ${className}`}
      aria-label={name}
      {...props}
    >
      {initials}
    </div>
  );
}