import styles from '@/styles/Home.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

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
                      <a href=''>
                        <FontAwesomeIcon icon={faXTwitter} />
                      </a>
                    </li>
                    <li className={styles.icon_button2}>
                      <a href=''>
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>
                    <li className={styles.icon_button2}>
                      <a href=''>
                        <FontAwesomeIcon icon={faXTwitter} />
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
  )
}
