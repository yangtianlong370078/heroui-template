"use client";

import {BellFill, LockFill, PersonFill, ThumbsUpFill} from "@gravity-ui/icons";
import {useState} from "react";

import {Stepper} from "@heroui-pro/react";

const steps = [
  {
    description: "Create your account",
    icon: <PersonFill height={24} width={24} />,
    title: "Account",
  },
  {
    description: "Configure preferences",
    icon: <BellFill height={24} width={24} />,
    title: "Settings",
  },
  {description: "Security options", icon: <LockFill height={24} width={24} />, title: "Security"},
  {
    description: "Review and confirm",
    icon: <ThumbsUpFill height={24} width={24} />,
    title: "Confirm",
  },
];

export default function StepperVerticalWithIconsDemo() {
  const [step, setStep] = useState(2);

  return (
    <div className="w-[320px]">
      <Stepper currentStep={step} orientation="vertical" onStepChange={setStep}>
        {steps.map((s) => (
          <Stepper.Step key={s.title}>
            <Stepper.Indicator>
              <Stepper.Icon>{s.icon}</Stepper.Icon>
            </Stepper.Indicator>
            <Stepper.Content>
              <Stepper.Title>{s.title}</Stepper.Title>
              <Stepper.Description>{s.description}</Stepper.Description>
            </Stepper.Content>
            <Stepper.Separator />
          </Stepper.Step>
        ))}
      </Stepper>
    </div>
  );
}
