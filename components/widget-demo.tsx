"use client";

import {ChartTooltip, LineChart, Widget} from "@heroui-pro/react";

const tokensData = [
  {date: "Sep 01", input: 35000, output: 22000},
  {date: "Sep 05", input: 15000, output: 5000},
  {date: "Sep 10", input: 40000, output: 15000},
  {date: "Sep 15", input: 90000, output: 40000},
  {date: "Sep 20", input: 70000, output: 20000},
  {date: "Sep 25", input: 45000, output: 18000},
  {date: "Sep 30", input: 28000, output: 8000},
];

export default function WidgetDemo() {
  return (
    <Widget className="w-full max-w-[520px]">
      <Widget.Header>
        <Widget.Title>Tokens Over Time</Widget.Title>
        <Widget.Legend>
          <Widget.LegendItem color="var(--chart-4)">Input</Widget.LegendItem>
          <Widget.LegendItem color="var(--chart-1)">Output</Widget.LegendItem>
        </Widget.Legend>
      </Widget.Header>
      <Widget.Content>
        <LineChart data={tokensData} height={220}>
          <LineChart.Grid vertical={false} />
          <LineChart.XAxis dataKey="date" tickMargin={8} />
          <LineChart.YAxis
            tickFormatter={(v: number) => (v >= 1000 ? `${(v / 1000).toFixed(0)}k` : `${v}`)}
            width={40}
          />
          <LineChart.Line
            dataKey="input"
            dot={false}
            name="Input"
            stroke="var(--chart-4)"
            strokeWidth={2}
            type="monotone"
          />
          <LineChart.Line
            dataKey="output"
            dot={false}
            name="Output"
            stroke="var(--chart-1)"
            strokeWidth={2}
            type="monotone"
          />
          <LineChart.Tooltip
            content={({active, label, payload}) => {
              if (!active || !payload?.length) return null;
              return (
                <ChartTooltip>
                  <ChartTooltip.Header>{label}</ChartTooltip.Header>
                  {payload.map((entry) => (
                    <ChartTooltip.Item key={String(entry.dataKey)}>
                      <ChartTooltip.Indicator color={entry.color ?? entry.stroke} />
                      <ChartTooltip.Label>{entry.name}</ChartTooltip.Label>
                      <ChartTooltip.Value>{Number(entry.value).toLocaleString()}</ChartTooltip.Value>
                    </ChartTooltip.Item>
                  ))}
                </ChartTooltip>
              );
            }}
          />
        </LineChart>
      </Widget.Content>
    </Widget>
  );
}
