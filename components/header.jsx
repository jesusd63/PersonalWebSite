import Image from 'next/image';
import Link from 'next/link';
import githubLogo from 'public/images/github-mark-white.svg';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Projects', href: '/projects' },
    { linkText: 'Games', href: '/games' },
    { linkText: 'Education', href: '/education' },
    { linkText: 'About Me', href: '/about' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-6 md:pb-6">
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1 text-[#EF233C]">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href}>
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            <Link
                href="https://github.com/jesusd63/PersonalWebSite"
                target="_blank"
                rel="noopener"
                className="hidden lg:inline-flex lg:ml-auto"
            >
                <Image src={githubLogo} alt="GitHub logo" className="w-7" />
            </Link>
        </nav>
    );
}
