"use client";

import {Stepper} from "@heroui-pro/react";

const steps = [{title: "Cart"}, {title: "Shipping"}, {title: "Payment"}, {title: "Confirmation"}];

export default function StepperSizesDemo() {
  return (
    <div className="flex flex-col gap-10">
      {(["sm", "md", "lg"] as const).map((size) => (
        <div key={size} className="flex flex-col gap-2">
          <span className="text-muted text-xs font-medium uppercase tracking-wider">{size}</span>
          <div className="w-[500px]">
            <Stepper currentStep={1} size={size}>
              {steps.map((s) => (
                <Stepper.Step key={s.title}>
                  <Stepper.Indicator />
                  <Stepper.Content>
                    <Stepper.Title>{s.title}</Stepper.Title>
                  </Stepper.Content>
                  <Stepper.Separator />
                </Stepper.Step>
              ))}
            </Stepper>
          </div>
        </div>
      ))}
    </div>
  );
}
