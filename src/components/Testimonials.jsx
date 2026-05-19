import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { testimonialsData } from '../data/testimonials';
import styles from '../styles/Testimonials.module.css';

function StarRating({ rating }) {
  return (
    <div className={styles.rating}>
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < Math.floor(rating) ? styles.star : styles.starEmpty}>
          ★
        </span>
      ))}
      <span className={styles.ratingNumber}>{rating.toFixed(1)}</span>
    </div>
  );
}

function TestimonialCard({ testimonial, index }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
    >
      <div className={styles.cardHeader}>
        <div className={styles.avatar}>
          {testimonial.name.charAt(0).toUpperCase()}
        </div>
        <div className={styles.userInfo}>
          <h4 className={styles.name}>{testimonial.name}</h4>
          <p className={styles.location}>{testimonial.location}, Indonesia</p>
          <StarRating rating={testimonial.rating} />
        </div>
      </div>

      <p className={styles.text}>{testimonial.text}</p>
    </motion.div>
  );
}

function Testimonials() {
  return (
    <section id="testimoni" className={styles.testimonials}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>Testimoni Pengguna</span>
          <h2 className={styles.heading}>Apa Kata Mereka Tentang ZyuuBotz?</h2>
          <p className={styles.subheading}>Pengalaman nyata dari pengguna setia kami.</p>
        </motion.div>

        <div className={styles.grid}>
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
