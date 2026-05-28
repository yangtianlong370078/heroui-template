"use client";

import {CircleChevronRight, Cloud, Key as KeyIcon, Person} from "@gravity-ui/icons";
import {ItemCard} from "@heroui-pro/react";

export default function ItemCardVerticalStackDemo() {
  return (
    <div className="w-[500px] space-y-2 rounded-2xl p-6">
      <ItemCard>
        <ItemCard.Icon>
          <Person />
        </ItemCard.Icon>
        <ItemCard.Content>
          <ItemCard.Title>Profile</ItemCard.Title>
          <ItemCard.Description>Update your personal information</ItemCard.Description>
        </ItemCard.Content>
        <ItemCard.Action>
          <CircleChevronRight className="text-muted size-4" />
        </ItemCard.Action>
      </ItemCard>

      <ItemCard>
        <ItemCard.Icon>
          <KeyIcon />
        </ItemCard.Icon>
        <ItemCard.Content>
          <ItemCard.Title>Security</ItemCard.Title>
          <ItemCard.Description>Manage passwords and 2FA</ItemCard.Description>
        </ItemCard.Content>
        <ItemCard.Action>
          <CircleChevronRight className="text-muted size-4" />
        </ItemCard.Action>
      </ItemCard>

      <ItemCard>
        <ItemCard.Icon>
          <Cloud />
        </ItemCard.Icon>
        <ItemCard.Content>
          <ItemCard.Title>Cloud sync</ItemCard.Title>
          <ItemCard.Description>Sync data across your devices</ItemCard.Description>
        </ItemCard.Content>
        <ItemCard.Action>
          <CircleChevronRight className="text-muted size-4" />
        </ItemCard.Action>
      </ItemCard>
    </div>
  );
}
