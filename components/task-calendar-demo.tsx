"use client";

import {useMemo, useState} from "react";
import {Button, Card, Chip} from "@heroui/react";

import JeDatePicker, {MonthCompletion, MonthValue} from "./je-date-picker";

const sampleStats: MonthCompletion[] = [
  {year: 2025, month: 1, percent: 0},
  {year: 2025, month: 2, percent: 0},
  {year: 2025, month: 3, percent: 0},
  {year: 2025, month: 4, percent: 0},
  {year: 2025, month: 5, percent: null},
  {year: 2025, month: 6, percent: null},
  {year: 2025, month: 7, percent: 95},
  {year: 2025, month: 8, percent: 3},
  {year: 2025, month: 9, percent: 1},
  {year: 2025, month: 10, percent: null},
  {year: 2025, month: 11, percent: 0},
  {year: 2025, month: 12, percent: 1},
];

type DayStatus = "pending" | "weekend" | "done" | "missed" | "warn" | "empty";

interface DayInfo {
  date: Date;
  inMonth: boolean;
  taskCount: number;
  doneCount: number;
  isWeekend: boolean;
  isFuture: boolean;
  status: DayStatus;
  label: string;
}

interface StatisticsLearn {
  year: number;
  month: number; // 1-12
  day: number;
  count: number;
}

interface MonthlyTask {
  count: number;
  /** 1=只周六, 2=只周日, 3=周六+周日 */
  weekend: 0 | 1 | 2 | 3;
}

interface MonthlyData {
  year: number;
  month: number; // 1-12
  statisticsLearns: StatisticsLearn[];
  task: MonthlyTask | null;
}

const WEEK_LABELS = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];

function isSameYM(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}

/** Build full 6×7 grid for the month containing `cursor`, starting on Monday. */
function buildGrid(cursor: Date, data: MonthlyData | undefined, today: Date): DayInfo[] {
  const year = cursor.getFullYear();
  const month = cursor.getMonth(); // 0-11
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const daysInMonth = last.getDate();

  // 0=Sunday → convert to Monday-first index (Mon=0..Sun=6)
  const firstWeekIdx = (first.getDay() + 6) % 7;

  // ----- compute task distribution (mirrors the legacy logic) -----
  const taskTotal = data?.task?.count ?? 0;
  const weekendMode = data?.task?.weekend ?? 0;

  const weekendDays = new Set<number>();
  if (weekendMode > 0) {
    for (let d = 1; d <= daysInMonth; d++) {
      const dow = new Date(year, month, d).getDay(); // 0=Sun,6=Sat
      const include =
        (weekendMode === 1 && dow === 6) ||
        (weekendMode === 2 && dow === 0) ||
        (weekendMode === 3 && (dow === 0 || dow === 6));
      if (include) weekendDays.add(d);
    }
  }

  const workingDayCount = Math.max(1, daysInMonth - weekendDays.size);
  const quotient = taskTotal > 0 ? Math.floor(taskTotal / workingDayCount) : 0;
  let remainder = taskTotal > 0 ? taskTotal % workingDayCount : 0;

  const learnMap = new Map<string, number>();
  data?.statisticsLearns.forEach((s) => {
    learnMap.set(`${s.year}-${s.month}-${s.day}`, s.count);
  });

  const cells: DayInfo[] = [];

  // leading days (previous month)
  for (let i = 0; i < firstWeekIdx; i++) {
    const d = new Date(year, month, -(firstWeekIdx - 1 - i));
    cells.push({
      date: d,
      inMonth: false,
      taskCount: 0,
      doneCount: 0,
      isWeekend: false,
      isFuture: d > today,
      status: "empty",
      label: "",
    });
  }

  // current month
  for (let day = 1; day <= daysInMonth; day++) {
    const d = new Date(year, month, day);
    const dateKey = `${year}-${month + 1}-${day}`;
    const doneCount = learnMap.get(dateKey) ?? 0;
    const isWeekend = weekendDays.has(day);

    let taskCount = 0;
    if (taskTotal > 0) {
      if (isWeekend) {
        taskCount = 0;
        remainder++;
      } else {
        taskCount = quotient + (remainder >= day ? 1 : 0);
      }
    }

    const isPast = d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const isToday = d.toDateString() === today.toDateString();
    const isFuture = d > today && !isToday;

    let status: DayStatus = "empty";
    let label = "";

    if (taskTotal === 0) {
      if (doneCount > 0) {
        status = "done";
        label = String(doneCount);
      }
    } else {
      label = doneCount > 0 ? `${taskCount}/${doneCount}` : String(taskCount);
      if (isWeekend) {
        status = "weekend";
      } else if (isPast || isToday) {
        if (doneCount >= taskCount) status = "done";
        else if (doneCount === 0) status = "missed";
        else status = "warn";
      } else {
        status = "pending"; // future
      }
    }

    cells.push({
      date: d,
      inMonth: true,
      taskCount,
      doneCount,
      isWeekend,
      isFuture,
      status,
      label,
    });
  }

  // trailing days to fill 42 cells
  while (cells.length % 7 !== 0 || cells.length < 42) {
    const offset = cells.length - (firstWeekIdx + daysInMonth) + 1;
    const d = new Date(year, month + 1, offset);
    cells.push({
      date: d,
      inMonth: false,
      taskCount: 0,
      doneCount: 0,
      isWeekend: false,
      isFuture: d > today,
      status: "empty",
      label: "",
    });
  }

  return cells;
}

const STATUS_BAR: Record<DayStatus, string> = {
  pending: "bg-[#FF6B3D] text-white", // 未到期 / 未完成
  weekend: "bg-[#1FB89A] text-white", // 周六/周日
  done: "bg-[#1FB89A] text-white", // 已完成
  missed: "bg-[#FF6B3D] text-white", // 未完成（过去）
  warn: "bg-[#F5B400] text-white", // 部分完成
  empty: "",
};

function DemoTaskCalendar() {
  const today = useMemo(() => new Date(), []);
  const [cursor, setCursor] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));

  // ---- Demo dataset ----
  const data: MonthlyData = useMemo(() => {
    const y = cursor.getFullYear();
    const m = cursor.getMonth() + 1;
    return {
      year: y,
      month: m,
      task: {count: 50, weekend: 3},
      statisticsLearns: [
        {year: y, month: m, day: 1, count: 2},
        {year: y, month: m, day: 2, count: 2},
        {year: y, month: m, day: 3, count: 2},
        {year: y, month: m, day: 4, count: 2},
        {year: y, month: m, day: 6, count: 2},
        {year: y, month: m, day: 7, count: 2},
        {year: y, month: m, day: 8, count: 2},
        {year: y, month: m, day: 9, count: 2},
        {year: y, month: m, day: 10, count: 2},
        {year: y, month: m, day: 11, count: 2},
        {year: y, month: m, day: 13, count: 2},
        {year: y, month: m, day: 20, count: 32},
        {year: y, month: m, day: 22, count: 3},
        {year: y, month: m, day: 28, count: 1},
      ],
    };
  }, [cursor]);

  const cells = useMemo(() => buildGrid(cursor, data, today), [cursor, data, today]);

  const goPrev = () => setCursor((c) => new Date(c.getFullYear(), c.getMonth() - 1, 1));
  const goNext = () => setCursor((c) => new Date(c.getFullYear(), c.getMonth() + 1, 1));
  const goToday = () => setCursor(new Date(today.getFullYear(), today.getMonth(), 1));

  const monthLabel = `${cursor.getFullYear()}年${cursor.getMonth() + 1}月`;
  const isCurrentMonth = isSameYM(cursor, today);

  // stats summary
  const totals = useMemo(() => {
    let task = 0;
    let done = 0;
    cells.forEach((c) => {
      if (!c.inMonth) return;
      task += c.taskCount;
      done += c.doneCount;
    });
    return {task, done};
  }, [cells]);

  return (
    <Card className="w-full max-w-[760px] rounded-2xl">
      <Card.Header className="flex-row items-center justify-between">
        <div className="flex flex-col gap-1">
          <Card.Title className="text-base">任务日历</Card.Title>
          <Card.Description className="text-xs text-default-500">
            按月查看每日任务量与完成情况
          </Card.Description>
        </div>
        <div className="flex items-center gap-2">
          <Chip color="success" size="sm" variant="soft">
            已完成 {totals.done}
          </Chip>
          <Chip color="warning" size="sm" variant="soft">
            待完成 {Math.max(0, totals.task - totals.done)}
          </Chip>
        </div>
      </Card.Header>

      <Card.Content className=" flex flex-col gap-4">
        {/* Toolbar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Button isIconOnly aria-label="上一月" size="sm" variant="flat" onPress={goPrev}>
              ‹
            </Button>
            <Button isIconOnly aria-label="下一月" size="sm" variant="flat" onPress={goNext}>
              ›
            </Button>
            <Button
              className="ml-1"
              isDisabled={isCurrentMonth}
              size="sm"
              variant="flat"
              onPress={goToday}
            >
              今天
            </Button>
          </div>
          <div className="text-sm font-medium text-default-700">
            <JeDatePicker
              value={{year: cursor.getFullYear(), month: cursor.getMonth() + 1}}
              onChange={(v: MonthValue) =>
                setCursor(new Date(v.year, v.month - 1, 1))
              }

               stats={sampleStats}
            >
              <button
                aria-label="选择月份"
                className="cursor-pointer rounded-md px-2 py-1 text-sm font-medium text-default-700 transition-colors hover:bg-default-100"
                type="button"
              >
                {monthLabel}
              </button>
            </JeDatePicker>
          </div>
          <div className="w-[88px]" aria-hidden />
        </div>

        {/* Grid */}
        <div className="rounded-xl border border-default-200/60 bg-content1/40 p-3">
          {/* Weekday header */}
          <div className="mb-2 grid grid-cols-7 gap-2">
            {WEEK_LABELS.map((w) => (
              <div
                key={w}
                className="text-center text-xs font-medium tracking-wide text-default-500"
              >
                {w}
              </div>
            ))}
          </div>

          {/* 6 weeks — skip rows that have no in-month cells */}
          <div className="grid grid-cols-7 gap-2">
            {(() => {
              const rows: DayInfo[][] = [];
              for (let r = 0; r < cells.length / 7; r++) {
                rows.push(cells.slice(r * 7, r * 7 + 7));
              }
              return rows
                .filter((row) => row.some((c) => c.inMonth))
                .flat()
                .map((cell, i) => (
                  <DayCell
                    key={i}
                    cell={cell}
                    isToday={cell.date.toDateString() === today.toDateString()}
                  />
                ));
            })()}
          </div>
        </div>

        {/* Legend (footer) */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-1 text-[11px] text-default-500">
          <Legend color="#FF6B3D" label="待完成" />
          <Legend color="#F5B400" label="部分完成" />
          <Legend color="#1FB89A" label="已完成 / 休" />
        </div>
      </Card.Content>
    </Card>
  );
}

function Legend({color, label}: {color: string; label: string}) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="h-2.5 w-2.5 rounded-sm" style={{background: color}} />
      <span>{label}</span>
    </div>
  );
}

function DayCell({cell, isToday}: {cell: DayInfo; isToday: boolean}) {
  const dimmed = !cell.inMonth;
  const showBar = cell.status !== "empty" && cell.label !== "";

  return (
    <div
      className={["flex min-h-[64px] flex-col gap-1.5 rounded-lg p-0.5", dimmed ? "opacity-40" : "", isToday ? "today-bg" : ""].join(" ")}
    >
      <div className="flex justify-center">
        <span
          className={[
            "flex h-7 w-7 items-center justify-center rounded-full text-sm tabular-nums",
            isToday
              ? "font-extrabold text-primary underline decoration-2 underline-offset-2"
              : cell.isWeekend
                ? "font-semibold text-default-500"
                : "font-semibold text-default-800",
          ].join(" ")}
        >
          {cell.date.getDate()}
        </span>
      </div>
      {showBar ? (
        <div
          className={`flex h-6 items-center justify-center rounded-md px-1 text-[11px] font-medium tabular-nums shadow-sm transition-transform hover:scale-[1.03] ${STATUS_BAR[cell.status]}`}
          title={`任务: ${cell.taskCount} / 完成: ${cell.doneCount}`}
        >
          {cell.label}
        </div>
      ) : (
        <div className="h-6" />
      )}
    </div>
  );
}

export default DemoTaskCalendar;
