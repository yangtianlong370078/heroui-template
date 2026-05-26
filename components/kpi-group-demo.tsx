"use client";

import {KPI, KPIGroup} from "@heroui-pro/react";

export default function KpiGroupDemo() {
  return (
    <div className="w-full max-w-[900px] rounded-2xl p-6">
      <KPIGroup aria-label="KPI Metrics">
        <KPI>
          <KPI.Header>
            <KPI.Title>Total Subscribers</KPI.Title>
          </KPI.Header>
          <KPI.Content>
            <KPI.Value maximumFractionDigits={0} value={71897} />
            <KPI.Trend trend="up">12%</KPI.Trend>
          </KPI.Content>
        </KPI>
        <KPIGroup.Separator />
        <KPI>
          <KPI.Header>
            <KPI.Title>Avg. Open Rate</KPI.Title>
          </KPI.Header>
          <KPI.Content>
            <KPI.Value maximumFractionDigits={2} style="percent" value={0.5816} />
            <KPI.Trend trend="up">2.02%</KPI.Trend>
          </KPI.Content>
        </KPI>
        <KPIGroup.Separator />
        <KPI>
          <KPI.Header>
            <KPI.Title>Avg. Click Rate</KPI.Title>
          </KPI.Header>
          <KPI.Content>
            <KPI.Value maximumFractionDigits={2} style="percent" value={0.2457} />
            <KPI.Trend trend="down">4.05%</KPI.Trend>
          </KPI.Content>
        </KPI>
      </KPIGroup>
    </div>
  );
}
