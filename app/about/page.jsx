import Link from "next/link";
import Image from "next/image";

export default async function Page() {
    return (
        <>
            <h1 className="mb-8">About Me</h1>
            <section>
                <p className="mb-4 text-lg">
                    Hello! I'm Jesus, a recently graduated software developer looking to grow my skills. 
                    I love coding and I try to learn new things often.
                </p>
                <p className="mb-4 text-lg">
                    In my free time, I enjoy working on personal projects, watching movies, 
                    playing video games, playing the violin, and spending time with friends and family.
                </p>
                <section className="mb-8">
                    <figure>
                        <div className="relative overflow-hidden rounded-lg aspect-8/2">
                            <Image
                                src="/images/GirlsYJero.jpg"
                                priority
                                fill={true}
                                style={{ objectFit: 'contain' }}
                                sizes="(max-width: 1024px) 100vw, 1024px"
                                alt="Me at graduation"
                            />
                        </div>
                    </figure>
                </section>
                <p className="mb-4 text-lg">
                    If you'd like to know what kind of movies I like, you can check out my letterboxd profile!
                </p>
                <Link href="https://letterboxd.com/GhostMopey115/" rel='noopener' target="_blank" className="btn btn-lg sm:min-w-64 mb-6 bg-[#ff8000]">
                        Letterboxd
                </Link>
                <p className="mb-4 text-lg">
                    I also have a lovely girlfriend who supports me a lot!
                </p>
                <section className="mb-8">
                    <figure>
                        <div className="relative overflow-hidden rounded-lg aspect-8/2">
                            <Image
                                src="/images/Alexia_Yo.jpg"
                                priority
                                fill={true}
                                style={{ objectFit: 'contain' }}
                                sizes="(max-width: 1024px) 100vw, 1024px"
                                alt="Me at graduation"
                            />
                        </div>
                    </figure>
                </section>
                <p className="mb-4 text-lg">
                    Thank you for visiting my website. If you'd like to get in touch, please don't hesitate to reach out!
                </p>
            </section>
        </>
    );
}