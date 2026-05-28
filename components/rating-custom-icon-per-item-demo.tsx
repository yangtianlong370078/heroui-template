"use client";

import HeartFill from "@gravity-ui/icons/HeartFill";

import {Rating} from "@heroui-pro/react";

export default function RatingCustomIconPerItemDemo() {
  return (
    <Rating
      aria-label="Favorites"
      defaultValue={3}
      style={{"--rating-active-color": "var(--color-danger)"} as React.CSSProperties}
    >
      <Rating.Item value={1}>
        <HeartFill />
      </Rating.Item>
      <Rating.Item value={2}>
        <HeartFill />
      </Rating.Item>
      <Rating.Item value={3}>
        <HeartFill />
      </Rating.Item>
      <Rating.Item value={4}>
        <HeartFill />
      </Rating.Item>
      <Rating.Item value={5}>
        <HeartFill />
      </Rating.Item>
    </Rating>
  );
}
