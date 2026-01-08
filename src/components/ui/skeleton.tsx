import { cn } from "@/lib/utils"
import React from "react"


function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-md bg-primary/10", className)}
      {...props}
    />
  )
}

export { Skeleton }
