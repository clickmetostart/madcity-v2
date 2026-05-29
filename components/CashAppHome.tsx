"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './CashAppHome.module.css';

export default function CashAppHome() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Global scroll progress for the fixed layer
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Phone Parallax
  const phoneY = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 150, 300, 0, -100]);
  const phoneRotateX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 15, -15, 30, 0]);
  const phoneRotateY = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, -20, 20, 180, 0]);
  const phoneScale = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [1, 0.8, 1.1, 0.9, 1]);

  // Floating Graphics Parallax
  const burgerY = useTransform(scrollYProgress, [0, 1], [0, -1200]);
  const burgerRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  
  const shoeY = useTransform(scrollYProgress, [0, 1], [400, -900]);
  const shoeRotate = useTransform(scrollYProgress, [0, 1], [-20, -180]);
  
  const stairsY = useTransform(scrollYProgress, [0, 1], [800, -1500]);
  const stairsRotate = useTransform(scrollYProgress, [0, 1], [10, 90]);

  return (
    <div ref={containerRef} className={styles.mainWrapper}>
      
      {/* === FIXED FOREGROUND LAYER === */}
      <div className={styles.fixedLayer}>
        {/* Central Phone */}
        <motion.div 
          className={styles.phonePlaceholder}
          style={{ y: phoneY, rotateX: phoneRotateX, rotateY: phoneRotateY, scale: phoneScale }}
        >
          PHONE
        </motion.div>

        {/* Floating Graphics */}
        <motion.div className={styles.floatingGraphic} style={{ y: burgerY, rotate: burgerRotate, left: '15%', top: '20%' }}>🍔</motion.div>
        <motion.div className={styles.floatingGraphic} style={{ y: shoeY, rotate: shoeRotate, right: '20%', top: '50%' }}>👟</motion.div>
        <motion.div className={styles.floatingGraphic} style={{ y: stairsY, rotate: stairsRotate, left: '25%', top: '80%' }}>🪜</motion.div>
      </div>

      {/* === SCROLLING SECTIONS === */}
      
      {/* 1. Hero */}
      <section className={styles.scrollSection} style={{ height: '200vh' }}>
        <div className={styles.stickyContent}>
          <div className={styles.heroTitleWrap}>
            <h1 className={styles.heroWord}>CASH</h1>
            <h1 className={styles.heroWord}>APP</h1>
          </div>
        </div>
      </section>

      {/* 2. Payments */}
      <section className={styles.scrollSection} style={{ height: '200vh' }}>
        <div className={styles.stickyContent}>
          <div className={styles.container}>
            <div className={styles.splitLayout}>
              <div className={styles.leftColumn}>
                <h2 className={styles.sectionTitle}>PAYMENTS</h2>
                <p className={styles.sectionText}>Send and receive money with anyone, donate to an important cause, or tip professionals. Just enter a $cashtag, phone number, or scan their QR code to pay.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Banking */}
      <section className={styles.scrollSection} style={{ height: '200vh' }}>
        <div className={styles.stickyContent}>
          <div className={styles.container}>
            <div className={styles.splitLayout}>
              <div className={styles.leftColumn}>
                <h2 className={styles.sectionTitle}>BANKING</h2>
                <p className={styles.sectionText}>Receive your paycheck, tax returns, and other direct deposits up to two days early using your Cash App routing and account number.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Cash Card */}
      <section className={styles.scrollSection} style={{ height: '200vh' }}>
        <div className={styles.stickyContent}>
          <div className={styles.container}>
            <div className={styles.splitLayout}>
              <div className={styles.leftColumn}>
                <h2 className={styles.sectionTitle}>CASH CARD<br/>& BOOST</h2>
                <p className={styles.sectionText}>The Cash Card is a free, customizable debit card that lets you pay online and in stores. It’s the only way to get Boosts—instant discounts that work at places where you want to spend.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Investing */}
      <section className={styles.scrollSection} style={{ height: '150vh' }}>
        <div className={styles.stickyContent}>
          <div className={styles.container}>
            <div className={styles.splitLayout}>
              <div className={styles.leftColumn}>
                <h2 className={styles.sectionTitle} style={{ color: 'var(--cash-green)' }}>INVESTING</h2>
              </div>
              <div className={styles.rightColumn}>
                <h3 className={styles.sectionTitle} style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '1rem' }}>STOCKS</h3>
                <p className={styles.sectionText} style={{ marginBottom: '2rem' }}>Whether you're an expert or just getting started, Cash App is the fastest and most accessible way to invest in stocks. Start now with as little as $1.</p>
                
                <h3 className={styles.sectionTitle} style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '1rem' }}>BITCOIN</h3>
                <p className={styles.sectionText}>Cash App is the fastest way to convert dollars to bitcoin. From your home screen, six taps are all it takes to stack sats, buy an entire bitcoin, or just see its price.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
