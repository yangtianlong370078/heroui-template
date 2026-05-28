"use client";

import {EmptyState} from "@heroui-pro/react";

export default function EmptyStateMinimalDemo() {
  return (
    <div className="w-full max-w-[420px]">
      <EmptyState>
        <EmptyState.Header>
          <EmptyState.Title>Nothing here yet</EmptyState.Title>
          <EmptyState.Description>
            Content will appear here once it becomes available.
          </EmptyState.Description>
        </EmptyState.Header>
      </EmptyState>
    </div>
  );
}
