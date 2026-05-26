"use client";

import ActionBarDemo from "@/components/action-bar-demo";
import AreaChartDemo from "@/components/area-chart-demo";
import BarChartDemo from "@/components/bar-chart-demo";
import CarouselDemo from "@/components/carousel-demo";
import CellColorPickerDemo from "@/components/cell-color-picker-demo";
import CellSelectDemo from "@/components/cell-select-demo";
import CellSliderDemo from "@/components/cell-slider-demo";
import CellSwitchDemo from "@/components/cell-switch-demo";
import CheckboxButtonGroupDemo from "@/components/checkbox-button-group-demo";
import CommandDemo from "@/components/command-demo";
import ComposedChartDemo from "@/components/composed-chart-demo";
import ContextMenuDemo from "@/components/context-menu-demo";
import DataGridDemo from "@/components/data-grid-demo";
import DropZoneDemo from "@/components/drop-zone-demo";
import EmojiReactionButtonDemo from "@/components/emoji-reaction-button-demo";
import EmptyStateDemo from "@/components/empty-state-demo";
import FileTreeDemo from "@/components/file-tree-demo";
import FloatingTocDemo from "@/components/floating-toc-demo";
import HoverCardDemo from "@/components/hover-card-demo";
import InlineSelectDemo from "@/components/inline-select-demo";
import ItemCardDemo from "@/components/item-card-demo";
import ItemCardGroupDemo from "@/components/item-card-group-demo";
import JeDatePickerDemo from "@/components/je-date-picker-demo";
import KanbanDemo from "@/components/kanban-demo";
import KpiDemo from "@/components/kpi-demo";
import KpiGroupDemo from "@/components/kpi-group-demo";
import LineChartDemo from "@/components/line-chart-demo";
import ListViewDemo from "@/components/list-view-demo";
import NativeSelectDemo from "@/components/native-select-demo";
import NavbarProDemo from "@/components/navbar-pro-demo";
import NumberStepperDemo from "@/components/number-stepper-demo";
import NumberValueDemo from "@/components/number-value-demo";
import PieChartDemo from "@/components/pie-chart-demo";
import PressableFeedbackDemo from "@/components/pressable-feedback-demo";
import RadarChartDemo from "@/components/radar-chart-demo";
import RadialChartDemo from "@/components/radial-chart-demo";
import RadioButtonGroupDemo from "@/components/radio-button-group-demo";
import RatingDemo from "@/components/rating-demo";
import ResizableDemo from "@/components/resizable-demo";
import SegmentDemo from "@/components/segment-demo";
import SheetDemo from "@/components/sheet-demo";
import StepperDemo from "@/components/stepper-demo";
import TaskCalendarDemo from "@/components/task-calendar-demo";
import TrendChipDemo from "@/components/trend-chip-demo";
import WidgetDemo from "@/components/widget-demo";

function SectionHeader({label, description}: {label: string; description: string}) {
  return (
    <div className="mb-10 flex flex-col items-center gap-3 text-center">
      <div className="flex w-full items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
        <span className="section-badge">{label}</span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
      </div>
      <p className="max-w-lg text-[13px] leading-relaxed tracking-wide text-default-400">
        {description}
      </p>
    </div>
  );
}

export default function Page() {
  return (
    <div className="page-ambient relative flex flex-col gap-[80px] py-12">
      {/* Charts */}
      <section>
        <SectionHeader
          description="Interactive data visualizations powered by Recharts."
          label="Charts"
        />
        <div className="flex flex-wrap justify-center gap-6">
          <AreaChartDemo />
          <BarChartDemo />
          <LineChartDemo />
          <PieChartDemo />
          <RadarChartDemo />
          <RadialChartDemo />
          <ComposedChartDemo />
        </div>
      </section>

      {/* Dashboard / KPI */}
      <section>
        <SectionHeader
          description="Widgets, KPI cards and trend indicators for dashboards."
          label="Dashboard"
        />
        <div className="flex flex-wrap justify-center gap-6">
          <WidgetDemo />
          <KpiDemo />
          <KpiGroupDemo />
          <TrendChipDemo />
        </div>
      </section>

      {/* Data Display */}
      <section>
        <SectionHeader
          description="Tables, lists, trees and card groups to present structured data."
          label="Data Display"
        />
        <div className="flex flex-wrap justify-center gap-6">
          <DataGridDemo />
          <ListViewDemo />
          <FileTreeDemo />
          <CarouselDemo />
          <ItemCardDemo />
          <ItemCardGroupDemo />
          <HoverCardDemo />
          <FloatingTocDemo />
          <EmptyStateDemo />
        </div>
      </section>

      {/* Calendar */}
      <section>
        <SectionHeader
          description="Monthly task calendar with per-day workload, completion and weekend awareness."
          label="Calendar"
        />
        <div className="flex justify-center">
          <TaskCalendarDemo />
        </div>
        <div className="mt-6 flex justify-center">
          <JeDatePickerDemo />
        </div>
      </section>

      {/* Kanban */}
      <section>
        <SectionHeader description="Drag-and-drop kanban board." label="Kanban" />
        <div className="flex justify-center">
          <KanbanDemo />
        </div>
      </section>

      {/* Navigation */}
      <section>
        <SectionHeader
          description="Navbar, segments, steppers, command palette and context menus."
          label="Navigation"
        />
        <div className="flex flex-wrap justify-center gap-6">
          <NavbarProDemo />
          <SegmentDemo />
          <StepperDemo />
          <CommandDemo />
          <ContextMenuDemo />
          <ActionBarDemo />
        </div>
      </section>

      {/* Forms */}
      <section>
        <SectionHeader
          description="Rich form controls: rating, selects, sliders, pickers and more."
          label="Forms"
        />
        <div className="flex flex-wrap justify-center gap-6">
          <RatingDemo />
          <NumberValueDemo />
          <NumberStepperDemo />
          <RadioButtonGroupDemo />
          <CheckboxButtonGroupDemo />
          <InlineSelectDemo />
          <NativeSelectDemo />
          <CellSwitchDemo />
          <CellSliderDemo />
          <CellSelectDemo />
          <CellColorPickerDemo />
          <DropZoneDemo />
        </div>
      </section>

      {/* Overlays & Feedback */}
      <section>
        <SectionHeader
          description="Sheets, emoji reactions and pressable feedback interactions."
          label="Overlays & Feedback"
        />
        <div className="flex flex-wrap justify-center gap-6">
          <SheetDemo />
          <EmojiReactionButtonDemo />
          <PressableFeedbackDemo />
        </div>
      </section>

      {/* Layout */}
      <section>
        <SectionHeader description="Resizable panel layouts." label="Layout" />
        <div className="flex justify-center">
          <ResizableDemo />
        </div>
      </section>
    </div>
  );
}
