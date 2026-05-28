"use client";

import {Button} from "@heroui/react";
import {ItemCard} from "@heroui-pro/react";

export default function ItemCardWithoutIconDemo() {
  return (
    <div className="w-[500px] rounded-2xl p-6">
      <ItemCard>
        <ItemCard.Content>
          <ItemCard.Title>Delete account</ItemCard.Title>
          <ItemCard.Description>Permanently remove your account and all data</ItemCard.Description>
        </ItemCard.Content>
        <ItemCard.Action>
          <Button size="sm" variant="danger-soft">
            Delete
          </Button>
        </ItemCard.Action>
      </ItemCard>
    </div>
  );
}
