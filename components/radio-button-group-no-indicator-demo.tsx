"use client";

import {Description, Label} from "@heroui/react";

import {NumberValue, RadioButtonGroup} from "@heroui-pro/react";

const plans = [
  {description: "For individuals and small projects", price: 5, value: "starter"},
  {description: "For growing teams and businesses", price: 15, value: "pro"},
  {description: "For large organizations at scale", price: 45, value: "enterprise"},
];

export default function RadioButtonGroupNoIndicatorDemo() {
  return (
    <RadioButtonGroup className="w-[360px]" defaultValue="pro" name="plan-no-indicator">
      <Label>Select a plan</Label>
      {plans.map((plan) => (
        <RadioButtonGroup.Item key={plan.value} value={plan.value}>
          <RadioButtonGroup.ItemContent>
            <Label className="capitalize">{plan.value}</Label>
            <Description>{plan.description}</Description>
            <NumberValue
              className="mt-2 text-sm font-semibold"
              currency="USD"
              maximumFractionDigits={0}
              style="currency"
              value={plan.price}
            >
              <NumberValue.Suffix>
                <span className="text-muted text-xs font-normal">/mo</span>
              </NumberValue.Suffix>
            </NumberValue>
          </RadioButtonGroup.ItemContent>
        </RadioButtonGroup.Item>
      ))}
    </RadioButtonGroup>
  );
}
