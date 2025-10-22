import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';


export default function Header() {

  return (
    <header className={styles.header}>
      <img
        src="https://media.discordapp.net/attachments/1430082456710549605/1430501612392288326/Hadasim_LOGO_org.png?ex=68fa01f1&is=68f8b071&hm=030c472e8ad9933d8df0f92b49cf5d76969c713717b6f15427f9fd5b364f6f30&=&format=webp&quality=lossless&width=823&height=823"
        alt="Logo"
        className={styles.logo}
      />
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/register">Sign Up</Link>

      </nav>
    </header>
  );
}
