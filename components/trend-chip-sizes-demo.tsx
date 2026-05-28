"use client";

import {TrendChip} from "@heroui-pro/react";

export default function TrendChipSizesDemo() {
  return (
    <div className="flex items-center gap-3 rounded-2xl p-6">
      {(["sm", "md", "lg"] as const).map((size) => (
        <TrendChip key={size} size={size} trend="up">
          +3.3%
        </TrendChip>
      ))}
    </div>
  );
}
