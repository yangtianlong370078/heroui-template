"use client";

import {ChevronRight, Globe, LogoGithub, LogoSlack} from "@gravity-ui/icons";
import {Button, Separator} from "@heroui/react";
import {ItemCard, ItemCardGroup} from "@heroui-pro/react";

const integrations = [
  {icon: LogoGithub, name: "GitHub", description: "Connect your repositories"},
  {icon: LogoSlack, name: "Slack", description: "Get team notifications"},
  {icon: Globe, name: "Web Hooks", description: "Custom HTTP endpoints"},
];

export default function ItemCardGroupDemo() {
  return (
    <div className="w-full max-w-[500px] rounded-2xl p-6">
      <ItemCardGroup aria-label="Integrations">
        <ItemCardGroup.Header className="mb-2 flex items-center justify-between px-1">
          <ItemCardGroup.Title>Integrations</ItemCardGroup.Title>
          <Button size="sm" variant="outline">
            Add
          </Button>
        </ItemCardGroup.Header>
        {integrations.map((item, idx) => (
          <div key={item.name}>
            <ItemCard>
              <ItemCard.Icon>
                <item.icon />
              </ItemCard.Icon>
              <ItemCard.Content>
                <ItemCard.Title>{item.name}</ItemCard.Title>
                <ItemCard.Description>{item.description}</ItemCard.Description>
              </ItemCard.Content>
              <ItemCard.Action>
                <ChevronRight className="text-muted size-4" />
              </ItemCard.Action>
            </ItemCard>
            {idx < integrations.length - 1 && <Separator />}
          </div>
        ))}
      </ItemCardGroup>
    </div>
  );
}
