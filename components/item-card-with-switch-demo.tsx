"use client";

import {Moon} from "@gravity-ui/icons";
import {Switch} from "@heroui/react";
import {useState} from "react";

import {ItemCard} from "@heroui-pro/react";

export default function ItemCardWithSwitchDemo() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="w-[500px] rounded-2xl p-6">
      <ItemCard>
        <ItemCard.Icon>
          <Moon />
        </ItemCard.Icon>
        <ItemCard.Content>
          <ItemCard.Title>Dark mode</ItemCard.Title>
          <ItemCard.Description>Use dark theme across the app</ItemCard.Description>
        </ItemCard.Content>
        <ItemCard.Action>
          <Switch aria-label="Switch Dark mode" isSelected={darkMode} onChange={setDarkMode}>
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
          </Switch>
        </ItemCard.Action>
      </ItemCard>
    </div>
  );
}
