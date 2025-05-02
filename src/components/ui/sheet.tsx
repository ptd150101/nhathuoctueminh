"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

interface SheetContextValue {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const SheetContext = React.createContext<SheetContextValue | undefined>(undefined)

function useSheet() {
  const context = React.useContext(SheetContext)
  if (!context) {
    throw new Error("useSheet must be used within a Sheet provider")
  }
  return context
}

export interface SheetProps {
  children: React.ReactNode
}

const Sheet = ({ children }: SheetProps) => {
  const [open, setOpen] = React.useState(false)

  return <SheetContext.Provider value={{ open, onOpenChange: setOpen }}>{children}</SheetContext.Provider>
}

export interface SheetTriggerProps {
  children: React.ReactNode
  asChild?: boolean
}

const SheetTrigger = ({ children, asChild = false }: SheetTriggerProps) => {
  const { onOpenChange } = useSheet()

  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      onClick: () => onOpenChange(true),
    })
  }

  return (
    <button type="button" onClick={() => onOpenChange(true)}>
      {children}
    </button>
  )
}

export interface SheetContentProps {
  children: React.ReactNode
  side?: "left" | "right" | "top" | "bottom"
  className?: string
}

const SheetContent = ({ children, side = "right", className }: SheetContentProps) => {
  const { open, onOpenChange } = useSheet()

  if (!open) return null

  const sideClasses = {
    left: "inset-y-0 left-0 h-full w-3/4 border-r",
    right: "inset-y-0 right-0 h-full w-3/4 border-l",
    top: "inset-x-0 top-0 w-full border-b",
    bottom: "inset-x-0 bottom-0 w-full border-t",
  }

  return (
    <React.Fragment>
      <div className="fixed inset-0 z-50 bg-black/50" onClick={() => onOpenChange(false)} />
      <div className={cn("fixed z-50 bg-background p-6 shadow-lg", sideClasses[side], className)}>{children}</div>
    </React.Fragment>
  )
}

export { Sheet, SheetTrigger, SheetContent }
