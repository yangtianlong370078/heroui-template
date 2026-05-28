"use client";

import {TrashBin} from "@gravity-ui/icons";
import {Button} from "@heroui/react";
import {useState} from "react";

import {PressableFeedback} from "@heroui-pro/react";

export default function PressableFeedbackHoldConfirmCallbackDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Button variant="danger-soft">
        <PressableFeedback.HoldConfirm
          className="bg-danger text-danger-foreground"
          onComplete={() => setCount((c) => c + 1)}
        >
          <TrashBin />
          Hold to Delete
        </PressableFeedback.HoldConfirm>
        <TrashBin />
        Hold to Delete
      </Button>
      <p className="text-muted text-xs">
        Count: <strong>{count}</strong>
      </p>
    </div>
  );
}
