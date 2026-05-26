"use client";

import {CloudArrowUpIn} from "@gravity-ui/icons";
import {useState} from "react";
import {DropZone} from "@heroui-pro/react";

export default function DropZoneDemo() {
  const [fileNames, setFileNames] = useState<string[]>([]);

  return (
    <div className="w-full max-w-[480px] rounded-2xl p-6">
      <DropZone>
        <DropZone.Area>
          <DropZone.Icon>
            <CloudArrowUpIn className="size-8" />
          </DropZone.Icon>
          <DropZone.Label>Drop files here</DropZone.Label>
          <DropZone.Description>or click to browse files</DropZone.Description>
          <DropZone.Trigger className="text-sm">Browse files</DropZone.Trigger>
          <DropZone.Input
            multiple
            onSelect={(fl) =>
              setFileNames((prev) => [...prev, ...Array.from(fl).map((f) => f.name)])
            }
          />
        </DropZone.Area>
      </DropZone>
      {fileNames.length > 0 && (
        <ul className="mt-4 space-y-1">
          {fileNames.map((name, i) => (
            <li key={i} className="text-muted text-sm">
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
