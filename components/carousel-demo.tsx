"use client";

import {Carousel} from "@heroui-pro/react";

const images = [
  {
    alt: "Sneakers front view",
    src: "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/1.jpeg",
  },
  {
    alt: "Sneakers side view",
    src: "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/2.jpeg",
  },
  {
    alt: "Sneakers back view",
    src: "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/3.jpeg",
  },
  {
    alt: "Sneakers top view",
    src: "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/4.jpeg",
  },
  {
    alt: "Sneakers detail view",
    src: "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/5.jpeg",
  },
  {
    alt: "Sneakers sole view",
    src: "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/6.jpeg",
  },
];

export default function CarouselDemo() {
  return (
    <div className="w-full max-w-sm">
      <Carousel opts={{loop: true}}>
        <Carousel.Content>
          {images.map((image, i) => (
            <Carousel.Item key={i} aria-label={image.alt}>
              <div className="overflow-hidden rounded-3xl">
                <img
                  alt={image.alt}
                  className="aspect-[1/1] w-full select-none object-cover"
                  draggable={false}
                  src={image.src}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel.Content>
        <Carousel.Thumbnails>
          {images.map((image, i) => (
            <Carousel.Thumbnail key={i} index={i}>
              <img
                alt={image.alt}
                className="aspect-[1/1] w-full select-none object-cover"
                draggable={false}
                src={image.src}
              />
            </Carousel.Thumbnail>
          ))}
        </Carousel.Thumbnails>
      </Carousel>
    </div>
  );
}
