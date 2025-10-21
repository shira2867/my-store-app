import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';


export default function Header() {

  return (
    <header className={styles.header}>
        <img
        src="https://cdn.discordapp.com/attachments/1430082456710549605/1430088372910690324/Hadasim_logo.png?ex=68f88115&is=68f72f95&hm=30857dc8f773641c89e1f09ea6eedc26ec852f023930f1b31f7f499bdadb1928"
        alt="Logo"
        className={styles.logo}
      />
          <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
