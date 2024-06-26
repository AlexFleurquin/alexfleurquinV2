'use client';

import Link from 'next/link';
import Logo from './logo';
import MobileMenu from './mobile-menu';
import ThemeToggle from './theme-toggle';

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-1">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-center flex-wrap items-center">
              <li>
                <Link
                  className="font-bricolage text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="font-bricolage text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="/integrations"
                >
                  Projets
                </Link>
              </li>

              <li>
                <Link
                  className="font-bricolage text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="/customers"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  className="font-bricolage text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="/changelog"
                >
                  Changelog
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop sign in links */}
          <ul className="flex-1 flex justify-end items-center">
            <li className="ml-6">
              <Link
                className="btn font-bricolage text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-lg before:pointer-events-none"
                href="/signup"
              >
                <span className="relative inline-flex items-center">
                  Me contacter
                </span>
              </Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
