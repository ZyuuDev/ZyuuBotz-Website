import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { useActiveSection } from '../hooks/useActiveSection';
import styles from '../styles/Navbar.module.css';

const menuItems = [
  { label: 'Fitur', href: 'fitur' },
  { label: 'Harga', href: 'harga' },
  { label: 'Testimoni', href: 'testimoni' },
  { label: 'FAQ', href: 'faq' },
  { label: 'Kontak', href: 'kontak' }
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { scrollToSection } = useSmoothScroll();
  const activeSection = useActiveSection(['hero', 'fitur', 'harga', 'testimoni', 'faq', 'kontak']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      // Wait for menu animation to finish before scrolling to prevent layout jumping/interruption
      setTimeout(() => {
        scrollToSection(href);
      }, 250);
    } else {
      scrollToSection(href);
    }
  };

  return (
    <motion.header
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className={styles.container}>
        {/* Logo */}
        <a className={styles.logo} href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
          <img
            src="https://files.catbox.moe/j1wnna.jpg"
            alt="ZyuuBotz Logo"
            className={styles.logoImg}
          />
          ZyuuBotz
        </a>

        {/* Desktop Menu */}
        <nav className={styles.navMenu}>
          {menuItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`${styles.navLink} ${activeSection === item.href ? styles.active : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className={styles.navActions}>
          <a
            href="https://zyuudev.my.id"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnCta}
          >
            Coba Gratis
          </a>

          <motion.button
            onClick={toggleTheme}
            className={styles.themeToggle}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15 }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            {theme === 'dark' ? 'Light' : 'Dark'}
          </motion.button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={styles.hamburger}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenuWrapper}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className={styles.mobileMenu}>
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`${styles.mobileNavLink} ${activeSection === item.href ? styles.active : ''}`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://wa.me/6281249368080?text=Halo%20kak%20mau%20coba%20ZyuuBotz"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileNavLink}
                style={{ color: 'var(--accent)', fontWeight: 600, marginTop: '0.5rem' }}
              >
                🚀 Coba Gratis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
