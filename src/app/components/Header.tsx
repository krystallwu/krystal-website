// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="mb-8 text-center text-xl" style={{ padding: '2rem' }}>
      <Link href="/">Home</Link> |{" "}
      <Link href="/about">About</Link> |{" "}
      <Link href="/portfolio">Portfolio</Link>
    </nav>
  );
};

export default Header;
