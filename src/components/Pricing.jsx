import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { pricingData } from '../data/pricing';
import styles from '../styles/Pricing.module.css';

const tabs = [
  { id: 'premium', label: 'Premium (Pribadi)' },
  { id: 'sewa', label: 'Sewa Bot Grup' },
  { id: 'jadibot', label: 'Jadibot' }
];

function PricingCard({ plan }) {
  const whatsappMessage = `Halo kak, saya mau pesan paket ${plan.name}`;
  const whatsappUrl = `https://wa.me/6281249368080?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.div
      className={`${styles.card} ${plan.highlighted ? styles.highlighted : ''}`}
      initial={{ opacity: 0, scale: 0.93 }}
      animate={{ opacity: 1, scale: plan.highlighted ? 1 : 1 }}
      exit={{ opacity: 0, scale: 0.93 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -6 }}
    >
      {/* Top badge */}
      {plan.badge && plan.highlighted && (
        <div className={styles.badge}>{plan.badge}</div>
      )}

      {/* Corner ribbon for "Paling Hemat" */}
      {plan.cornerRibbon && (
        <div className={styles.cornerBanner}>{plan.cornerRibbon}</div>
      )}

      {/* Non-highlighted badges shown as a small tag near plan name */}
      {plan.badge && !plan.highlighted && !plan.cornerRibbon && (
        <div className={styles.label}>{plan.badge}</div>
      )}

      {plan.label && (
        <div className={styles.label}>{plan.label}</div>
      )}

      <h3 className={styles.planName}>{plan.name}</h3>

      <div className={styles.price}>
        <span className={styles.amount}>{plan.price}</span>
        <span className={styles.period}>/ {plan.period}</span>
      </div>

      <ul className={styles.features}>
        {plan.features.map((feature, index) => (
          <li key={index} className={styles.feature}>
            <Check size={18} className={styles.checkIcon} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.ctaButton}
      >
        Pesan Sekarang
      </a>
    </motion.div>
  );
}

function Pricing() {
  const [activeTab, setActiveTab] = useState('premium');

  return (
    <section id="harga" className={styles.pricing}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>Harga</span>
          <h2 className={styles.heading}>Pilih Paketmu. Skalakan Sesuka Hati.</h2>
          <p className={styles.subheading}>
            Semua paket langsung aktif setelah verifikasi pembayaran.
          </p>
        </motion.div>

        {/* Tab Switcher — Stitch pill style */}
        <div className={styles.tabWrapper}>
          <div className={styles.tabSwitcher}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className={styles.cardsGrid}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            {pricingData[activeTab].map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Pricing;
