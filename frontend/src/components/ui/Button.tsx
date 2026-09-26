import { forwardRef, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", isLoading, children, className = "", disabled, ...props }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center font-medium rounded-full
      transition-all duration-200 ease-in-out
      focus-visible:ring-2 focus-visible:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
      select-none
    `;

    const variantStyles = {
      primary: `
        bg-[var(--color-accent-primary)] text-[var(--color-bg-primary)]
        hover:bg-[var(--color-accent-hover)]
        active:bg-[var(--color-accent-muted)]
        focus-visible:ring-[var(--color-accent-primary)]
        dark:focus-visible:ring-offset-[var(--color-bg-primary)]
        light:focus-visible:ring-offset-[var(--color-bg-primary-light)]
      `,
      secondary: `
        bg-[var(--color-bg-card)] text-[var(--color-text-primary)]
        border border-[var(--color-border-primary)]
        hover:bg-[var(--color-bg-card-hover)]
        active:bg-[var(--color-bg-tertiary)]
        focus-visible:ring-[var(--color-border-primary)]
        dark:focus-visible:ring-offset-[var(--color-bg-primary)]
        light:focus-visible:ring-offset-[var(--color-bg-primary-light)]
      `,
      ghost: `
        text-[var(--color-text-secondary)]
        hover:bg-[var(--color-bg-card)]
        hover:text-[var(--color-text-primary)]
        active:bg-[var(--color-bg-tertiary)]
        focus-visible:ring-[var(--color-border-primary)]
        dark:focus-visible:ring-offset-[var(--color-bg-primary)]
        light:focus-visible:ring-offset-[var(--color-bg-primary-light)]
      `,
      danger: `
        bg-red-600 text-white
        hover:bg-red-700
        active:bg-red-800
        focus-visible:ring-red-500
        dark:focus-visible:ring-offset-[var(--color-bg-primary)]
        light:focus-visible:ring-offset-[var(--color-bg-primary-light)]
      `,
    };

    const sizeStyles = {
      sm: "px-3 py-1.5 text-sm gap-1.5",
      md: "px-4 py-2 text-sm gap-2",
      lg: "px-6 py-3 text-base gap-2",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";