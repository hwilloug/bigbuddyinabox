"use client"

import { ImageGallery } from "react-image-grid-gallery";
import Image from "next/image";
import { useMemo, useState } from "react";

const images = [
  { src: "/IMG_8315.JPG", alt: "Big buddy" },
  { src: "/IMG_8320.JPG", alt: "Tiger" },
  { src: "/IMG_8330.JPG", alt: "Big buddy" },
  { src: "/IMG_8351.JPG", alt: "Tiger" },
  { src: "/IMG_8363.JPG", alt: "Tiger" },
  { src: "/IMG_8373.JPG", alt: "Tiger" },
  { src: "/IMG_8381.JPG", alt: "Poppy" },
  { src: "/IMG_8384.JPG", alt: "Poppy and Big buddy" },
  { src: "/IMG_8401.JPG", alt: "Big buddy" },
  { src: "/IMG_8419.JPG", alt: "Tiger and Big buddy" },
  { src: "/IMG_8429.JPG", alt: "Poppy" },
  { src: "/IMG_8431.JPG", alt: "Big buddy" },
  { src: "/IMG_8437.JPG", alt: "Tiger" },
  { src: "/IMG_8443.JPG", alt: "Big buddy" },
  { src: "/IMG_8462.JPG", alt: "Tiger, Poppy, and Big buddy" },
  { src: "/IMG_8464.JPG", alt: "Poppy" },
  { src: "/IMG_8473.JPG", alt: "Poppy" },
  { src: "/IMG_8476.JPG", alt: "Big buddy" },
  { src: "/IMG_8478.JPG", alt: "Poppy" },
  { src: "/IMG_8479.JPG", alt: "Tiger" },
  { src: "/IMG_8487.JPG", alt: "Poppy" },
  { src: "/IMG_8496.JPG", alt: "Poppy" },
  { src: "/IMG_8497.JPG", alt: "Big buddy" },
  { src: "/IMG_8507.JPG", alt: "Tiger" },
  { src: "/IMG_8551.JPG", alt: "Tiger" },
  { src: "/IMG_8581.JPG", alt: "Poppy" },
  { src: "/IMG_8594.JPG", alt: "Big buddy" },
  { src: "/IMG_3401.jpeg", alt: "Tiger" },
  { src: "/IMG_8737.JPG", alt: "Tiger" },
  { src: "/IMG_8772.JPG", alt: "Tiger" },
  { src: "/IMG_8787.JPG", alt: "Poppy" },
  { src: "/IMG_8789.JPG", alt: "Tiger" },
  { src: "/IMG_8798.JPG", alt: "Tiger" },
  { src: "/IMG_8803.JPG", alt: "Poppy" },
  { src: "/IMG_8814.JPG", alt: "Poppy" },
  { src: "/IMG_8816.JPG", alt: "Poppy" },
  { src: "/IMG_8981.JPG", alt: "Poppy" },
  { src: "/IMG_8996.JPG", alt: "Poppy" },
  { src: "/IMG_9117.jpeg", alt: "Big buddy" },
  { src: "/IMG_9120.jpeg", alt: "Poppy" },
  { src: "/IMG_9167.jpeg", alt: "Big buddy" },
  { src: "/IMG_9209.PNG", alt: "Ray" },
  { src: "/IMG_9210.JPG", alt: "Poppy" },
  { src: "/IMG_9219.JPG", alt: "Tiger" },
  { src: "/IMG_9225.jpeg", alt: "Tiger" },
  { src: "/IMG_9228.jpeg", alt: "Tiger" },
  { src: "/IMG_9273.JPG", alt: "Tiger" },
  { src: "/IMG_9341.jpeg", alt: "Poppy" },
  { src: "/IMG_9346.jpeg", alt: "Poppy" },
  { src: "/IMG_9443.jpeg", alt: "Tiger and Ray" },
  { src: "/IMG_9481.JPG", alt: "Poppy" },
  { src: "/IMG_9499.JPG", alt: "Tiger" },
  { src: "/IMG_9512.jpeg", alt: "Tiger" },
  { src: "/IMG_9559.jpeg", alt: "Tiger" },
  { src: "/IMG_9590.JPG", alt: "Tiger" },
  { src: "/IMG_9600.JPG", alt: "Tiger" },
  { src: "/IMG_9607.JPG", alt: "Poppy" },
];

export default function Home() {
  const [ cat, setCat ] = useState("");

  const selectedImages = useMemo(() => {
    if (!cat) return images;
    return images.filter((image) => image.alt.includes(cat));
  }, [cat])

  return (
    <>
    <header className="bg-primaryDark p-6 mb-4">
      <h1 className="text-2xl text-white text-center font-bold mb-4 cursor-pointer" onClick={() => setCat("")}>BigBuddyInABox.com</h1>
      <nav className="flex justify-center gap-6">
        <Image src="/poppy.png" alt="Poppy the cat logo" width={50} height={50} className="cursor-pointer" onClick={() => setCat("Poppy")} />
        <Image src="/buddy.png" alt="Big Buddy the cat logo" width={50} height={50} className="cursor-pointer" onClick={() => setCat("Big buddy")} />
        <Image src="/tiger.png" alt="Tiger the cat logo" width={50} height={50} className="cursor-pointer" onClick={() => setCat("Tiger")} />
        <Image src="/ray.png" alt="Ray the cat logo" width={50} height={50} className="cursor-pointer" onClick={() => setCat("Ray")} />
      </nav>
    </header>
    <div className="h-full">
      <ImageGallery imagesInfoArray={selectedImages} columnCount={"auto"} gapSize={8} />
    </div>
    </>
  );
}
