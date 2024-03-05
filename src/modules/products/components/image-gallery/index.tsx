"use client"

import { Image as MedusaImage } from "@medusajs/medusa"
import { Container, clx } from "@medusajs/ui"
import Image from "next/image"
import { useState } from "react"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div className="flex gap-x-8 justify-center xl:justify-start flex-col xsmall:flex-row">
      <div className="flex items-start relative order-2 xl:order-1 mt-4 xsmall:mt-0">
        <div className="flex xsmall:flex-col flex-1 gap-y-4 gap-x-4">
          {images.map((image, index) => {
            return (
              <button onClick={() => setCurrentIndex(index)} key={image.id}>
                <Container
                  className={clx(
                    "relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle rounded-none",
                    {
                      "border border-gray-500": currentIndex === index,
                    }
                  )}
                  id={image.id}
                >
                  <Image
                    src={image.url}
                    priority={index <= 2 ? true : false}
                    className="absolute inset-0"
                    alt={`Product image ${index + 1}`}
                    fill
                    sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </Container>
              </button>
            )
          })}
        </div>
      </div>
      <div className="order-1 xl:order-2">
        <Image
          src={images[currentIndex].url || ""}
          alt={`Product image`}
          layout="response"
          width={400}
          height={600}

        />
      </div>
    </div>
  )
}

export default ImageGallery
