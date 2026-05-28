"use client";

import {Bell} from "@gravity-ui/icons";
import {Button} from "@heroui/react";
import {EmptyState} from "@heroui-pro/react";

export default function EmptyStateWithBackgroundDemo() {
  return (
    <div className="w-full max-w-[420px]">
      <EmptyState className="bg-surface-secondary rounded-2xl">
        <EmptyState.Header>
          <EmptyState.Media className="bg-surface-tertiary border" variant="icon">
            <Bell />
          </EmptyState.Media>
          <EmptyState.Title>No Notifications</EmptyState.Title>
          <EmptyState.Description className="max-w-xs text-pretty">
            You&apos;re all caught up. New notifications will appear here.
          </EmptyState.Description>
        </EmptyState.Header>
        <EmptyState.Content>
          <Button variant="outline">Refresh</Button>
        </EmptyState.Content>
      </EmptyState>
    </div>
  );
}
