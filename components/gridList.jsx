import { PicCard } from "./picCard";

export function GridList({ items, imgSrc }) {
    return (
        items && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {items.map((item, index) => (
                    <PicCard key={item} title={item} imgSrc={imgSrc[index]} />
                ))}
            </div>
        )
    );
}