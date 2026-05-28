"use client";

import {Description, Label} from "@heroui/react";

import {NumberStepper} from "@heroui-pro/react";

export default function NumberStepperWithLabelDemo() {
  return (
    <NumberStepper
      className="flex-col items-start gap-1.5"
      defaultValue={1}
      maxValue={10}
      minValue={1}
    >
      <Label>Guests</Label>
      <NumberStepper.Group>
        <NumberStepper.DecrementButton />
        <NumberStepper.Value />
        <NumberStepper.IncrementButton />
      </NumberStepper.Group>
      <Description>Maximum 10 guests per reservation</Description>
    </NumberStepper>
  );
}
