'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faSearch } from '@fortawesome/free-solid-svg-icons';
import Logo from '../icons/Logo';

export default function Header() {
  const pathname = usePathname();
  return (
    <>
      <div
        className={`${
          pathname === '/' || pathname === '/login' ? 'hidden' : ''
        } flex justify-between w-screen p-4 pl-4 pr-4`}
      >
        <Link href="/">
          <Logo width={35} height={35} />
        </Link>
        <Link href="/login" className="flex items-center text-sm">
          <span>Login</span>
        </Link>
      </div>
      <div
        className={`${
          pathname === '/' || pathname === '/login' ? 'hidden' : ''
        } flex w-screen p-2 pl-4 pr-4 font-bold text-neutral-800 text-sm rounded-b-lg drop-shadow-lg shadow-neutral-800 border-2 border-neutral-900 bg-neutral-200`}
      >
        <span className="mr-4">
          <FontAwesomeIcon className="w-4 h-4 mr-1" icon={faFolderOpen} />
          browse
        </span>
        <span className="mr-4">
          <FontAwesomeIcon className="w-4 h-4 mr-1" icon={faSearch} />
          search
        </span>
      </div>
    </>
  );
}
