import styles from '@/styles/Home.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

export const Contact = () => {
  return (
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
                        <FontAwesomeIcon icon={faXTwitter} className={styles.fa} />
                      </a>
                    </li>
                    <li className={styles.icon_button}>
                      <a href=''>
                        <FontAwesomeIcon icon={faXTwitter} className={styles.fa} />
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
