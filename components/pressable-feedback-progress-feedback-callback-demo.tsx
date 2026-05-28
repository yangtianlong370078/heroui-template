"use client";

import {LocationArrowFill} from "@gravity-ui/icons";
import {Button} from "@heroui/react";
import {useState} from "react";

import {PressableFeedback} from "@heroui-pro/react";

export default function PressableFeedbackProgressFeedbackCallbackDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Button variant="secondary">
        <PressableFeedback.ProgressFeedback
          className="bg-accent text-accent-foreground"
          onComplete={() => setCount((c) => c + 1)}
        >
          <LocationArrowFill />
          Send
        </PressableFeedback.ProgressFeedback>
        <LocationArrowFill />
        Send
      </Button>
      <p className="text-muted text-xs">
        Count: <strong>{count}</strong>
      </p>
    </div>
  );
}
