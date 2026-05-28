"use client";

import {NumberStepper} from "@heroui-pro/react";

export default function NumberStepperDisabledDemo() {
  return (
    <NumberStepper isDisabled aria-label="Quantity" defaultValue={3} maxValue={10} minValue={0}>
      <NumberStepper.Group>
        <NumberStepper.DecrementButton />
        <NumberStepper.Value />
        <NumberStepper.IncrementButton />
      </NumberStepper.Group>
    </NumberStepper>
  );
}
