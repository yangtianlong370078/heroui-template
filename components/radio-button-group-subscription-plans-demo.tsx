"use client";

import CircleCheckFill from "@gravity-ui/icons/CircleCheckFill";
import {Chip, Description, Label, cn} from "@heroui/react";

import {PressableFeedback, RadioButtonGroup} from "@heroui-pro/react";

const subscriptions = [
  {
    billing: "Billed at USD 99.99/year (US$ 8.33/month)",
    title: "Annual",
    value: "annual",
  },
  {
    badge: "Save up to 50%",
    billing: "Billed at USD 149.99/year (US$ 12.50/month)",
    title: "Annual + Toolkit",
    value: "annual-toolkit",
  },
];

export default function RadioButtonGroupSubscriptionPlansDemo() {
  return (
    <RadioButtonGroup className="w-[400px]" defaultValue="annual" name="subscription">
      {subscriptions.map((sub) => (
        <RadioButtonGroup.Item
          key={sub.value}
          className="data-[selected=true]:bg-foreground border-none ring-transparent transition-colors duration-150"
          value={sub.value}
        >
          {({isSelected}) => (
            <>
              <PressableFeedback.Ripple />
              <RadioButtonGroup.Indicator className="top-1/2 -translate-y-1/2">
                <CircleCheckFill className="text-[#e95f2a]" height={24} width={24} />
              </RadioButtonGroup.Indicator>
              <RadioButtonGroup.ItemContent>
                {sub.badge ? (
                  <Chip
                    className="absolute -left-1 -top-1.5 w-fit bg-[#e95f2a] text-black"
                    size="sm"
                  >
                    <Chip.Label>{sub.badge}</Chip.Label>
                  </Chip>
                ) : null}
                <Label className={`text-xl font-bold ${isSelected ? "text-background" : ""}`}>
                  {sub.title}
                </Label>
                <Description className={cn("mt-1", isSelected ? "text-background/70" : "")}>
                  {sub.billing}
                </Description>
              </RadioButtonGroup.ItemContent>
            </>
          )}
        </RadioButtonGroup.Item>
      ))}
    </RadioButtonGroup>
  );
}
