"use client";

import {Plus} from "@gravity-ui/icons";
import {Avatar, Button} from "@heroui/react";
import {EmptyState} from "@heroui-pro/react";

export default function EmptyStateWithAvatarGroupDemo() {
  return (
    <div className="w-full max-w-[420px]">
      <EmptyState>
        <EmptyState.Header>
          <EmptyState.Media>
            <div className="flex -space-x-2">
              <Avatar className="ring-background ring-2">
                <Avatar.Image
                  alt="John Doe"
                  src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
                />
                <Avatar.Fallback>JD</Avatar.Fallback>
              </Avatar>
              <Avatar className="ring-background ring-2">
                <Avatar.Image
                  alt="Kate Wilson"
                  src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg"
                />
                <Avatar.Fallback>KW</Avatar.Fallback>
              </Avatar>
              <Avatar className="ring-background ring-2">
                <Avatar.Image
                  alt="Emily Chen"
                  src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg"
                />
                <Avatar.Fallback>EC</Avatar.Fallback>
              </Avatar>
            </div>
          </EmptyState.Media>
          <EmptyState.Title>No Team Members</EmptyState.Title>
          <EmptyState.Description>
            Invite your team to collaborate on this project.
          </EmptyState.Description>
        </EmptyState.Header>
        <EmptyState.Content>
          <Button size="sm">
            <Plus />
            Invite Members
          </Button>
        </EmptyState.Content>
      </EmptyState>
    </div>
  );
}
