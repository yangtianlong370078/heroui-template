"use client";

import {Avatar, Link} from "@heroui/react";
import {HoverCard} from "@heroui-pro/react";

export default function HoverCardWithArrowDemo() {
  return (
    <div className="px-10 py-16">
      <p className="text-sm leading-8">
        Hover over{" "}
        <HoverCard>
          <HoverCard.Trigger>
            <Link className="underline" href="https://x.com/hero_ui" target="_blank">
              @hero_ui
            </Link>
          </HoverCard.Trigger>
          <HoverCard.Content>
            <HoverCard.Arrow />
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
                <span className="text-sm tracking-tight text-default-500">@hero_ui</span>
              </div>
            </div>
            <p className="mt-3 pl-px text-sm font-medium">
              Building the future of UI for web &amp; mobile.&nbsp;
              <span aria-label="confetti" role="img">🚀</span>
              &nbsp;(YC S24)
            </p>
            <div className="mt-3 flex gap-2">
              <div className="flex gap-1">
                <p className="text-sm font-semibold">4</p>
                <p className="text-sm text-default-500">Following</p>
              </div>
              <div className="flex gap-1">
                <p className="text-sm font-semibold">97.1K</p>
                <p className="text-sm text-default-500">Followers</p>
              </div>
            </div>
          </HoverCard.Content>
        </HoverCard>{" "}
        to see a preview with an arrow.
      </p>
    </div>
  );
}
