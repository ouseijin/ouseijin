import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
// TODO:Pageが必要なければ消す
import { HeaderTab, Page } from '/components/Header'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>ouseijin_world</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderTab/>
      {/* ↓のPage/はテスト用の画像表示 */}
      {/* <Page/> */}
      <div className={styles.slides}>
        <div className={styles.slide} id="1">
          <div id="slider-wrapper">
            <div id="image-slider">
              <ul>
                <li class="active-img">
                  <div className={styles.slide_caption}>
                    <h6>New Arrival</h6>
                    <h2>Beautiful<br></br>Earth</h2>
                  </div>
                </li>
                {/* <li>
                  <div class="slide-caption">
                    <h6>Latest One</h6>
                    <h2>TechMeeting</h2>
                  </div>
                </li>
                <li>
                  <div class="slide-caption">
                    <h6>Your Update</h6>
                    <h2>SmartDevices</h2>
                  </div>
                </li>                       */}
              </ul>
            </div>
            {/* <div id="thumbnail">
              <ul>
                <li class="active"><img src="thumb-01.jpg" alt="Earth" /></li>
                <li><img src="assets/images/thumb-02.jpg" alt="Meeting" /></li>
                <li><img src="assets/images/thumb-03.jpg" alt="Smart" /></li>         
              </ul>
            </div> */}
          </div>
        </div>    
      </div>
      <div className={styles.slide} id="2">
        <div className={`${styles.content} ${styles.second_content}`}>
          {/* 元々、<div id='tabs'> */}
          <div className={styles.tabs}>
            <ul>
              <li className={styles.icon_button}>
                <a href='#tabs-1'>
                  <FontAwesomeIcon icon={faDesktop} className={styles.fa} />
                </a>
              </li>
              <li className={styles.icon_button}>
                <a href='#tabs-2'>
                  <FontAwesomeIcon icon={faDesktop} className={styles.fa} />
                </a>
              </li>
              <li className={styles.icon_button}>
                <a href='#tabs-3'>
                  <FontAwesomeIcon icon={faDesktop} className={styles.fa} />
                </a>
              </li>
              {/* <li><a href='#tabs-1'><span class="fa-solid fa-desktop">
              </span></a></li>
              <li><a href='#tabs-2'><span class='fa fa-users'></span></a></li>
              <li><a href='#tabs-3'><span class='fa fa-mobile'></span></a></li> */}
            </ul>
            <section className={styles.tabs_content}>
              <article id='tabs-1'>
                <h2>What We Offer?</h2>
                <span>Free Bootstrap v4 Theme</span>
                <p>Earth is free Bootstrap v4.1.3 HTML Template for you. Feel free to edit and use this website template for any purpose. Please tell your friends about Tooplate website. Follow us on <a href="https://www.facebook.com/tooplate/">Facebook page</a> for latest updates. Thank you.</p>
                <p>Aenean non suscipit risus. Nam mattis, ipsum ac aliquet dignissim, eros justo tempor dolor, rutrum feugiat nunc mauris et elit. Mauris sem odio, accumsan vel sem sed, aliquam convallis dui. Aenean et commodo est.</p>
              </article>
              <article id='tabs-2'>
                <h2>What We Do?</h2>
                <span>Ut nec metus eros</span>
                <p>Nunc ultricies lectus et sem interdum molestie. Donec non sagittis velit. Vivamus vitae dictum metus, id imperdiet diam. Vestibulum elementum urna erat, eu tincidunt nisl pulvinar nec. Nulla a pharetra felis, sit amet placerat felis. Fusce a tincidunt dui.</p>
                <p>Quisque blandit purus orci, et cursus ante porttitor in. Curabitur eleifend turpis id diam ultricies hendrerit. Donec et lectus vitae justo porta molestie.</p>
              </article>
              <article id='tabs-3'>
                <h2>Who We Are?</h2>
                <span>Etiam tempus ex ut mi</span>
                <p>Vivamus dictum odio at enim posuere, et dapibus nunc sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p> 
                <p>Integer a egestas tellus, id malesuada velit. Pellentesque tincidunt, libero eu rutrum volutpat, nisi urna mollis felis, sed mollis sem libero at magna.</p>
              </article>
            </section>
          </div>
        </div>
      </div>
      {/* <main className={styles.main}>
        
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main> */}
    </>
  )
}
