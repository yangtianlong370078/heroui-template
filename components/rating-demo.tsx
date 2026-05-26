"use client";

import {useState} from "react";
import {Rating} from "@heroui-pro/react";

export default function RatingDemo() {
  const [value, setValue] = useState(3);

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <Rating aria-label="Rating" value={value} onValueChange={setValue}>
        <Rating.Item value={1} />
        <Rating.Item value={2} />
        <Rating.Item value={3} />
        <Rating.Item value={4} />
        <Rating.Item value={5} />
      </Rating>
      <span className="text-muted text-sm">
        {value} {value === 1 ? "star" : "stars"}
      </span>
    </div>
  );
}
