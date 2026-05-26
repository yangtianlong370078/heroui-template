"use client";

import {TrendChip} from "@heroui-pro/react";

export default function TrendChipDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-2xl p-6">
      <TrendChip trend="up">+3.3%</TrendChip>
      <TrendChip trend="down">-2.1%</TrendChip>
      <TrendChip trend="neutral">0.0%</TrendChip>
      <TrendChip trend="up">
        +12%
        <TrendChip.Suffix>vs last month</TrendChip.Suffix>
      </TrendChip>
      <TrendChip trend="down">
        -5.7%
        <TrendChip.Suffix>vs last week</TrendChip.Suffix>
      </TrendChip>
    </div>
  );
}
