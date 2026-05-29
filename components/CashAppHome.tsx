"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
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
  { title: 'Real Estate Investors', desc: 'Clear numbers, smart planning, and reliable execution.' },
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

const stateLicenses = ['WI', 'IL', 'IA', 'MN', 'MI', 'FL', 'TX', 'CO', 'ND', 'SD', 'WA'];

export default function CashAppHome() {
  
  // SECTION 1: Hero (Black)
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.8]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(heroProgress, [0, 1], [0, 200]);

  // SECTION 2: Loans (White)
  const loansRef = useRef<HTMLElement>(null);
  const { scrollYProgress: loansProgress } = useScroll({ target: loansRef, offset: ["start end", "end start"] });
  const loansY = useTransform(loansProgress, [0.3, 0.5], [100, 0]);
  const loansOpacity = useTransform(loansProgress, [0.3, 0.5], [0, 1]);

  // SECTION 3: Audiences (Gray)
  const audRef = useRef<HTMLElement>(null);
  const { scrollYProgress: audProgress } = useScroll({ target: audRef, offset: ["start end", "end start"] });
  const audY = useTransform(audProgress, [0.3, 0.5], [100, 0]);
  const audOpacity = useTransform(audProgress, [0.3, 0.5], [0, 1]);

  // SECTION 4: Process & Stats (Green)
  const proRef = useRef<HTMLElement>(null);
  const { scrollYProgress: proProgress } = useScroll({ target: proRef, offset: ["start end", "end start"] });
  const proX = useTransform(proProgress, [0.3, 0.5], [-100, 0]);
  const proOpacity = useTransform(proProgress, [0.3, 0.5], [0, 1]);

  // SECTION 5: Licensing & Partners (Black)
  const licRef = useRef<HTMLElement>(null);
  const { scrollYProgress: licProgress } = useScroll({ target: licRef, offset: ["start end", "end start"] });
  const licY = useTransform(licProgress, [0.3, 0.5], [100, 0]);
  const licOpacity = useTransform(licProgress, [0.3, 0.5], [0, 1]);

  return (
    <div className={styles.mainWrapper}>
      
      {/* === SECTION 1: HERO (Black) === */}
      <section ref={heroRef} className={styles.scrollSection} style={{ height: '200vh' }}>
        <div className={styles.stickyContent}>
          <motion.div className={styles.container} style={{ scale: heroScale, opacity: heroOpacity, y: heroY, textAlign: 'center' }}>
            <h1 className={styles.superTitle} style={{ color: 'var(--cash-green)' }}>MADCITY<br/>HOME LOANS</h1>
            <p className={styles.leadText} style={{ margin: '0 auto' }}>
              Secure Your Future In Your Dream Home.<br/>
              Expert mortgage guidance for the 2026 real estate market.
            </p>
            <Link href="https://provisor.shapeportal.com/ref/34" target="_blank" className={styles.btnPrimary} style={{ margin: '3rem auto 0' }}>
              Apply With Rob Miller
            </Link>
          </motion.div>
        </div>
      </section>

      {/* === SECTION 2: LOANS (White) === */}
      <section ref={loansRef} className={styles.scrollSection} style={{ height: '250vh' }}>
        <div className={styles.stickyContent}>
          <div className={styles.container}>
            <motion.div style={{ y: loansY, opacity: loansOpacity }}>
              <h2 className={styles.sectionTitle}>LOAN<br/>PROGRAMS.</h2>
              <p className={styles.leadText}>
                From first-time buyer assistance to high-balance jumbo financing, we offer the most comprehensive portfolio in Wisconsin.
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

      {/* === SECTION 3: AUDIENCE (Gray) === */}
      <section ref={audRef} className={styles.scrollSection} style={{ height: '200vh' }}>
        <div className={styles.stickyContent}>
          <div className={styles.container}>
            <motion.div style={{ y: audY, opacity: audOpacity }}>
              <h2 className={styles.sectionTitle} style={{ color: 'var(--cash-green)' }}>WHO WE<br/>SERVE.</h2>
              <p className={styles.leadText}>
                Whether you're buying your first home or your fifth investment property, we have the expertise to get you across the finish line.
              </p>
              <div className={styles.audienceGrid}>
                {audiences.map((aud, i) => (
                  <div key={i} className={styles.audienceCard}>
                    <h3 className={styles.loanTitle}>{aud.title}</h3>
                    <p className={styles.loanDesc}>{aud.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === SECTION 4: PROCESS & STATS (Green) === */}
      <section ref={proRef} className={styles.scrollSection} style={{ height: '250vh' }}>
        <div className={styles.stickyContent}>
          <div className={styles.container}>
            <div className={styles.splitLayout}>
              <motion.div style={{ x: proX, opacity: proOpacity }}>
                <h2 className={styles.sectionTitle}>PROCESS.</h2>
                <div className={styles.stepList}>
                  <div className={styles.stepItem}>
                    <div className={styles.stepNum}>01</div>
                    <div className={styles.stepText}>
                      <h3>Strategy Session</h3>
                      <p>A no-pressure call to discuss your 2026 goals and buying power.</p>
                    </div>
                  </div>
                  <div className={styles.stepItem}>
                    <div className={styles.stepNum}>02</div>
                    <div className={styles.stepText}>
                      <h3>Verified Pre-Approval</h3>
                      <p>A comprehensive review to give you a pre-approval as strong as cash.</p>
                    </div>
                  </div>
                  <div className={styles.stepItem}>
                    <div className={styles.stepNum}>03</div>
                    <div className={styles.stepText}>
                      <h3>The Finish Line</h3>
                      <p>From contract to closing — we manage every detail for a stress-free day.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div style={{ opacity: proOpacity }}>
                <h2 className={styles.sectionTitle}>RESULTS.</h2>
                <div className={styles.statsGrid}>
                  {stats.map((s, i) => (
                    <div key={i} className={styles.statBox}>
                      <div className={styles.statNum}>{s.number}</div>
                      <div className={styles.statLabel}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION 5: LICENSING & TRUST (Black) === */}
      <section ref={licRef} className={styles.scrollSection} style={{ height: '200vh' }}>
        <div className={styles.stickyContent}>
          <div className={styles.container}>
            <motion.div style={{ y: licY, opacity: licOpacity }}>
              <h2 className={styles.sectionTitle}>LICENSED.</h2>
              <p className={styles.leadText}>
                Based in Madison, WI | Serving Homeowners in 11 States
              </p>
              <div className={styles.stateGrid}>
                {stateLicenses.map(state => (
                  <div key={state} className={styles.stateChip}>
                    {state}
                  </div>
                ))}
              </div>
              
              <h2 className={styles.sectionTitle} style={{ marginTop: '4rem', fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--cash-green)' }}>TRUSTED BY.</h2>
              <div className={styles.partnerGrid}>
                {trustPartners.map(p => (
                  <img key={p.name} src={p.src} alt={p.name} className={styles.partnerLogo} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === SECTION 6: CONTACT (White) === */}
      <section className={styles.scrollSection} style={{ height: '150vh' }}>
        <div className={styles.stickyContent}>
          <div className={styles.container}>
            <div className={styles.splitLayout}>
              <div>
                <h2 className={styles.sectionTitle}>LET'S<br/>TALK.</h2>
                <p className={styles.leadText}>
                  Whether you're ready to apply or just have questions, Rob and the MadCity team are here for you. Reach out and get a same business-day response.
                </p>
                <Link href="https://provisor.shapeportal.com/ref/34" target="_blank" className={styles.btnPrimary} style={{ marginTop: '0' }}>
                  Start Full Application
                </Link>
              </div>
              <div>
                <form action="/api/contact" method="POST" style={{ background: 'var(--cash-gray)', padding: '3rem', borderRadius: '1.5rem' }}>
                  <input type="text" name="name" placeholder="Full Name" className={styles.formInput} required />
                  <input type="tel" name="phone" placeholder="Phone Number" className={styles.formInput} />
                  <input type="email" name="email" placeholder="Email Address" className={styles.formInput} required />
                  <textarea name="message" placeholder="How can we help?" className={styles.formInput} rows={4} required></textarea>
                  <button type="submit" className={styles.btnDark} style={{ width: '100%', marginTop: '1rem' }}>Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
