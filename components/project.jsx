import Image from "next/image";
import { GridList } from "./gridList";

export function Project({title, description, link, date, technologies, technologies_img, projectLink, img, alt}) {
    return (
        <div>
            <div className="flex flex-row gap-10 mb-6 text-center justify-center">
                <h2 className="text-[#D90429]">{title}</h2>
                <h2 className="">{date}</h2>
            </div>
            {img && (
                <section className="mb-6">
                    <figure>
                        <div className="relative overflow-hidden rounded-lg aspect-7/2">
                            <Image
                                src={img}
                                priority
                                fill={true}
                                style={{ objectFit: 'contain' }}
                                sizes="(max-width: 1024px) 100vw, 1024px"
                                alt={alt}
                            />
                        </div>
                    </figure>
                </section>
            )}
            <p>{description}</p>
            <h3 className="mt-4 mb-4">
                Technologies Used:
            </h3>
            {technologies && (
                <GridList items={technologies} imgSrc={technologies_img} />
            )}
            <div className="flex flex-row justify-center gap-8">
                {link && (
                    <a href={link} target="_blank" rel="noopener" className="btn mb-8 mt-8">View on Github</a>
                )}
                {projectLink && (
                    <a href={projectLink} target="_blank" rel="noopener" className="btn mb-8 mt-8">View Paper</a>
                )}
            </div>
            {/* Line to mark the end */}
            <div className="border-t border-[var(--color-primary-content)] border-3  my-4"></div>
        </div>
    );

}