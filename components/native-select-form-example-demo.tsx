"use client";

import {Description, Label} from "@heroui/react";
import {useState} from "react";

import {NativeSelect} from "@heroui-pro/react";

export default function NativeSelectFormExampleDemo() {
  const [submitted, setSubmitted] = useState<Record<string, string> | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};

    formData.forEach((val, key) => {
      data[key] = val.toString();
    });
    setSubmitted(data);
  };

  return (
    <form className="flex w-[300px] flex-col gap-4" onSubmit={onSubmit}>
      <NativeSelect fullWidth>
        <Label>Country</Label>
        <NativeSelect.Trigger required name="country">
          <NativeSelect.Option value="">Select a country</NativeSelect.Option>
          <NativeSelect.OptGroup label="North America">
            <NativeSelect.Option value="us">United States</NativeSelect.Option>
            <NativeSelect.Option value="ca">Canada</NativeSelect.Option>
            <NativeSelect.Option value="mx">Mexico</NativeSelect.Option>
          </NativeSelect.OptGroup>
          <NativeSelect.OptGroup label="Europe">
            <NativeSelect.Option value="uk">United Kingdom</NativeSelect.Option>
            <NativeSelect.Option value="fr">France</NativeSelect.Option>
            <NativeSelect.Option value="de">Germany</NativeSelect.Option>
          </NativeSelect.OptGroup>
          <NativeSelect.OptGroup label="Asia">
            <NativeSelect.Option value="jp">Japan</NativeSelect.Option>
            <NativeSelect.Option value="kr">South Korea</NativeSelect.Option>
            <NativeSelect.Option value="in">India</NativeSelect.Option>
          </NativeSelect.OptGroup>
          <NativeSelect.Indicator />
        </NativeSelect.Trigger>
      </NativeSelect>

      <NativeSelect fullWidth>
        <Label>Role</Label>
        <NativeSelect.Trigger required name="role">
          <NativeSelect.Option value="">Select a role</NativeSelect.Option>
          <NativeSelect.Option value="admin">Admin</NativeSelect.Option>
          <NativeSelect.Option value="editor">Editor</NativeSelect.Option>
          <NativeSelect.Option value="viewer">Viewer</NativeSelect.Option>
          <NativeSelect.Indicator />
        </NativeSelect.Trigger>
        <Description>Choose the user&apos;s permission level</Description>
      </NativeSelect>

      <button
        className="bg-accent text-accent-foreground rounded-field px-4 py-2 text-sm font-medium"
        type="submit"
      >
        Submit
      </button>

      {!!submitted && (
        <pre className="text-muted bg-surface rounded-lg p-3 text-xs">
          {JSON.stringify(submitted, null, 2)}
        </pre>
      )}
    </form>
  );
}
