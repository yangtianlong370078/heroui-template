"use client";

import {useState} from "react";
import {Card} from "@heroui/react";

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
 
export default function JeDatePickerDemo() {
  const [value, setValue] = useState<MonthValue>({year: 2025, month: 1});

  return (
    <Card className="w-full max-w-[360px] rounded-2xl">
      <Card.Header>
        <Card.Title className="text-base">月份选择</Card.Title>
        <Card.Description className="text-xs text-default-500">
          展示每月完成率，支持快速切换年份
        </Card.Description>
      </Card.Header>
      <Card.Content className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-default-600">所选月份</span>
          <JeDatePicker stats={sampleStats} value={value} onChange={setValue} />
        </div>
        <div className="rounded-md bg-default-100 px-3 py-2 text-xs text-default-600">
          当前值：<span className="font-medium tabular-nums">{value.year}年{value.month}月</span>
        </div>
      </Card.Content>
    </Card>
  );
}
