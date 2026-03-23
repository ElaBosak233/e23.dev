"use client";

import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { LoaderCircle } from "lucide-react";
import type { ButtonHTMLAttributes, CSSProperties, Ref } from "react";
import { cn } from "@/utils";

const buttonVariants = cva(
  [
    "relative",
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "box-border",
    "whitespace-nowrap",
    "overflow-hidden",
    "rounded-full",
    "text-sm",
    "font-medium",
    "transition",
    "duration-150",
    "ease-in-out",
    "active:scale-[0.97]",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "cursor-pointer",
    "select-none",
    "[&_svg]:pointer-events-none",
    "[&_svg]:shrink-0",
    "[&_svg]:size-4",
  ],
  {
    variants: {
      variant: {
        solid: [
          "bg-[var(--color-button)]",
          "text-[var(--color-button-foreground)]",
          "hover:bg-[var(--color-button)]/80",
        ],
        outline: [
          "border",
          "border-input",
          "bg-transparent",
          "text-[var(--color-button)]",
          "hover:bg-[var(--color-button)]/10",
        ],
        tonal: [
          "bg-[var(--color-button)]/7.5",
          "text-[var(--color-button)]",
          "hover:bg-[var(--color-button)]/20",
        ],
        ghost: [
          "text-[var(--color-button)]",
          "hover:bg-[var(--color-button)]/10",
          "hover:text-[var(--color-button)]",
        ],
        link: [
          "text-[var(--color-button)]",
          "underline-offset-4",
          "hover:underline",
        ],
      },
      size: {
        md: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
      square: {
        true: "aspect-square",
      },
    },
    defaultVariants: {
      variant: "ghost",
      size: "md",
      square: false,
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactElement;
  loading?: boolean;
  level?: "primary" | "secondary" | "info" | "success" | "warning" | "error";
  ref?: Ref<HTMLButtonElement>;
}

function Button(props: ButtonProps) {
  const {
    type = "button",
    level = "primary",
    className,
    variant,
    size,
    square,
    disabled = false,
    loading = false,
    asChild = false,
    icon,
    children,
    ref,
    ...rest
  } = props;

  const Icon = loading ? <LoaderCircle className="animate-spin" /> : icon;
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      type={type}
      className={cn(buttonVariants({ variant, size, square, className }))}
      ref={ref}
      draggable={false}
      disabled={disabled || loading}
      style={
        {
          "--color-button": `var(--${level})`,
          "--color-button-foreground": `var(--${level}-foreground)`,
        } as CSSProperties
      }
      {...rest}
    >
      {(!!icon || loading) && Icon}
      <Slottable>{children}</Slottable>
    </Comp>
  );
}

export { Button, buttonVariants };
