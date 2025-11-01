import Image from "next/image";

export function PicCard({ title, imgSrc }) {
    return (
        <p className="flex items-center p-3 text-base font-bold rounded-lg bg-gray-50 
        hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500
        text-center justify-center">
            <span>{title}</span>
            { imgSrc && (
                <Image src={imgSrc} alt={title} width={40} height={40} className="ml-6" />
            )}
        </p>
    );
}