"use client";

import type {Key} from "@heroui/react";

import {Globe} from "@gravity-ui/icons";
import {ListBox} from "@heroui/react";
import {useState} from "react";

import {InlineSelect, ItemCard} from "@heroui-pro/react";

export default function ItemCardWithSelectDemo() {
  const [lang, setLang] = useState<Key | null>("en");

  return (
    <div className="w-[500px] rounded-2xl p-6">
      <ItemCard>
        <ItemCard.Icon>
          <Globe />
        </ItemCard.Icon>
        <ItemCard.Content>
          <ItemCard.Title>Language</ItemCard.Title>
          <ItemCard.Description>Choose your preferred language</ItemCard.Description>
        </ItemCard.Content>
        <ItemCard.Action>
          <InlineSelect aria-label="Language" value={lang} onChange={(value) => setLang(value)}>
            <InlineSelect.Trigger>
              <InlineSelect.Value />
              <InlineSelect.Indicator />
            </InlineSelect.Trigger>
            <InlineSelect.Popover>
              <ListBox>
                <ListBox.Item id="en" textValue="English">
                  English
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="es" textValue="Spanish">
                  Spanish
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="fr" textValue="French">
                  French
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="ja" textValue="Japanese">
                  Japanese
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </InlineSelect.Popover>
          </InlineSelect>
        </ItemCard.Action>
      </ItemCard>
    </div>
  );
}
