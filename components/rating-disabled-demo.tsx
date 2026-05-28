"use client";

import {Rating} from "@heroui-pro/react";

export default function RatingDisabledDemo() {
  return (
    <Rating isDisabled aria-label="Rating" defaultValue={3}>
      <Rating.Item value={1} />
      <Rating.Item value={2} />
      <Rating.Item value={3} />
      <Rating.Item value={4} />
      <Rating.Item value={5} />
    </Rating>
  );
}
