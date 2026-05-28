"use client";

import {Ellipsis, Envelope, Gear, Globe, Plus, TrashBin} from "@gravity-ui/icons";
import {Button} from "@heroui/react";

import {PressableFeedback} from "@heroui-pro/react";

export default function PressableFeedbackWithHighlightDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-3">
        <Button>
          <PressableFeedback.Highlight />
          Primary
        </Button>
        <Button variant="secondary">
          <PressableFeedback.Highlight />
          Secondary
        </Button>
        <Button variant="tertiary">
          <PressableFeedback.Highlight />
          Tertiary
        </Button>
        <Button variant="outline">
          <PressableFeedback.Highlight />
          Outline
        </Button>
        <Button variant="ghost">
          <PressableFeedback.Highlight />
          Ghost
        </Button>
        <Button variant="danger">
          <PressableFeedback.Highlight />
          Danger
        </Button>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button>
          <PressableFeedback.Highlight />
          <Globe />
          Search
        </Button>
        <Button variant="secondary">
          <PressableFeedback.Highlight />
          <Plus />
          Add Member
        </Button>
        <Button variant="tertiary">
          <PressableFeedback.Highlight />
          <Envelope />
          Email
        </Button>
        <Button variant="danger">
          <PressableFeedback.Highlight />
          <TrashBin />
          Delete
        </Button>
      </div>

      <div className="flex gap-3">
        <Button isIconOnly variant="tertiary">
          <PressableFeedback.Highlight />
          <Ellipsis />
        </Button>
        <Button isIconOnly variant="secondary">
          <PressableFeedback.Highlight />
          <Gear />
        </Button>
        <Button isIconOnly variant="danger">
          <PressableFeedback.Highlight />
          <TrashBin />
        </Button>
      </div>
    </div>
  );
}
