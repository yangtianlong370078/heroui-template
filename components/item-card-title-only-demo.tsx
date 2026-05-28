"use client";

import {CircleChevronRight, Palette} from "@gravity-ui/icons";
import {ItemCard} from "@heroui-pro/react";

export default function ItemCardTitleOnlyDemo() {
  return (
    <div className="w-[500px] rounded-2xl p-6">
      <ItemCard>
        <ItemCard.Icon>
          <Palette />
        </ItemCard.Icon>
        <ItemCard.Content>
          <ItemCard.Title>Appearance</ItemCard.Title>
        </ItemCard.Content>
        <ItemCard.Action>
          <CircleChevronRight className="text-muted size-4" />
        </ItemCard.Action>
      </ItemCard>
    </div>
  );
}
