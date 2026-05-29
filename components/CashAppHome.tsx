"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CashAppHome.module.css';

export default function CashAppHome() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // BACKGROUND COLOR (Black -> White -> Green -> Black)
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 1],
    ['#000000', '#000000', '#f4f4f4', '#f4f4f4', '#00c853', '#00c853', '#000000', '#000000']
  );

  // TEXT COLOR (White -> Black -> Black -> White)
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 1],
    ['#ffffff', '#ffffff', '#000000', '#000000', '#000000', '#000000', '#ffffff', '#ffffff']
  );

  // === SECTION 1: HERO (0 to 0.25) ===
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -300]);
  const heroHouseY = useTransform(scrollYProgress, [0, 0.25], [0, 200]);
  const heroHouseScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.5]);

  // === SECTION 2: LOANS (0.15 to 0.45) ===
  const loansOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
  const loansY = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [200, 0, 0, -200]);
  
  // Floating loan pills
  const fhaX = useTransform(scrollYProgress, [0.15, 0.45], ['150vw', '-50vw']);
  const fhaY = useTransform(scrollYProgress, [0.15, 0.45], [100, -200]);
  const fhaRotate = useTransform(scrollYProgress, [0.15, 0.45], [45, -15]);

  const convX = useTransform(scrollYProgress, [0.15, 0.45], ['-100vw', '100vw']);
  const convY = useTransform(scrollYProgress, [0.15, 0.45], [300, -100]);
  const convRotate = useTransform(scrollYProgress, [0.15, 0.45], [-30, 20]);

  // === SECTION 3: PROCESS (0.35 to 0.65) ===
  const processOpacity = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], [0, 1, 1, 0]);
  const processY = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], [200, 0, 0, -200]);
  
  // Floating process icons
  const keysY = useTransform(scrollYProgress, [0.35, 0.65], [500, -500]);
  const calendarY = useTransform(scrollYProgress, [0.35, 0.65], [-300, 400]);

  // === SECTION 4: LICENSED / MAP (0.55 to 0.85) ===
  const mapOpacity = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
  const mapY = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [200, 0, 0, -200]);
  
  const stateWIX = useTransform(scrollYProgress, [0.55, 0.85], ['-50vw', '10vw']);
  const stateILX = useTransform(scrollYProgress, [0.55, 0.85], ['100vw', '-20vw']);
  const stateFLX = useTransform(scrollYProgress, [0.55, 0.85], ['-20vw', '50vw']);

  // === SECTION 5: CTA (0.75 to 1) ===
  const ctaOpacity = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1]);
  const ctaScale = useTransform(scrollYProgress, [0.75, 0.85], [0.8, 1]);

  return (
    <div ref={containerRef} className={styles.scrollContainer}>
      <motion.div 
        className={styles.stickyContainer} 
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        
        {/* === HERO === */}
        <motion.div className={`${styles.sectionAbsolute} ${styles.heroLayout}`} style={{ opacity: heroOpacity, y: heroY }}>
          <h1 className={styles.superTitle}>MADCITY<br/>HOME LOANS</h1>
          <motion.div style={{ y: heroHouseY, scale: heroHouseScale, zIndex: 5 }}>
            <Image 
              src="/hero-home.jpg" 
              alt="Premium home in Madison" 
              width={600} 
              height={400} 
              className={styles.heroImage}
              priority
            />
          </motion.div>
          <motion.div className={styles.floatingEye} animate={{ y: [0, -30, 0], rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 6 }}>
            🏠
          </motion.div>
          <Link href="https://provisor.shapeportal.com/ref/34" target="_blank" className={styles.ctaButtonPrimary}>
            Start Your Application
          </Link>
        </motion.div>

        {/* === LOAN TYPES === */}
        <motion.div className={styles.sectionAbsolute} style={{ opacity: loansOpacity, y: loansY }}>
          <div className={styles.splitLayout}>
            <div className={styles.textColumn}>
              <h2 className={styles.sectionTitle}>LOANS.</h2>
              <p className={styles.description}>
                From first-time buyer assistance to high-balance jumbo financing, we offer the most comprehensive loan portfolio in Wisconsin. FHA, VA, Conventional, Jumbo, USDA & WHEDA.
              </p>
            </div>
            <div className={styles.graphicsColumn}>
              <motion.div className={styles.floatPill} style={{ x: fhaX, y: fhaY, rotate: fhaRotate }}>
                <span className={styles.pillIcon}>🎖️</span> VA Loans
              </motion.div>
              <motion.div className={styles.floatPill} style={{ x: convX, y: convY, rotate: convRotate }}>
                <span className={styles.pillIcon}>🏡</span> Conventional
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* === PROCESS === */}
        <motion.div className={styles.sectionAbsolute} style={{ opacity: processOpacity, y: processY }}>
          <div className={styles.splitLayout}>
            <div className={styles.graphicsColumn}>
              <motion.div className={styles.floatEmoji} style={{ y: keysY, left: '20%' }} animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }}>
                🗝️
              </motion.div>
              <motion.div className={styles.floatEmoji} style={{ y: calendarY, right: '10%' }} animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }}>
                📅
              </motion.div>
            </div>
            <div className={styles.textColumn}>
              <h2 className={styles.sectionTitle}>PROCESS.</h2>
              <p className={styles.description}>
                We&apos;ve removed the friction from the mortgage process so you can focus on your new home. From contract to closing — Rob&apos;s team manages every detail for a stress-free, on-time keys-in-hand day.
              </p>
            </div>
          </div>
        </motion.div>

        {/* === LICENSED === */}
        <motion.div className={styles.sectionAbsolute} style={{ opacity: mapOpacity, y: mapY }}>
          <div className={styles.splitLayout}>
            <div className={styles.textColumn}>
              <h2 className={styles.sectionTitle}>LICENSED.</h2>
              <p className={styles.description}>
                Expert mortgage guidance across the country. Licensed in 11 states including Wisconsin, Illinois, Florida, Texas, Colorado, and Washington.
              </p>
            </div>
            <div className={styles.graphicsColumn}>
              <motion.div className={styles.floatStateBubble} style={{ x: stateWIX, top: '20%' }}>WI</motion.div>
              <motion.div className={styles.floatStateBubble} style={{ x: stateILX, top: '50%' }}>IL</motion.div>
              <motion.div className={styles.floatStateBubble} style={{ x: stateFLX, top: '80%' }}>FL</motion.div>
            </div>
          </div>
        </motion.div>

        {/* === CTA === */}
        <motion.div className={`${styles.sectionAbsolute} ${styles.heroLayout}`} style={{ opacity: ctaOpacity, scale: ctaScale }}>
          <h2 className={styles.superTitle}>APPLY<br/>NOW.</h2>
          <p className={styles.description} style={{ margin: '0 auto', textAlign: 'center' }}>
            Experience the MadCity difference: absolute transparency, lightning-fast closings, and local expertise that wins.
          </p>
          <Link href="https://provisor.shapeportal.com/ref/34" target="_blank" className={styles.ctaButtonPrimary} style={{ margin: '3rem auto 0' }}>
            Get Pre-Approved Today
          </Link>
        </motion.div>

      </motion.div>
    </div>
  );
}
