import Link from 'next/link';

export function Navbar() {
  return (
    <header className="navbar-shell">
      <div className="navbar">
        <Link href="/" className="brand-link">
          文言文课堂测验
        </Link>
        <nav className="nav-links">
          <Link href="/">首页</Link>
          <Link href="/experimental">实验模式</Link>
        </nav>
      </div>
    </header>
  );
}
