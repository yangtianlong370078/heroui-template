"use client";

import {Avatar, Link} from "@heroui/react";
import {HoverCard} from "@heroui-pro/react";

export default function HoverCardDemo() {
  return (
    <div className="px-10 py-12">
      <p className="text-sm leading-8">
        Check out{" "}
        <HoverCard>
          <HoverCard.Trigger>
            <Link className="underline" href="https://x.com/hero_ui" target="_blank">
              @hero_ui
            </Link>
          </HoverCard.Trigger>
          <HoverCard.Content>
            <div className="flex items-center gap-3">
              <Avatar size="sm">
                <Avatar.Image
                  alt="HeroUI"
                  src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/heroui_isotipo.png"
                />
                <Avatar.Fallback>H</Avatar.Fallback>
              </Avatar>
              <div className="flex flex-col items-start justify-center">
                <span className="text-sm font-semibold leading-4">HeroUI</span>
                <span className="text-muted text-sm tracking-tight">@hero_ui</span>
              </div>
            </div>
            <p className="mt-3 pl-px text-sm font-medium">
              Building the future of UI for web &amp; mobile.{" "}
              <span aria-label="rocket" role="img">🚀</span> (YC S24)
            </p>
            <div className="mt-3 flex gap-2">
              <div className="flex gap-1">
                <p className="text-sm font-semibold">4</p>
                <p className="text-muted text-sm">Following</p>
              </div>
              <div className="flex gap-1">
                <p className="text-sm font-semibold">97.1K</p>
                <p className="text-muted text-sm">Followers</p>
              </div>
            </div>
          </HoverCard.Content>
        </HoverCard>{" "}
        for beautiful React components.
      </p>
    </div>
  );
}
