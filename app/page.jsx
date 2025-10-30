import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import Image from 'next/image';
import { getNetlifyContext } from 'utils';
import { EmailButton } from 'components/emailButton';

const contextExplainer = `
The card below is rendered on the server based on the value of \`process.env.CONTEXT\` 
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const preDynamicContentExplainer = `
The card content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16 text-center">
            <section>
                <ContextAlert className="mb-6" />
                <h1 className="mb-4">Jesus Bours</h1>
                <p className="mb-4 text-lg">
                    I'm a software developer and this is my website! I am using Next.js and Netlify to build and host it.
                </p>
                <section className="mb-8">
                    <figure>
                        <div className="relative overflow-hidden rounded-lg aspect-5/2">
                            <Image
                                src="/images/Graduacion.jpg"
                                priority
                                fill={true}
                                style={{ objectFit: 'contain' }}
                                sizes="(max-width: 1024px) 100vw, 1024px"
                                alt="Me at graduation"
                            />
                        </div>
                    </figure>
                </section>
                <div className="mb-6 flex flex-col sm:flex-col">
                    <Link href="https://www.linkedin.com/in/jbours01/" rel="noopener" target="_blank" className="btn btn-lg sm:min-w-64 mb-6">
                        Linkedin
                    </Link>
                    <Link href="https://github.com/jesusd63" rel='noopener' target="_blank" className="btn btn-lg sm:min-w-64 mb-6">
                        GitHub
                    </Link>
                    <EmailButton className="btn btn-lg sm:min-w-64 mb-6"> Email </EmailButton>
                </div>
            </section>
        </div>
    );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return (
            <Card title={title}>
                <p>Next.js will rebuild any page you navigate to, including static pages.</p>
            </Card>
        );
    } else {
        const now = new Date().toISOString();
        return (
            <Card title={title}>
                <p>This page was statically-generated at build time ({now}).</p>
            </Card>
        );
    }
}
