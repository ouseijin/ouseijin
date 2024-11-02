import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faStairs, faHandFist } from "@fortawesome/free-solid-svg-icons";
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
                <FontAwesomeIcon icon={faCommentDots} className={styles.fa} />
                </a>
              </li>
              <li className={styles.icon_button}>
                <a href='#tabs-2'>
                  <FontAwesomeIcon icon={faStairs} className={styles.fa} />
                </a>
              </li>
              <li className={styles.icon_button}>
                <a href='#tabs-3'>
                  <FontAwesomeIcon icon={faHandFist} className={styles.fa} />
                </a>
              </li>
            </ul>
            <section className={styles.tabs_content}>
              <article id='tabs-1'>
                <h2>初めまして、<br/>好奇心旺星人(ouseijin)です！</h2>
                <span>ワクワクするのが私の人生！退屈は人を殺す</span>
                <p>
                  高校では、未経験なのに経験者しかいないガチバスケ部に入部<br/>
                  初めての店に一人で入れない程臆病なのに、一人で海外旅行<br/>
                  高所恐怖症を直すためにマカオタワーまで行って、バンジージャンプ！<br/>
                  スマホの設定すら出来ない機械音痴なのに、プログラミング学んでエンジニア転職<br/>
                  そんなチャレンジ大好き人間です😉
                </p>
                <p>
                  エンジニアとしては知識も能力も足りない所がたくさんありますが、｢昨日の自分に負けない｣を信条に日々学んでいくようにしています📚
                </p>
              </article>
              <article id='tabs-2'>
                <h2>私の経歴</h2>
                <span>Ut nec metus eros</span>
                <p>Nunc ultricies lectus et sem interdum molestie. Donec non sagittis velit. Vivamus vitae dictum metus, id imperdiet diam. Vestibulum elementum urna erat, eu tincidunt nisl pulvinar nec. Nulla a pharetra felis, sit amet placerat felis. Fusce a tincidunt dui.</p>
                <p>Quisque blandit purus orci, et cursus ante porttitor in. Curabitur eleifend turpis id diam ultricies hendrerit. Donec et lectus vitae justo porta molestie.</p>
              </article>
              <article id='tabs-3'>
                <h2>趣味</h2>
                <span>共通の趣味や下記の内容に興味あれば、是非お気軽に連絡下さい！</span>
                <p>
                  【カッコイイ身体になるために】<br/>
                  筋トレ💪　キックボクシング🥊
                </p> 
                <p>
                  【人生を充実させるために】<br/>
                  海外旅行🌎　読書📖
                </p>
                <p>
                  【止められない中毒なやつ】<br/>
                  格闘技観戦😇<br/>
                  MMA（UFC、Bellator、RIZIN）が特に好き
                </p>
              </article>
            </section>
          </div>
        </div>
      </div>
      <div className={styles.slide} id="3">
        <div className={`${styles.content} ${styles.third_content}`}>
          <div class="container-fluid"> {/* bootstrapのclass */}
            <div class="row"> {/* bootstrapのclass */}
              <div class="owl-carousel owl-theme">
                <div class="col-md-12">
                  <div class="featured-item"> 
                    <a href="">
                      {/* <img src="assets/images/item-01.jpg" alt=""> */}
                    </a>
                    <div class="down-content">
                      <h4>Donec non sagittis</h4>
                      <h6>$25.00</h6>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.slide} id="4">
        <div className={`${styles.content} ${styles.fourth_content}`}>
          <div class="container-fluid"> {/* bootstrapのclass */}
            <div className={styles.contact}>
              <div class="row">
                <div class="col-md-12">
                  <h2>ご連絡があればコチラまで!</h2>
                  <div className={styles.contact_icon}>
                    <ul>
                      <li className={styles.icon_button}>
                        <a href=''>
                          <FontAwesomeIcon icon={faCommentDots} className={styles.fa} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
