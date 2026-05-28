"use client";

import {Description, Label} from "@heroui/react";

import {CheckboxButtonGroup} from "@heroui-pro/react";

const features = [
  {description: "Real-time threat detection and prevention", value: "security"},
  {description: "Cloud-based storage with automatic backups", value: "storage"},
  {description: "Usage reports and performance dashboards", value: "analytics"},
];

export default function CheckboxButtonGroupNoIndicatorDemo() {
  return (
    <CheckboxButtonGroup
      className="w-[360px]"
      defaultValue={["security"]}
      name="features-no-indicator"
    >
      <Label>Select features</Label>
      {features.map((feature) => (
        <CheckboxButtonGroup.Item key={feature.value} value={feature.value}>
          <CheckboxButtonGroup.ItemContent>
            <Label className="capitalize">{feature.value}</Label>
            <Description>{feature.description}</Description>
          </CheckboxButtonGroup.ItemContent>
        </CheckboxButtonGroup.Item>
      ))}
    </CheckboxButtonGroup>
  );
}
