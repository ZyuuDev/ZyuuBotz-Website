import { motion } from 'framer-motion';
import { Download, Bot, Shield, Lock, Sparkles, Rocket } from 'lucide-react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import styles from '../styles/Hero.module.css';

const featurePills = [
  { icon: <Download size={16} strokeWidth={2} />, label: 'All-in-one Downloader' },
  { icon: <Bot size={16} strokeWidth={2} />, label: 'AI Assistant' },
  { icon: <Shield size={16} strokeWidth={2} />, label: 'Grup Moderation & Protection' },
  { icon: <Lock size={16} strokeWidth={2} />, label: '60+ Games' }
];

const statsItems = [
  '1200+ Pengguna Aktif',
  '14+ Kepribadian AI',
  '99.9% Uptime'
];

function Hero() {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section id="hero" className={styles.hero}>
      {/* Background elements */}
      <div className={styles.bgGradient} />
      <div className={styles.bgGrid} />
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.container}>
        <div className={styles.heroGrid}>
          {/* LEFT COLUMN - Text Content */}
          <div className={styles.heroLeft}>
            <motion.div
              className={styles.badge}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles size={16} /> Bot WhatsApp #1 di Indonesia
            </motion.div>

            <motion.h1
              className={styles.heading}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hilangkan Bosanmu dengan{' '}
              <span className={styles.highlight}>ZyuuBotz.</span>
            </motion.h1>

            <motion.p
              className={styles.subheading}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Zyuubotz memiliki lebih dari 450+ Fitur yang bisa menemanimu. Mulai dari Downloader, AI Waifu, Moderasi Grup, Proteksi Grup, Game dan masih banyak lagi dalam satu bot.
            </motion.p>

            <motion.div
              className={styles.ctaButtons}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="https://zyuudev.my.id"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                <Rocket size={18} /> Coba Gratis Sekarang
              </a>
              <button
                onClick={() => scrollToSection('harga')}
                className={styles.btnOutline}
              >
                Lihat Harga ↓
              </button>
            </motion.div>

            <motion.div
              className={styles.stats}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {statsItems.map((stat, i) => (
                <span key={stat}>
                  {stat}
                  {i < statsItems.length - 1 && (
                    <span className={styles.statsDivider}> | </span>
                  )}
                </span>
              ))}
            </motion.div>

            <motion.div
              className={styles.featurePills}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {featurePills.map((feature) => (
                <motion.div
                  key={feature.label}
                  className={styles.pill}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className={styles.pillIcon} style={{ display: 'flex', alignItems: 'center' }}>{feature.icon}</span>
                  <span>{feature.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Mockup Illustration */}
          <div className={styles.heroRight}>
            <motion.div
              className={styles.mockupContainer}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              {/* Main graphic card */}
              <div className={styles.mockupMain}>
                <div className={styles.mockupInner}>
                  <div className={styles.mockupTopLine}></div>
                  <div className={styles.mockupMidLine}></div>
                </div>
              </div>

              {/* Floating side card */}
              <div className={styles.mockupCard1}>
                <div className={styles.mockupCardLine}></div>
                <div className={styles.mockupCardLine}></div>
                <div className={styles.mockupCardImg}></div>
              </div>

              {/* Decorative dots */}
              <div className={styles.floatingDot1}></div>
              <div className={styles.floatingDot2}></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
