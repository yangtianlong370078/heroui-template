"use client";

import {NumberValue} from "@heroui-pro/react";

export default function NumberValueDemo() {
  return (
    <div className="flex flex-col gap-3 rounded-2xl p-6">
      <div className="flex items-baseline gap-4">
        <span className="text-muted w-12 text-xs">USD</span>
        <NumberValue
          className="text-foreground text-2xl font-semibold"
          currency="USD"
          style="currency"
          value={228441}
        />
      </div>
      <div className="flex items-baseline gap-4">
        <span className="text-muted w-12 text-xs">EUR</span>
        <NumberValue
          className="text-foreground text-2xl font-semibold"
          currency="EUR"
          style="currency"
          value={228441}
        />
      </div>
      <div className="flex items-baseline gap-4">
        <span className="text-muted w-12 text-xs">%</span>
        <NumberValue
          className="text-foreground text-2xl font-semibold"
          maximumFractionDigits={1}
          style="percent"
          value={0.038}
        />
      </div>
      <div className="flex items-baseline gap-4">
        <span className="text-muted w-12 text-xs">Compact</span>
        <NumberValue
          className="text-foreground text-2xl font-semibold"
          notation="compact"
          value={1250000}
        />
      </div>
    </div>
  );
}
