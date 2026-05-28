"use client";

import {Gear, PersonFill, ShieldCheck} from "@gravity-ui/icons";

import {Stepper} from "@heroui-pro/react";

export default function StepperOnboardingTimelineDemo() {
  return (
    <div className="w-[340px]">
      <h3 className="text-foreground mb-5 text-lg font-bold">Getting started</h3>
      <Stepper currentStep={1} orientation="vertical" size="lg">
        <Stepper.Step>
          <Stepper.Indicator>
            <Stepper.Icon>
              <PersonFill />
            </Stepper.Icon>
          </Stepper.Indicator>
          <Stepper.Content>
            <Stepper.Title>Account created</Stepper.Title>
            <Stepper.Description>
              Your workspace is ready. Invite your team whenever you&apos;re set.
            </Stepper.Description>
          </Stepper.Content>
          <Stepper.Separator />
        </Stepper.Step>

        <Stepper.Step>
          <Stepper.Indicator>
            <Stepper.Icon>
              <Gear />
            </Stepper.Icon>
          </Stepper.Indicator>
          <Stepper.Content>
            <Stepper.Title>Set up integrations</Stepper.Title>
            <Stepper.Description>
              Connect your tools — Slack, GitHub, Figma — to keep everything in sync.
            </Stepper.Description>
          </Stepper.Content>
          <Stepper.Separator />
        </Stepper.Step>

        <Stepper.Step>
          <Stepper.Indicator>
            <Stepper.Icon>
              <ShieldCheck />
            </Stepper.Icon>
          </Stepper.Indicator>
          <Stepper.Content>
            <Stepper.Title>Create a project</Stepper.Title>
            <Stepper.Description>
              Launch your first project and see the magic happen.
            </Stepper.Description>
          </Stepper.Content>
        </Stepper.Step>
      </Stepper>
    </div>
  );
}
