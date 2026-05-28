"use client";

import {Card} from "@heroui/react";

import {Carousel} from "@heroui-pro/react";

export default function CarouselMultipleSlidesDemo() {
  return (
    <div className="w-full max-w-sm">
      <Carousel opts={{align: "start"}}>
        <Carousel.Content>
          {Array.from({length: 8}, (_, i) => (
            <Carousel.Item key={i} className="basis-1/3">
              <div className="p-1">
                <Card className="select-none">
                  <Card.Content className="flex aspect-square items-center justify-center">
                    <span className="text-2xl font-semibold tabular-nums">{i + 1}</span>
                  </Card.Content>
                </Card>
              </div>
            </Carousel.Item>
          ))}
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
      </Carousel>
    </div>
  );
}
