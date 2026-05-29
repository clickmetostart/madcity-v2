"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import styles from './CashAppHome.module.css';

// --- DATA FROM V1 MADCITY BUILD ---
const loanPrograms = [
  { icon: '🏠', title: 'FHA Loans', desc: 'As low as 3.5% down. Perfect for first-time buyers.' },
  { icon: '🎖️', title: 'VA Loans', desc: 'Zero down payment for eligible veterans and active duty.' },
  { icon: '🏡', title: 'Conventional', desc: 'Fannie & Freddie backed. Flexible terms.' },
  { icon: '🏛️', title: 'Jumbo Loans', desc: 'Financing above $806,500.' },
  { icon: '🌾', title: 'USDA Loans', desc: 'Zero down payment for eligible rural homes.' },
  { icon: '🌟', title: 'WHEDA Loans', desc: 'Wisconsin exclusive below-market rates.' },
  { icon: '💡', title: 'Non-QM', desc: 'Bank statement & DSCR loans for investors.' },
  { icon: '🛠️', title: 'Refinance', desc: 'Lower your rate or pull cash out.' },
];

const audiences = [
  { title: 'First-Time Buyers', desc: 'We walk you through every step in plain English so you know exactly what to expect.' },
  { title: 'Relocation & Upgrades', desc: 'Seamless coordination for buying your next home while selling your current one.' },
  { title: 'Real Estate Investors', desc: 'Clear numbers, smart planning, and reliable execution for building your portfolio.' },
];

const processSteps = [
  { num: '01', title: 'Strategy Session', desc: 'A no-pressure call to discuss your goals.' },
  { num: '02', title: 'Verified Pre-Approval', desc: 'A pre-approval as strong as cash.' },
  { num: '03', title: 'The Finish Line', desc: 'Stress-free management from contract to close.' },
];

const stats = [
  { number: '15+', label: 'Years of Experience' },
  { number: '1,000+', label: 'Families Helped' },
  { number: '11', label: 'States Licensed' },
  { number: '5.0 ⭐', label: 'Google Rating' },
];

const trustPartners = [
  { name: 'NMLS', src: 'https://madcityhomeloans.com/wp-content/uploads/2025/12/1_1_11zon.png' },
  { name: 'Fannie Mae', src: 'https://madcityhomeloans.com/wp-content/uploads/2025/12/2_2_11zon.png' },
  { name: 'USDA', src: 'https://madcityhomeloans.com/wp-content/uploads/2025/12/4_4_11zon.png' },
  { name: 'USA Cares', src: 'https://madcityhomeloans.com/wp-content/uploads/2025/12/6_6_11zon.png' },
  { name: 'HUD', src: 'https://madcityhomeloans.com/wp-content/uploads/2025/12/9_9_11zon.png' },
];


export default function CashAppHome() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // --- PHONE PARALLAX (Active in Hero [Center], Loans [Right], Footer [Left]) ---
  const phoneX = useTransform(scrollYProgress, 
    [0, 0.1, 0.2, 0.4, 0.5, 0.8, 0.9, 1.0], 
    [0, 0, 350, 350, 350, -350, -350, -350]
  );
  const phoneY = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.5, 0.8, 1.0], [0, 100, 100, 100, -100, -100]);
  const phoneScale = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.5, 0.8, 0.9, 1.0], [1, 0.8, 0.8, 0, 0, 0.8, 0.8]);
  const phoneOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.5, 0.8, 0.9, 1.0], [1, 1, 1, 0, 0, 1, 1]);
  const phoneRotate = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.9], [0, 15, 15, -15]);

  // --- LAPTOP PARALLAX (Active in Audience [Left]) ---
  const laptopX = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [-350, -350, -350, -350]);
  const laptopScale = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 0.9, 0.9, 0]);
  const laptopOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
  const laptopRotate = useTransform(scrollYProgress, [0.3, 0.4], [10, -5]);

  // --- TABLET PARALLAX (Active in Stats [Right]) ---
  const tabletX = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [350, 350, 350, 350]);
  const tabletScale = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 0.8, 0.8, 0]);
  const tabletOpacity = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const tabletRotate = useTransform(scrollYProgress, [0.5, 0.6], [-15, 10]);

  // --- FLOATING GRAPHICS ---
  const keyY = useTransform(scrollYProgress, [0, 1], [0, -1200]);
  const keyRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const houseY = useTransform(scrollYProgress, [0, 1], [400, -900]);
  const houseRotate = useTransform(scrollYProgress, [0, 1], [-20, -180]);
  const calcY = useTransform(scrollYProgress, [0, 1], [800, -1500]);
  const calcRotate = useTransform(scrollYProgress, [0, 1], [10, 90]);

  return (
    <div ref={containerRef} className={styles.mainWrapper}>
      
      {/* === FIXED FOREGROUND LAYER === */}
      <div className={styles.fixedLayer}>
        
        <motion.div 
          className={styles.devicePlaceholder}
          style={{ width: 280, height: 580, borderRadius: 40, x: phoneX, y: phoneY, scale: phoneScale, opacity: phoneOpacity, rotate: phoneRotate, position: 'absolute' }}
        >
          PHONE
        </motion.div>

        <motion.div 
          className={styles.devicePlaceholder}
          style={{ width: 600, height: 350, borderRadius: 20, x: laptopX, scale: laptopScale, opacity: laptopOpacity, rotate: laptopRotate, position: 'absolute' }}
        >
          LAPTOP
        </motion.div>

        <motion.div 
          className={styles.devicePlaceholder}
          style={{ width: 400, height: 550, borderRadius: 30, x: tabletX, scale: tabletScale, opacity: tabletOpacity, rotate: tabletRotate, position: 'absolute' }}
        >
          TABLET
        </motion.div>

        {/* Floating MadCity Graphics */}
        <motion.div className={styles.floatingGraphic} style={{ y: keyY, rotate: keyRotate, left: '10%', top: '20%' }}>🔑</motion.div>
        <motion.div className={styles.floatingGraphic} style={{ y: houseY, rotate: houseRotate, right: '10%', top: '50%' }}>🏡</motion.div>
        <motion.div className={styles.floatingGraphic} style={{ y: calcY, rotate: calcRotate, left: '15%', top: '80%' }}>📱</motion.div>
      </div>

      {/* === SCROLLING SECTIONS === */}
      
      {/* 1. Hero (Center Text) */}
      <section className={styles.scrollSection} style={{ height: '200vh' }}>
        <div className={styles.stickyContent}>
          <div className={styles.heroTitleWrap}>
            <h1 className={styles.heroWord}>MADCITY</h1>
            <h1 className={styles.heroWord}>HOME LOANS</h1>
          </div>
        </div>
      </section>

      {/* 2. Loans (Text Left, Phone Right) */}
      <section className={styles.scrollSection} style={{ height: '200vh' }}>
        <div className={styles.stickyContent}>
          <div className={styles.container}>
            <div className={styles.splitLayoutLeft}>
              <div className={styles.textColumn}>
                <h2 className={styles.sectionTitle}>LOAN<br/>PROGRAMS</h2>
                <div className={styles.loanGrid}>
                  {loanPrograms.map(loan => (
                    <div key={loan.title} className={styles.loanItem}>
                      <div className={styles.loanIcon}>{loan.icon}</div>
                      <div>
                        <h3>{loan.title}</h3>
                        <p>{loan.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Audience (Text Right, Laptop Left) */}
      <section className={styles.scrollSection} style={{ height: '200vh' }}>
        <div className={styles.stickyContent}>
          <div className={styles.container}>
            <div className={styles.splitLayoutRight}>
              <div className={styles.textColumnRight}>
                <h2 className={styles.sectionTitle}>WHO WE<br/>SERVE</h2>
                <div className={styles.verticalList}>
                  {audiences.map(aud => (
                    <div key={aud.title}>
                      <h3 className={styles.sectionSubTitle}>{aud.title}</h3>
                      <p className={styles.sectionText}>{aud.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Stats/Process (Text Left, Tablet Right) */}
      <section className={styles.scrollSection} style={{ height: '200vh' }}>
        <div className={styles.stickyContent}>
          <div className={styles.container}>
            <div className={styles.splitLayoutLeft}>
              <div className={styles.textColumn}>
                <h2 className={styles.sectionTitle}>PROCESS<br/>& RESULTS</h2>
                
                <div className={styles.verticalList} style={{ gap: '1rem', marginBottom: '2rem' }}>
                  {processSteps.map(step => (
                    <div key={step.num} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 900, opacity: 0.2 }}>{step.num}</div>
                      <div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>{step.title}</h3>
                        <p className={styles.sectionText}>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.statGrid}>
                  {stats.map(s => (
                    <div key={s.label}>
                      <div className={styles.statNum}>{s.number}</div>
                      <div className={styles.statLabel}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Footer/Trust (Text Right, Phone Left) */}
      <section className={styles.scrollSection} style={{ height: '150vh' }}>
        <div className={styles.stickyContent}>
          <div className={styles.container}>
            <div className={styles.splitLayoutRight}>
              <div className={styles.textColumnRight}>
                <h2 className={styles.sectionTitle}>READY TO<br/>START?</h2>
                <p className={styles.sectionText} style={{ marginBottom: '2rem' }}>
                  Whether you're ready to apply or just have questions, Rob and the MadCity team are here for you.
                </p>
                <Link href="https://provisor.shapeportal.com/ref/34" target="_blank" className={styles.btnPrimary}>
                  Apply With Rob Miller
                </Link>

                <h3 className={styles.sectionSubTitle} style={{ marginTop: '4rem', fontSize: '1.5rem', opacity: 0.5 }}>TRUSTED BY</h3>
                <div className={styles.partnerGrid}>
                  {trustPartners.map(p => (
                    <img key={p.name} src={p.src} alt={p.name} className={styles.partnerLogo} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
