"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: number[]
  max?: number
  step?: number
  onValueChange?: (value: number[]) => void
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, defaultValue = [0, 100], max = 100, step = 1, onValueChange, ...props }, ref) => {
    const [values, setValues] = React.useState<number[]>(defaultValue)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const newValues = [...values]
      newValues[index] = Number.parseInt(e.target.value)
      setValues(newValues)
      if (onValueChange) {
        onValueChange(newValues)
      }
    }

    return (
      <div className={cn("relative w-full", className)}>
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="absolute h-2 bg-blue-500 rounded-full"
            style={{
              left: `${(values[0] / max) * 100}%`,
              width: `${((values[1] - values[0]) / max) * 100}%`,
            }}
          ></div>
        </div>
        <input
          type="range"
          min="0"
          max={max}
          step={step}
          value={values[0]}
          onChange={(e) => handleChange(e, 0)}
          className="absolute w-full h-2 opacity-0 cursor-pointer"
          ref={ref}
          {...props}
        />
        <input
          type="range"
          min="0"
          max={max}
          step={step}
          value={values[1]}
          onChange={(e) => handleChange(e, 1)}
          className="absolute w-full h-2 opacity-0 cursor-pointer"
          {...props}
        />
      </div>
    )
  },
)
Slider.displayName = "Slider"

export { Slider }
