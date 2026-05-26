"use client";

import {Globe, Plus, TrashBin} from "@gravity-ui/icons";
import {Button} from "@heroui/react";
import {PressableFeedback} from "@heroui-pro/react";

export default function PressableFeedbackDemo() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl p-6">
      <div className="flex flex-wrap gap-3">
        <Button>
          <PressableFeedback.Ripple />
          Primary
        </Button>
        <Button variant="secondary">
          <PressableFeedback.Ripple />
          Secondary
        </Button>
        <Button variant="outline">
          <PressableFeedback.Ripple />
          Outline
        </Button>
        <Button variant="ghost">
          <PressableFeedback.Ripple />
          Ghost
        </Button>
        <Button variant="danger">
          <PressableFeedback.Ripple />
          Danger
        </Button>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button variant="secondary">
          <PressableFeedback.Ripple />
          <Globe />
          Search
        </Button>
        <Button>
          <PressableFeedback.Ripple />
          <Plus />
          Add Member
        </Button>
        <Button variant="danger">
          <PressableFeedback.Ripple />
          <TrashBin />
          Delete
        </Button>
      </div>
    </div>
  );
}
