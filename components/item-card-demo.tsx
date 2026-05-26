"use client";

import {CircleChevronRight, Globe} from "@gravity-ui/icons";
import {Button} from "@heroui/react";
import {ItemCard} from "@heroui-pro/react";

export default function ItemCardDemo() {
  return (
    <div className="w-full max-w-[500px] rounded-2xl p-6">
      <ItemCard>
        <ItemCard.Icon>
          <Globe />
        </ItemCard.Icon>
        <ItemCard.Content>
          <ItemCard.Title>Language</ItemCard.Title>
          <ItemCard.Description>Choose your preferred language</ItemCard.Description>
        </ItemCard.Content>
        <ItemCard.Action>
          <Button size="sm" variant="outline">
            English
            <CircleChevronRight className="size-3.5" />
          </Button>
        </ItemCard.Action>
      </ItemCard>
    </div>
  );
}
