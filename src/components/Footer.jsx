import { MessageCircle, Music } from 'lucide-react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import styles from '../styles/Footer.module.css';

function Footer() {
  const { scrollToSection } = useSmoothScroll();

  return (
    <footer id="kontak" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.column}>
            <div className={styles.logo}>
              <span className={styles.logoDot}></span>
              ZyuuBotz
            </div>
            <p className={styles.tagline}>
              Bot WhatsApp all-in-one terbaik untuk kebutuhan pribadi dan grup. AI Waifu, Downloader, Moderasi, dan Proteksi dalam satu bot.
            </p>
            <div className={styles.social}>
              <a
                href="https://wa.me/6281249368080"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://tiktok.com/@zyuudevv"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="TikTok"
              >
                <Music size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Navigasi</h4>
            <ul className={styles.links}>
              {['fitur', 'harga', 'testimoni', 'faq'].map((id) => (
                <li key={id}>
                  <button onClick={() => scrollToSection(id)} className={styles.link}>
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Layanan</h4>
            <ul className={styles.links}>
              <li>
                <button onClick={() => scrollToSection('harga')} className={styles.link}>
                  Premium Pribadi
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('harga')} className={styles.link}>
                  Sewa Bot Grup
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('harga')} className={styles.link}>
                  Jadibot
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/6281249368080?text=Halo%20kak%20mau%20coba%20ZyuuBotz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Coba Gratis
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Kontak</h4>
            <ul className={styles.links}>
              <li>
                <a
                  href="https://wa.me/6281249368080"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  WhatsApp Admin
                </a>
              </li>
              <li>
                <a
                  href="https://whatsapp.com/channel/0029Va9P8Na0G0XrAsdx020M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Channel WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@zyuudevv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  TikTok @zyuudevv
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2026 ZyuuBotz — All rights reserved. Made with ❤️ by ZyuuDev
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
