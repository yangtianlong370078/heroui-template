"use client";

import {useMemo, useState} from "react";
import {Button, Popover} from "@heroui/react";

export interface MonthValue {
  year: number;
  month: number; // 1-12
}

export interface MonthCompletion {
  year: number;
  month: number; // 1-12
  /** Completion percentage 0-100. `null` means no data ("-"). */
  percent: number | null;
}

interface JeDatePickerProps {
  value?: MonthValue;
  defaultValue?: MonthValue;
  onChange?: (value: MonthValue) => void;
  /** Optional per-month statistics rendered below each month label. */
  stats?: MonthCompletion[];
  /** Minimum / maximum selectable year. */
  minYear?: number;
  maxYear?: number;
  /** Label shown on the trigger button. Receives the current value. */
  formatTrigger?: (v: MonthValue) => string;
  className?: string;
}

const DEFAULT_TRIGGER_FORMAT = (v: MonthValue) => `${v.year}年${v.month}月`;

function getPercentColor(p: number | null | undefined): string {
  if (p === null || p === undefined) return "text-default-400";
  if (p === 0) return "text-danger";
  if (p < 50) return "text-warning";
  if (p < 100) return "text-warning-600";
  return "text-success";
}

function formatPercent(p: number | null | undefined): string {
  if (p === null || p === undefined) return "-";
  return `${p}%`;
}

export default function JeDatePicker({
  value,
  defaultValue,
  onChange,
  stats,
  minYear = 1970,
  maxYear = 2100,
  formatTrigger = DEFAULT_TRIGGER_FORMAT,
  className,
}: JeDatePickerProps) {
  const today = useMemo(() => new Date(), []);
  const initial: MonthValue =
    value ??
    defaultValue ?? {year: today.getFullYear(), month: today.getMonth() + 1};

  const [inner, setInner] = useState<MonthValue>(initial);
  const current = value ?? inner;

  // Panel-local navigation state (year being browsed) + draft selection
  const [open, setOpen] = useState(false);
  const [panelYear, setPanelYear] = useState<number>(current.year);
  const [draft, setDraft] = useState<MonthValue>(current);

  const statsMap = useMemo(() => {
    const m = new Map<string, number | null>();
    stats?.forEach((s) => m.set(`${s.year}-${s.month}`, s.percent));
    return m;
  }, [stats]);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (next) {
      setPanelYear(current.year);
      setDraft(current);
    }
  };

  const commit = (v: MonthValue) => {
    if (value === undefined) setInner(v);
    onChange?.(v);
  };

  const handleConfirm = () => {
    commit(draft);
    setOpen(false);
  };

  const handleThisMonth = () => {
    const v = {year: today.getFullYear(), month: today.getMonth() + 1};
    setPanelYear(v.year);
    setDraft(v);
    commit(v);
    setOpen(false);
  };

  const canPrev = panelYear > minYear;
  const canNext = panelYear < maxYear;

  return (
    <Popover isOpen={open} onOpenChange={handleOpenChange}>
      <Popover.Trigger>
        <Button className={className} size="sm" variant="flat">
          {formatTrigger(current)}
        </Button>
      </Popover.Trigger>
      <Popover.Content className="w-[280px] p-0">
        <Popover.Dialog className="flex flex-col gap-0 p-0">
          {/* Year header */}
          <div className="flex items-center justify-between border-b border-default-200/60 px-3 py-2">
            <Button
              isIconOnly
              aria-label="上一年"
              isDisabled={!canPrev}
              size="sm"
              variant="light"
              onPress={() => canPrev && setPanelYear((y) => y - 1)}
            >
              ‹
            </Button>
            <div className="text-sm font-semibold tabular-nums text-default-700">
              {panelYear}年
            </div>
            <Button
              isIconOnly
              aria-label="下一年"
              isDisabled={!canNext}
              size="sm"
              variant="light"
              onPress={() => canNext && setPanelYear((y) => y + 1)}
            >
              ›
            </Button>
          </div>

          {/* Months grid */}
          <div className="grid grid-cols-3 gap-1 p-3">
            {Array.from({length: 12}, (_, i) => i + 1).map((m) => {
              const selected = draft.year === panelYear && draft.month === m;
              const isThisMonth =
                panelYear === today.getFullYear() && m === today.getMonth() + 1;
              const percent = statsMap.get(`${panelYear}-${m}`);
              return (
                <button
                  key={m}
                  className={[
                    "flex flex-col items-center gap-0.5 rounded-md px-2 py-2 text-sm transition-colors",
                    "hover:bg-default-100",
                    selected
                      ? "bg-default-200 font-semibold text-default-900"
                      : "text-default-700",
                  ].join(" ")}
                  type="button"
                  onClick={() => setDraft({year: panelYear, month: m})}
                >
                  <span
                    className={`tabular-nums ${
                      isThisMonth && !selected ? "text-primary" : ""
                    }`}
                  >
                    {m}月
                  </span>
                  <span className={`text-[11px] tabular-nums ${getPercentColor(percent)}`}>
                    {formatPercent(percent)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Footer actions */}
          <div className="flex items-center justify-between border-t border-default-200/60 px-3 py-2">
            <Button color="primary" size="sm" variant="flat" onPress={handleThisMonth}>
              本月
            </Button>
            <Button color="primary" size="sm" onPress={handleConfirm}>
              确定
            </Button>
          </div>
        </Popover.Dialog>
      </Popover.Content>
    </Popover>
  );
}
