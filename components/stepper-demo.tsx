"use client";

import {useState} from "react";
import {Stepper} from "@heroui-pro/react";

const steps = [{title: "Cart"}, {title: "Shipping"}, {title: "Payment"}, {title: "Confirmation"}];

export default function StepperDemo() {
  const [step, setStep] = useState(1);

  return (
    <div className="flex w-full max-w-[500px] flex-col gap-6 p-6">
      <Stepper currentStep={step} onStepChange={setStep}>
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
      <div className="flex gap-2">
        <button
          className="rounded-lg border px-3 py-1.5 text-sm disabled:opacity-40"
          disabled={step <= 1}
          onClick={() => setStep((s) => Math.max(1, s - 1))}
        >
          Back
        </button>
        <button
          className="rounded-lg border px-3 py-1.5 text-sm disabled:opacity-40"
          disabled={step >= steps.length}
          onClick={() => setStep((s) => Math.min(steps.length, s + 1))}
        >
          Next
        </button>
      </div>
    </div>
  );
}
