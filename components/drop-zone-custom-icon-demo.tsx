"use client";

import {Picture} from "@gravity-ui/icons";

import {DropZone} from "@heroui-pro/react";

export default function DropZoneCustomIconDemo() {
  return (
    <DropZone className="w-[420px]">
      <DropZone.Area>
        <DropZone.Icon>
          <Picture />
        </DropZone.Icon>
        <DropZone.Label>Set your profile photo</DropZone.Label>
        <DropZone.Description>PNG or JPG under 2 MB. Best at 400 x 400 px.</DropZone.Description>
        <DropZone.Trigger>Pick Image</DropZone.Trigger>
      </DropZone.Area>
      <DropZone.Input accept="image/png,image/jpeg" />
    </DropZone>
  );
}
