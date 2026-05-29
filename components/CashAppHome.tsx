"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import styles from './CashAppHome.module.css';

const loanPrograms = [
  { icon: '🏠', title: 'FHA Loans', desc: 'As low as 3.5% down. Perfect for first-time buyers.' },
  { icon: '🎖️', title: 'VA Loans', desc: 'Zero down payment for eligible veterans and active duty.' },
  { icon: '🏡', title: 'Conventional', desc: 'Fannie & Freddie backed. Flexible terms.' },
  { icon: '🏛️', title: 'Jumbo Loans', desc: 'Financing above $806,500 for high-value properties.' },
  { icon: '🌾', title: 'USDA Loans', desc: 'Zero down payment for eligible rural homes.' },
  { icon: '🌟', title: 'WHEDA Loans', desc: 'Wisconsin exclusive below-market interest rates.' },
  { icon: '💡', title: 'Non-QM', desc: 'Bank statement and DSCR loans for unique borrowers.' },
  { icon: '🛠️', title: 'Services', desc: 'From purchase planning to equity management.' },
];

const audiences = [
  { title: 'First-Time Buyers', desc: 'We walk you through every step in plain English.' },
  { title: 'Purchase & Relocation', desc: 'Organized and easy to understand from the very beginning.' },
  { title: 'Investors', desc: 'Clear numbers, smart planning, and reliable execution.' },
];

const stateLicenses = ['WI', 'IL', 'IA', 'MN', 'MI', 'FL', 'TX', 'CO', 'ND', 'SD', 'WA'];

export default function CashAppHome() {
  
  // Section 1: Hero
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.8]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  // Section 2: Loans
  const loansRef = useRef<HTMLElement>(null);
  const { scrollYProgress: loansProgress } = useScroll({ target: loansRef, offset: ["start end", "end start"] });
  const loansY = useTransform(loansProgress, [0.3, 0.5], [100, 0]);
  const loansOpacity = useTransform(loansProgress, [0.3, 0.5], [0, 1]);

  // Section 3: Process / Audience
  const processRef = useRef<HTMLElement>(null);
  const { scrollYProgress: processProgress } = useScroll({ target: processRef, offset: ["start end", "end start"] });
  const processX = useTransform(processProgress, [0.3, 0.5], [100, 0]);
  const processOpacity = useTransform(processProgress, [0.3, 0.5], [0, 1]);

  return (
    <div className={styles.mainWrapper}>
      
      {/* === SECTION 1: HERO === */}
      <section ref={heroRef} className={styles.scrollSection} style={{ height: '200vh' }}>
        <div className={styles.stickyContent} style={{ background: '#000', color: '#fff' }}>
          <motion.div className={styles.container} style={{ scale: heroScale, opacity: heroOpacity, textAlign: 'center' }}>
            <h1 className={styles.superTitle}>MADCITY<br/>HOME LOANS</h1>
            <p className={styles.leadText} style={{ margin: '0 auto' }}>
              Secure Your Future In Your Dream Home.<br/>
              Expert mortgage guidance for the 2026 real estate market.
            </p>
            <Link href="https://provisor.shapeportal.com/ref/34" target="_blank" className={styles.btnPrimary} style={{ margin: '2rem auto 0' }}>
              Apply With Rob Miller
            </Link>
          </motion.div>
        </div>
      </section>

      {/* === SECTION 2: LOANS === */}
      <section ref={loansRef} className={styles.scrollSection} style={{ height: '200vh' }}>
        <div className={styles.stickyContent} style={{ background: '#fff', color: '#000' }}>
          <div className={styles.container}>
            <motion.div style={{ y: loansY, opacity: loansOpacity }}>
              <h2 className={styles.sectionTitle} style={{ color: 'var(--accent)' }}>LOAN<br/>PROGRAMS.</h2>
              <p className={styles.leadText}>
                From first-time buyer assistance to high-balance jumbo financing, we offer the most comprehensive portfolio.
              </p>
              <div className={styles.loanGrid}>
                {loanPrograms.map((loan, i) => (
                  <div key={i} className={styles.loanCard}>
                    <div className={styles.loanIcon}>{loan.icon}</div>
                    <h3 className={styles.loanTitle}>{loan.title}</h3>
                    <p className={styles.loanDesc}>{loan.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === SECTION 3: AUDIENCE & PROCESS === */}
      <section ref={processRef} className={styles.scrollSection} style={{ height: '200vh' }}>
        <div className={styles.stickyContent} style={{ background: 'var(--accent)', color: '#000' }}>
          <div className={styles.container}>
            <div className={styles.splitLayout}>
              <motion.div style={{ x: processX, opacity: processOpacity }}>
                <h2 className={styles.sectionTitle} style={{ color: '#000' }}>WHO WE<br/>SERVE.</h2>
                <div className={styles.audienceGrid} style={{ gridTemplateColumns: '1fr' }}>
                  {audiences.map((aud, i) => (
                    <div key={i} className={styles.audienceCard} style={{ background: 'rgba(0,0,0,0.1)', color: '#000' }}>
                      <h3 className={styles.loanTitle}>{aud.title}</h3>
                      <p className={styles.loanDesc} style={{ color: '#333' }}>{aud.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div style={{ opacity: processOpacity }}>
                <h2 className={styles.sectionTitle} style={{ color: '#000' }}>PROCESS.</h2>
                <div className={styles.stepList}>
                  <div className={styles.stepItem}>
                    <div className={styles.stepNum}>01</div>
                    <div className={styles.stepText}>
                      <h3 style={{ color: '#000' }}>Strategy Session</h3>
                      <p style={{ color: '#333' }}>A no-pressure call to discuss your goals.</p>
                    </div>
                  </div>
                  <div className={styles.stepItem}>
                    <div className={styles.stepNum}>02</div>
                    <div className={styles.stepText}>
                      <h3 style={{ color: '#000' }}>Verified Pre-Approval</h3>
                      <p style={{ color: '#333' }}>A comprehensive review to give you a pre-approval as strong as cash.</p>
                    </div>
                  </div>
                  <div className={styles.stepItem}>
                    <div className={styles.stepNum}>03</div>
                    <div className={styles.stepText}>
                      <h3 style={{ color: '#000' }}>The Finish Line</h3>
                      <p style={{ color: '#333' }}>From contract to closing — we manage every detail.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION 4: LICENSED === */}
      <section className={styles.scrollSection} style={{ height: '150vh' }}>
        <div className={styles.stickyContent} style={{ background: '#000', color: '#fff' }}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle} style={{ color: '#fff' }}>LICENSED.</h2>
            <p className={styles.leadText}>
              Expertise across the country. Serving homeowners in 11 states.
            </p>
            <div className={styles.stateGrid}>
              {stateLicenses.map(state => (
                <div key={state} className={styles.stateChip} style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>
                  {state}
                </div>
              ))}
            </div>
            
            <h2 className={styles.sectionTitle} style={{ marginTop: '4rem', color: 'var(--accent)' }}>READY?</h2>
            <Link href="https://provisor.shapeportal.com/ref/34" target="_blank" className={styles.btnPrimary} style={{ marginTop: '0' }}>
              Start Full Application
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
