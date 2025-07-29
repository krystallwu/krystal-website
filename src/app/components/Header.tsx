// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="mb-8 text-center text-xl" style={{ padding: '2rem' }}>
      <Link href="/" className="text-pink-500 hover:text-pink-700 ">Home</Link> |{" "}
      <Link href="/work" className="text-pink-500 hover:text-pink-700">Work</Link> |{" "}
      <Link href="/portfolio" className="text-pink-500 hover:text-pink-700">Portfolio</Link>
    </nav>
  );
};


export default Header;

