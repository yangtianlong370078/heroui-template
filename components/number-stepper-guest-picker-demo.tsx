"use client";

import {NumberStepper} from "@heroui-pro/react";

const categories = [
  {defaultValue: 0, description: "Ages 13 or above", label: "Adults", max: 16, min: 0},
  {defaultValue: 0, description: "Ages 2–12", label: "Children", max: 8, min: 0},
  {defaultValue: 0, description: "Under 2", label: "Infants", max: 5, min: 0},
  {defaultValue: 0, description: "Bringing a service animal?", label: "Pets", max: 5, min: 0},
];

export default function NumberStepperGuestPickerDemo() {
  return (
    <div className="divide-separator flex w-[380px] flex-col divide-y">
      {categories.map((cat) => (
        <div key={cat.label} className="flex items-center justify-between py-5">
          <div className="flex flex-col gap-0.5">
            <span className="text-foreground text-sm font-semibold">{cat.label}</span>
            <span className="text-muted text-xs">{cat.description}</span>
          </div>
          <NumberStepper
            aria-label={cat.label}
            defaultValue={cat.defaultValue}
            maxValue={cat.max}
            minValue={cat.min}
            size="sm"
          >
            <NumberStepper.Group>
              <NumberStepper.DecrementButton />
              <NumberStepper.Value />
              <NumberStepper.IncrementButton />
            </NumberStepper.Group>
          </NumberStepper>
        </div>
      ))}
    </div>
  );
}
