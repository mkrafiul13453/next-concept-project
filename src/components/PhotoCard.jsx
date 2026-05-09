"use client";

import Image from "next/image";
import { Heart, ArrowShapeTurnUpRight } from "@gravity-ui/icons";
import { Button, Card } from "@heroui/react";
import Link from "next/link";
const PhotoCard = ({ photo }) => {
    const { title, imageUrl, category, likes, downloads } = photo;
    return (
        <Card
            className="w-full h-100 p-5 rounded-3xl border shadow-sm"
            shadow="sm"
        >
            {/* <Card className="p-0 "> */}
            {/* Image Section */}
            <div className="relative overflow-hidden rounded-3xl">
                <Image
                    src={imageUrl}
                    alt="Portrait"
                    width={500}
                    height={500}
                    className="w-full h-89 object-cover"
                />

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-white px-4 py-1 rounded-full text-sm font-semibold shadow">
                    {category}
                </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-semibold mt-5 text-black">
                {title}
            </h2>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-4 text-black">
                <div className="flex items-center gap-2">
                    <Heart width={20} height={20} />
                    <span className="text-xl font-medium">{likes}</span>
                </div>

                {/* <div className="w-px h-7 bg-gray-300" /> */}

                <div className="flex items-center gap-2">
                    <ArrowShapeTurnUpRight width={20} height={20} />
                    <span className="text-xl font-medium">{downloads}</span>
                </div>
            </div>

            {/* Button */}
            <Link href={`/all-photos/${photo.id}`}>
            <Button radius="full" variant="outline" className="w-full mt-6 h-14 text-xl font-semibold border-gray-300 bg-white">
                View
            </Button></Link>
            {/* </Card> */}
        </Card>
    );
};

export default PhotoCard;