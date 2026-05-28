"use client";

import {NumberStepper} from "@heroui-pro/react";

export default function NumberStepperReversedLayoutDemo() {
  return (
    <NumberStepper aria-label="Quantity" defaultValue={1} maxValue={99} minValue={0}>
      <NumberStepper.Group>
        <NumberStepper.IncrementButton />
        <NumberStepper.Value />
        <NumberStepper.DecrementButton />
      </NumberStepper.Group>
    </NumberStepper>
  );
}
