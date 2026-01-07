import React from "react"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      position="bottom-center"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "font-body text-gray group toast group-[.toaster]:bg-background group-[.toaster]:text-gray group-[.toaster]:border-border group-[.toaster]:shadow-md px-0",
          title: "text-md",
          description: "font-medium text-base",
        },
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": 'var(--radius)',
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
