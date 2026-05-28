"use client";

import {Folder, FolderFill} from "@gravity-ui/icons";
import {useState} from "react";

import {Stepper} from "@heroui-pro/react";

function FolderStepIndicator() {
  const {status} = Stepper.useStep();

  return (
    <Stepper.Indicator>
      <Stepper.Icon>{status === "complete" ? <FolderFill /> : <Folder />}</Stepper.Icon>
    </Stepper.Indicator>
  );
}

export default function StepperDynamicIconDemo() {
  const [step, setStep] = useState(1);

  return (
    <div className="w-[500px]">
      <Stepper currentStep={step} onStepChange={setStep}>
        {["Upload", "Process", "Complete"].map((title) => (
          <Stepper.Step key={title}>
            <FolderStepIndicator />
            <Stepper.Content>
              <Stepper.Title>{title}</Stepper.Title>
            </Stepper.Content>
            <Stepper.Separator />
          </Stepper.Step>
        ))}
      </Stepper>
    </div>
  );
}
