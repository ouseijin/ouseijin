import styles from '@/styles/Home.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image'

export const Contact = () => {
  return (
    <div className={styles.slide} id="4">
      <div className={`${styles.content} ${styles.fourth_content}`}>
        <div class="container-fluid"> {/* bootstrapのclass */}
          <div className={styles.contact}>
            <div class="row">
              <div class="col-md-12">
                <h2>ご連絡があればコチラまで!</h2>
                <div>
                  <ul className={styles.contact_icon}>
                    <li className={styles.icon_button2}>
                      <Link href="https://x.com/ouseijin">
                        <FontAwesomeIcon icon={faXTwitter} />
                      </Link>
                    </li>
                    <li className={styles.icon_button2}>
                      <Link href="https://github.com/ouseijin">
                        <FontAwesomeIcon icon={faGithub} />
                      </Link>
                    </li>
                    <li className={styles.icon_button2}>
                      <Link href="https://zenn.dev/ouseijin">
                      <Image
                      src="/icon/zenn-logo-white.svg"
                      width={40}
                      height={40}
                      alt="zennのロゴ"/>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
