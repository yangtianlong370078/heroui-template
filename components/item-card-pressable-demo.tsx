"use client";

import {ChevronRight, Key as KeyIcon, Person} from "@gravity-ui/icons";
import {ItemCard, PressableFeedback} from "@heroui-pro/react";

export default function ItemCardPressableDemo() {
  return (
    <div className="w-[500px] space-y-4 rounded-2xl p-6">
      <ItemCard<"button">
        className="relative w-full cursor-pointer overflow-hidden"
        render={(props) => <button type="button" {...props} />}
      >
        <PressableFeedback.Highlight />
        <ItemCard.Icon>
          <Person />
        </ItemCard.Icon>
        <ItemCard.Content>
          <ItemCard.Title>Account settings</ItemCard.Title>
          <ItemCard.Description>Manage your account preferences</ItemCard.Description>
        </ItemCard.Content>
        <ItemCard.Action>
          <ChevronRight className="text-muted size-4" />
        </ItemCard.Action>
      </ItemCard>

      <ItemCard<"button">
        className="relative w-full cursor-pointer overflow-hidden"
        render={(props) => <button type="button" {...props} />}
      >
        <PressableFeedback.Ripple />
        <ItemCard.Icon>
          <KeyIcon />
        </ItemCard.Icon>
        <ItemCard.Content className="w-full flex-1">
          <ItemCard.Title>Security</ItemCard.Title>
          <ItemCard.Description>Passwords and two-factor authentication</ItemCard.Description>
        </ItemCard.Content>
        <ItemCard.Action>
          <ChevronRight className="text-muted size-4" />
        </ItemCard.Action>
      </ItemCard>
    </div>
  );
}
