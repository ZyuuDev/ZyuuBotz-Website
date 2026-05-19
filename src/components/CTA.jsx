import { motion } from 'framer-motion';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import styles from '../styles/CTA.module.css';

function CTA() {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section className={styles.cta}>
      <div className={styles.inner}>
        <motion.div
          className={styles.textSide}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.heading}>Siap mulai?</h2>
          <p className={styles.subheading}>
            Silakan coba sekarang juga secara gratis!
          </p>

          <div className={styles.buttons}>
            <a
              href="https://wa.me/6281249368080?text=Halo%20kak%20mau%20coba%20ZyuuBotz"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              🚀 Coba Sekarang
            </a>
            <button
              onClick={() => scrollToSection('harga')}
              className={styles.btnOutline}
            >
              Lihat Paket
            </button>
          </div>
        </motion.div>

        {/* Info Box */}
        <motion.div
          className={styles.noteBox}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h4 className={styles.noteTitle}>Catatan singkat</h4>
          <p className={styles.noteText}>
            Proses aktivasi setelah verifikasi pembayaran. Semua kebijakan sesuai FAQ. Tidak perlu kartu kredit untuk mencoba.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
