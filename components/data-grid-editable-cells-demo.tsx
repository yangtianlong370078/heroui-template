"use client";

import type {Key} from "@heroui/react";
import type {DataGridColumn} from "@heroui-pro/react";

import {Check, Pencil, Xmark} from "@gravity-ui/icons";
import {Button, Chip, Input, ListBox, Switch, TextField} from "@heroui/react";
import {useCallback, useState} from "react";

import {DataGrid, InlineSelect, NumberStepper} from "@heroui-pro/react";

type Priority = "high" | "medium" | "low";

interface Feature {
  id: string;
  title: string;
  priority: Priority;
  effort: number;
  enabled: boolean;
}

const initialFeatures: Feature[] = [
  {effort: 8, enabled: true, id: "feat-1", priority: "high", title: "Dark mode"},
  {effort: 3, enabled: true, id: "feat-2", priority: "medium", title: "CSV export"},
  {effort: 5, enabled: false, id: "feat-3", priority: "low", title: "Keyboard shortcuts"},
  {effort: 13, enabled: true, id: "feat-4", priority: "high", title: "Two-factor auth"},
  {effort: 8, enabled: false, id: "feat-5", priority: "medium", title: "Bulk import"},
  {effort: 5, enabled: true, id: "feat-6", priority: "high", title: "Audit log"},
  {effort: 3, enabled: false, id: "feat-7", priority: "low", title: "Webhooks"},
  {effort: 8, enabled: true, id: "feat-8", priority: "medium", title: "Custom branding"},
];

const priorityColorMap: Record<Priority, "danger" | "warning" | "default"> = {
  high: "danger",
  low: "default",
  medium: "warning",
};

const priorityOptions: {id: Priority; label: string}[] = [
  {id: "high", label: "High"},
  {id: "medium", label: "Medium"},
  {id: "low", label: "Low"},
];

function InlineEditTitle({onSave, value}: {value: string; onSave: (newValue: string) => void}) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  const handleSave = () => {
    if (draft.trim()) onSave(draft.trim());
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraft(value);
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <div className="group/edit flex items-center gap-1.5">
        <span className="text-sm font-medium">{value}</span>
        <Button isIconOnly aria-label="Edit title" className="opacity-0 group-hover/edit:opacity-100" size="sm" variant="ghost" onPress={() => setIsEditing(true)}>
          <Pencil className="size-3" />
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1">
      <TextField autoFocus aria-label="Edit title" value={draft} onChange={setDraft} onKeyDown={(event) => {
        if (event.key === "Enter") handleSave();
        if (event.key === "Escape") handleCancel();
      }}>
        <Input className="h-7 w-[180px] text-sm" />
      </TextField>
      <Button isIconOnly aria-label="Save" size="sm" variant="ghost" onPress={handleSave}><Check className="size-3" /></Button>
      <Button isIconOnly aria-label="Cancel" size="sm" variant="ghost" onPress={handleCancel}><Xmark className="size-3" /></Button>
    </div>
  );
}

export default function DataGridEditableCellsDemo() {
  const [features, setFeatures] = useState(initialFeatures);

  const updateFeature = useCallback((id: string, patch: Partial<Feature>) => {
    setFeatures((prev) => prev.map((feature) => (feature.id === id ? {...feature, ...patch} : feature)));
  }, []);

  const columns: DataGridColumn<Feature>[] = [
    {
      cell: (item) => <InlineEditTitle value={item.title} onSave={(title) => updateFeature(item.id, {title})} />,
      header: "Feature",
      id: "title",
      isRowHeader: true,
      minWidth: 260,
    },
    {
      accessorKey: "priority",
      cell: (item) => (
        <InlineSelect aria-label="Priority" selectedKey={item.priority} onSelectionChange={(key: Key | null) => {
          if (key) updateFeature(item.id, {priority: key as Priority});
        }}>
          <InlineSelect.Trigger>
            <InlineSelect.Value>
              <Chip color={priorityColorMap[item.priority]} size="sm" variant="soft">
                <Chip.Label className="capitalize">{item.priority}</Chip.Label>
              </Chip>
            </InlineSelect.Value>
            <InlineSelect.Indicator />
          </InlineSelect.Trigger>
          <InlineSelect.Popover>
            <ListBox>
              {priorityOptions.map((option) => (
                <ListBox.Item key={option.id} id={option.id} textValue={option.label}>
                  <Chip color={priorityColorMap[option.id]} size="sm" variant="soft">
                    <Chip.Label>{option.label}</Chip.Label>
                  </Chip>
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </InlineSelect.Popover>
        </InlineSelect>
      ),
      header: "Priority",
      id: "priority",
      minWidth: 150,
    },
    {
      accessorKey: "effort",
      align: "center",
      cell: (item) => (
        <NumberStepper aria-label="Story points" maxValue={21} minValue={1} size="sm" value={item.effort} onChange={(value) => updateFeature(item.id, {effort: value})}>
          <NumberStepper.Group>
            <NumberStepper.DecrementButton />
            <NumberStepper.Value />
            <NumberStepper.IncrementButton />
          </NumberStepper.Group>
        </NumberStepper>
      ),
      header: "Story Points",
      id: "effort",
      minWidth: 120,
    },
    {
      accessorKey: "enabled",
      align: "center",
      cell: (item) => (
        <Switch aria-label="Enabled" isSelected={item.enabled} onChange={(value) => updateFeature(item.id, {enabled: value})}>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
        </Switch>
      ),
      header: "Enabled",
      id: "enabled",
      minWidth: 100,
    },
  ];

  const enabledCount = features.filter((feature) => feature.enabled).length;
  const totalEffort = features.reduce((sum, feature) => sum + feature.effort, 0);

  return (
    <div className="flex w-full max-w-3xl flex-col gap-3">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold">Feature Flags</h2>
        <p className="text-muted text-sm">Edit titles, change priorities, adjust story points, and toggle features inline.</p>
      </div>
      <DataGrid aria-label="Feature flags" columns={columns} data={features} getRowId={(item) => item.id} />
      <div className="text-muted flex items-center gap-4 text-sm">
        <span>{enabledCount} of {features.length} enabled</span>
        <span>Total effort: {totalEffort} pts</span>
      </div>
    </div>
  );
}