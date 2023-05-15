import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-12">
      <div className="flex justify-between items-center w-full">
        <div>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/heavyside.svg"
            alt="heavyside.js Logo"
            width={50}
            height={37}
            priority
          />
        </div>
        <div className="grid text-center text-sm lg:mb-0 lg:grid-cols-1 lg:text-left">
          <Link 
            className="dark:bg-gray-300 p-2 rounded-lg dark:drop-shadow-[0_0_0.3rem_#ffffff] opacity-30"
            href={'/'}>
            <span className="dark:text-black dark:opacity-100">Go Back</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
