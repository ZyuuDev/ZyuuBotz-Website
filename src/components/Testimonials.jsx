import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(testimonialsData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTestimonials = testimonialsData.slice(startIndex, startIndex + itemsPerPage);

  const scrollToSection = () => {
    const element = document.getElementById('testimoni');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
      scrollToSection();
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
      scrollToSection();
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
    scrollToSection();
  };

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
          <p className={styles.subheading}>Pengalaman nyata dari 1,200+ pengguna setia kami.</p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className={styles.grid}
          >
            {paginatedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination controls */}
        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={styles.pageBtn}
              aria-label="Halaman Sebelumnya"
            >
              <ChevronLeft size={20} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`${styles.pageNumber} ${currentPage === page ? styles.active : ''}`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={styles.pageBtn}
              aria-label="Halaman Berikutnya"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Testimonials;
