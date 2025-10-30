import Image from 'next/image';
import Link from 'next/link';
import githubLogo from 'public/images/github-mark-white.svg';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Projects', href: '/projects' },
    // { linkText: 'Games', href: '/games' },
    { linkText: 'Education', href: '/education' },
    { linkText: 'About Me', href: '/about' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-3 md:pb-12 align-center justify-center">
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-15 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className=''>
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            <div className="absolute top-3 right-6">
                <Link
                    href="https://github.com/jesusd63/PersonalWebSite"
                    target="_blank"
                    rel="noopener"
                >
                    <Image src={githubLogo} alt="GitHub logo" className="w-7" />
                </Link>
            </div>
        </nav>
    );
}
