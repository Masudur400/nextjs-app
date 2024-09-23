"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    const pathname = usePathname();

    const routes = (
        <>
            <li> <Link href="/" className={pathname === "/" ? 'text-black underline' : ''} > Home </Link> </li>
            <li> <Link href="/about" className={pathname === "/about" ? 'text-black underline' : ''} > About </Link> </li>
        </>
    );

    return (
        <div className='flex justify-between items-center px-2'>
            <h3 className="text-2xl font-bold text-white">Next.js App</h3>
            <ul className="flex gap-5 text-white px-4 py-1">
                {routes}
            </ul>
            <div>

            </div>
        </div>
    );
};

export default NavBar;
