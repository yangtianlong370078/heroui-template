"use client";

import {Cloud} from "@gravity-ui/icons";
import {Button} from "@heroui/react";
import {EmptyState} from "@heroui-pro/react";

export default function EmptyStateOutlineDemo() {
  return (
    <div className="w-full max-w-[420px]">
      <EmptyState className="border-border rounded-2xl border border-dashed">
        <EmptyState.Header>
          <EmptyState.Media variant="icon">
            <Cloud />
          </EmptyState.Media>
          <EmptyState.Title>Cloud Storage Empty</EmptyState.Title>
          <EmptyState.Description>
            Upload files to your cloud storage to access them anywhere.
          </EmptyState.Description>
        </EmptyState.Header>
        <EmptyState.Content>
          <Button size="sm" variant="outline">
            Upload Files
          </Button>
        </EmptyState.Content>
      </EmptyState>
    </div>
  );
}
