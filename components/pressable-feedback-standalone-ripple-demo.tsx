"use client";

import {ChevronRight, Person} from "@gravity-ui/icons";

import {ItemCard, PressableFeedback} from "@heroui-pro/react";

export default function PressableFeedbackStandaloneRippleDemo() {
  return (
    <div className="w-[500px]">
      <ItemCard<"button">
        className="relative w-full cursor-pointer overflow-hidden"
        render={(props) => <button type="button" {...props} />}
      >
        <PressableFeedback.Ripple />
        <ItemCard.Icon>
          <Person />
        </ItemCard.Icon>
        <ItemCard.Content>
          <ItemCard.Title>Profile</ItemCard.Title>
          <ItemCard.Description>Update your personal information</ItemCard.Description>
        </ItemCard.Content>
        <ItemCard.Action>
          <ChevronRight className="text-muted size-4" />
        </ItemCard.Action>
      </ItemCard>
    </div>
  );
}
