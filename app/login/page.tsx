import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Logo from '../icons/Logo';

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center align-center p-2">
      <Link href="/" className="mb-0 flex justify-center">
        <Logo width={100} height={100} />
      </Link>
      <span className="m-auto mt-4 mb-0 font-bold text-xl">Login With</span>
      <div className="m-6 flex justify-evenly">
        <FontAwesomeIcon className="w-10 h-10" icon={faGithub} />
        <FontAwesomeIcon className="w-10 h-10" icon={faGoogle} />
      </div>
    </div>
  );
}
