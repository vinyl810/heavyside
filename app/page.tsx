import Link from 'next/link';
import Logo from './icons/Logo';

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center align-center p-2">
      <Link href="/" className="m-auto mb-0">
        <Logo width={150} height={150} />
      </Link>
      <span className="m-auto mt-4 mb-0 font-bold text-2xl">HEAVYSIDE</span>
      <Link
        href="/browse"
        type="button"
        className="m-auto mt-6 p-1 pl-4 pr-4 bg-violet-600 rounded-md"
      >
        Get Started
      </Link>
    </div>
  );
}
