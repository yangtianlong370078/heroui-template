"use client";

import {NumberStepper} from "@heroui-pro/react";

export default function NumberStepperCustomValueDemo() {
  return (
    <NumberStepper aria-label="Quantity" defaultValue={3} maxValue={10} minValue={0}>
      <NumberStepper.Group>
        <NumberStepper.DecrementButton />
        <NumberStepper.Value>
          {({value}: {value: number}) => (
            <span className="mx-2">
              {value} {value === 1 ? "item" : "items"}
            </span>
          )}
        </NumberStepper.Value>
        <NumberStepper.IncrementButton />
      </NumberStepper.Group>
    </NumberStepper>
  );
}
