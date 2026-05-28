"use client";

import HeartFill from "@gravity-ui/icons/HeartFill";

import {Rating} from "@heroui-pro/react";

export default function RatingCustomIconHeartDemo() {
  return (
    <Rating aria-label="Favorites" defaultValue={3} icon={<HeartFill />}>
      <Rating.Item value={1} />
      <Rating.Item value={2} />
      <Rating.Item value={3} />
      <Rating.Item value={4} />
      <Rating.Item value={5} />
    </Rating>
  );
}
