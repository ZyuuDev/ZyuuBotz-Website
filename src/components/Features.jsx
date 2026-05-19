import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { featuresData } from '../data/features';
import styles from '../styles/Features.module.css';

function FeatureCard({ feature, index }) {
  const [ref, isVisible] = useScrollReveal();
  const IconComponent = feature.icon;

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
    >
      <span className={styles.icon} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        <IconComponent size={34} strokeWidth={1.5} color="var(--accent)" />
      </span>
      <h3 className={styles.title}>{feature.title}</h3>
      <p className={styles.description}>{feature.description}</p>
    </motion.div>
  );
}

function Features() {
  return (
    <section id="fitur" className={styles.features}>
      <div className={styles.container}>
        <div className={styles.sectionInner}>
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionLabel}>Fitur Unggulan</span>
            <h2 className={styles.heading}>Semua yang kamu butuhkan,</h2>
            <p className={styles.subheading}>dalam satu bot yang powerful.</p>
          </motion.div>

          <div className={styles.grid}>
            {featuresData.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
