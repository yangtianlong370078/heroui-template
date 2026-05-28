"use client";

import {Gear, Plus, ShoppingCart, TrashBin} from "@gravity-ui/icons";
import {Button} from "@heroui/react";

import {PressableFeedback} from "@heroui-pro/react";

export default function PressableFeedbackWithProgressFeedbackDemo() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-muted text-xs">Click once — the overlay sweeps in automatically.</p>
      <div className="flex flex-wrap gap-3">
        <Button variant="secondary">
          <PressableFeedback.ProgressFeedback className="bg-accent text-accent-foreground">
            Buying!
          </PressableFeedback.ProgressFeedback>
          <ShoppingCart />
          Buy Now
        </Button>
        <Button variant="secondary">
          <PressableFeedback.ProgressFeedback className="bg-accent text-accent-foreground">
            <Gear />
            Applied!
          </PressableFeedback.ProgressFeedback>
          <Gear />
          Apply Settings
        </Button>
        <Button variant="tertiary">
          <PressableFeedback.ProgressFeedback className="bg-accent text-accent-foreground">
            <Plus />
            Added!
          </PressableFeedback.ProgressFeedback>
          <Plus />
          Add Item
        </Button>
      </div>

      <div className="flex gap-3">
        <Button isIconOnly variant="danger-soft">
          <PressableFeedback.ProgressFeedback
            className="bg-danger text-danger-foreground"
            sweep="up"
          >
            <TrashBin />
          </PressableFeedback.ProgressFeedback>
          <TrashBin />
        </Button>
        <Button isIconOnly variant="secondary">
          <PressableFeedback.ProgressFeedback className="bg-accent text-accent-foreground">
            <Gear />
          </PressableFeedback.ProgressFeedback>
          <Gear />
        </Button>
      </div>
    </div>
  );
}
