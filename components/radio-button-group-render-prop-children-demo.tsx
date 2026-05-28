"use client";

import {Description, Label} from "@heroui/react";

import {NumberValue, RadioButtonGroup} from "@heroui-pro/react";

const plans = [
  {description: "For individuals and small projects", price: 5, value: "starter"},
  {description: "For growing teams and businesses", price: 15, value: "pro"},
  {description: "For large organizations at scale", price: 45, value: "enterprise"},
];

export default function RadioButtonGroupRenderPropChildrenDemo() {
  return (
    <RadioButtonGroup
      className="w-[360px]"
      defaultValue="pro"
      name="plan-render"
      variant="secondary"
    >
      <Label>Select a plan</Label>
      {plans.map((plan) => (
        <RadioButtonGroup.Item key={plan.value} value={plan.value}>
          {({isSelected}) => (
            <>
              <RadioButtonGroup.Indicator />
              <RadioButtonGroup.ItemContent>
                <Label className="capitalize">{plan.value}</Label>
                <Description>{plan.description}</Description>
                <NumberValue
                  className={`mt-2 text-sm font-semibold ${isSelected ? "text-accent" : ""}`}
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
            </>
          )}
        </RadioButtonGroup.Item>
      ))}
    </RadioButtonGroup>
  );
}
