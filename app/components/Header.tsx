'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../icons/Logo';

export default function Header() {
  const pathname = usePathname();
  return (
    <div className={`${pathname === '/' ? 'hidden' : ''} flex w-screen p-4`}>
      <Link href="/">
        <Logo width={35} height={35} />
      </Link>
    </div>
  );
}
