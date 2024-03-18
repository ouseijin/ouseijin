import Header from './Header.module.css';
import Image from 'next/image'

// テスト用の画像function、index.jsのPageも消して良い
// export function Page() {
//   return (
//     <Image
//       src="/icon-1.png"
//       width={40}
//       height={40}
//       alt="Picture of the author"
//     />
//   )
// }

export function HeaderTab() {
  return (
    <header>
      <div className={Header.logo}>
        <h1>ouseijin</h1>
        <h2>O</h2>
      </div>
      <nav className={Header.nav}>
        <ul>
          <li>
            <a href="#1">
              <Image
              src="/icon-1.png"
              width={40}
              height={40}
              alt="Picture of the author"/>
              <em>Homepage</em>
            </a>
          </li>
          <li>
            <a href="#2">
              <Image
              src="/icon-2.1.png"
              width={40}
              height={40}
              alt="Picture of the author"/>
              <em>About Me</em>
            </a>
          </li>
          <li>
            <a href="#3">
              <Image
              src="/icon-3.png"
              width={40}
              height={40}
              alt="Picture of the author"/>
              <em>My Gallery</em>
            </a>
          </li>
          <li>
            <a href="#4">
              <Image
              src="/icon-4.png"
              width={40}
              height={40}
              alt="Picture of the author"/>
              <em>Contact Me</em>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}