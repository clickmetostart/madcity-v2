'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import InteractiveMap from './InteractiveMap';
import ReviewsSection from './ReviewsSection';
import styles from './CashAppHome.module.css';

const loanPrograms = [
  {
    href: '/fha-loans',
    gradient: 'linear-gradient(135deg, #00E013 0%, #00B30F 100%)',
    icon: '🏠',
    title: 'FHA Loans',
    tag: 'Popular',
    desc: 'Down payments from 3.5%. Ideal for first-time buyers.',
  },
  {
    href: '/va-loans',
    gradient: 'linear-gradient(135deg, #FF3366 0%, #CC0033 100%)',
    icon: '🎖️',
    title: 'VA Loans',
    tag: '0% Down',
    desc: 'No down payment, no PMI for veterans & military families.',
  },
  {
    href: '/conventional-loans',
    gradient: 'linear-gradient(135deg, #3366FF 0%, #0033CC 100%)',
    icon: '🏡',
    title: 'Conventional',
    tag: 'Flex terms',
    desc: 'Conforming loans with down payments as low as 3%.',
  },
  {
    href: '/jumbo-loans',
    gradient: 'linear-gradient(135deg, #B333FF 0%, #8000CC 100%)',
    icon: '🏛️',
    title: 'Jumbo Loans',
    tag: 'High-Limit',
    desc: 'Financing above conforming limits up to $3M+.',
  },
  {
    href: '/usda-loans',
    gradient: 'linear-gradient(135deg, #FFB333 0%, #CC8000 100%)',
    icon: '🌾',
    title: 'USDA Loans',
    tag: 'Rural',
    desc: 'Zero down financing for rural and suburban Wisconsin homes.',
  },
  {
    href: '/wheda-loans',
    gradient: 'linear-gradient(135deg, #33FFB3 0%, #00CC80 100%)',
    icon: '🌟',
    title: 'WHEDA Loans',
    tag: 'WI Special',
    desc: 'Below-market interest rates and down payment help.',
  },
];

const audiences = [
  {
    title: 'First-Time Buyers',
    subtitle: 'Step-by-Step Guidance',
    desc: 'No jargon. Just clear plans, verified pre-approvals, and expert guidance to secure your first keys.',
    href: '/first-time-home-buyers',
    image: 'https://madcityhomeloans.com/wp-content/uploads/2025/12/57049_1_11zon.jpg',
  },
  {
    title: 'Home Upgraders',
    subtitle: 'Seamless Transition',
    desc: 'Move up or relocate with a mortgage strategy coordinated to line up perfectly with your selling timeline.',
    href: '/purchase-a-new-home',
    image: 'https://madcityhomeloans.com/wp-content/uploads/2026/01/3050-1024x683.jpg',
  },
  {
    title: 'Investors',
    subtitle: 'Rate & Term Optimization',
    desc: 'Fast underwriting, DSCR options, and bank statement programs optimized to grow your real estate portfolio.',
    href: '/non-conventional-loans',
    image: 'https://madcityhomeloans.com/wp-content/uploads/2025/12/3177_1_11zon.jpg',
  },
];

const trustPartners = [
  { name: 'NMLS', src: 'https://madcityhomeloans.com/wp-content/uploads/2025/12/1_1_11zon.png' },
  { name: 'Fannie & Freddie', src: 'https://madcityhomeloans.com/wp-content/uploads/2025/12/2_2_11zon.png' },
  { name: 'USDA', src: 'https://madcityhomeloans.com/wp-content/uploads/2025/12/4_4_11zon.png' },
  { name: 'USA Cares', src: 'https://madcityhomeloans.com/wp-content/uploads/2025/12/6_6_11zon.png' },
  { name: 'HUD', src: 'https://madcityhomeloans.com/wp-content/uploads/2025/12/9_9_11zon.png' },
  { name: 'Equal Housing', src: 'https://madcityhomeloans.com/wp-content/uploads/2025/12/10_10_11zon.png' },
];

const stateLicenses = [
  { state: 'Wisconsin', flag: '🏛️', license: '26699' },
  { state: 'Illinois', flag: '🌾', license: '031.0052539' },
  { state: 'Florida', flag: '☀️', license: 'LO99099' },
  { state: 'Texas', flag: '⭐', license: '239865' },
  { state: 'Colorado', flag: '🏔️', license: 'Active' },
  { state: 'Washington', flag: '🌲', license: 'MLO-239865' },
];

export default function CashAppHome() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = slideRefs.current.findIndex((ref) => ref === entry.target);
          if (index !== -1) {
            setActiveSlide(index);
          }
        }
      });
    }, observerOptions);

    slideRefs.current.forEach((slide) => {
      if (slide) observer.observe(slide);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSlide = (index: number) => {
    slideRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  const getSlideClass = (index: number) => {
    return `${styles.slide} ${activeSlide === index ? styles.active : ''}`;
  };

  return (
    <div className={styles.sliderContainer}>
      {/* Dynamic Background color overlay controlled by active slide */}
      <div 
        className={styles.dynamicBg} 
        style={{
          backgroundColor: 
            activeSlide === 0 ? '#0B0D17' : // Dark ink
            activeSlide === 1 ? '#FFFFFF' : // Pure White
            activeSlide === 2 ? '#00E013' : // Cash App Green
            activeSlide === 3 ? '#0B0D17' : // Dark ink
            activeSlide === 4 ? '#FFFFFF' : // White
            activeSlide === 5 ? '#0B0D17' : // Dark ink
            activeSlide === 6 ? '#07080E' : // Deepest ink
            '#0B0D17'
        }}
      />

      {/* Floating Slide Navigation Indicator Dots */}
      <div className={styles.slideIndicator}>
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <button
            key={i}
            className={`${styles.indicatorDot} ${activeSlide === i ? styles.indicatorActive : ''}`}
            onClick={() => scrollToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              borderColor: (activeSlide === 1 || activeSlide === 4) ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)',
              backgroundColor: activeSlide === i 
                ? ((activeSlide === 1 || activeSlide === 4) ? '#000000' : (activeSlide === 2 ? '#000000' : '#00E013'))
                : 'transparent'
            }}
          />
        ))}
      </div>

      {/* ── Slide 1: Hero (Dark Theme) ──────────────────────── */}
      <div ref={(el) => { slideRefs.current[0] = el }} className={getSlideClass(0)}>
        <div className={`container ${styles.slideContent} ${styles.heroContent}`}>
          <div className={styles.heroLeft}>
            <div className={styles.heroBadge}>
              <span className={styles.badgePulse} /> Rob Miller · NMLS #239865
            </div>
            <h1 className={styles.heroTitle}>
              MORTGAGES<br />
              BUILT FOR THE<br />
              <span className={styles.heroHighlight}>BOLD.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Skip the red tape. Access FHA, VA, Conventional, and Jumbo home loans at competitive rates.
              Licensed in 11 states. Let&apos;s close on your schedule.
            </p>
            <div className={styles.heroActions}>
              <Link
                href="https://provisor.shapeportal.com/ref/34"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cashButton}
              >
                Apply Instantly
              </Link>
              <button onClick={() => scrollToSlide(6)} className={styles.cashButtonOutline}>
                Message Rob
              </button>
            </div>
          </div>
          <div className={styles.heroRight}>
            {/* Cash App style 3D Floating Mortgage Card */}
            <div className={styles.floatingCardWrapper}>
              <div className={styles.floatingCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardLogo}>MADCITY</span>
                  <span className={styles.cardChip} />
                </div>
                <div className={styles.cardNumber}>•••• •••• •••• 2026</div>
                <div className={styles.cardFooter}>
                  <div className={styles.cardHolder}>
                    <span>VERIFIED PRE-APPROVAL</span>
                    <strong>ROB MILLER TEAM</strong>
                  </div>
                  <div className={styles.cardStatus}>ACTIVE</div>
                </div>
              </div>
              <div className={`${styles.floatingElement} ${styles.elementGreen}`} />
              <div className={`${styles.floatingElement} ${styles.elementWhite}`} />
              <div className={`${styles.floatingElement} ${styles.elementDark}`} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Slide 2: Loan Programs (White Theme) ────────────────── */}
      <div ref={(el) => { slideRefs.current[1] = el }} className={getSlideClass(1)}>
        <div className={`container ${styles.slideContent} ${styles.lightContent}`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadgeDark}>LOAN PORTFOLIO</span>
            <h2 className={styles.sectionTitleDark}>FIND YOUR LOAN.</h2>
            <p className={styles.sectionDescDark}>
              Click a program to view guidelines or launch an application. We make approval seamless.
            </p>
          </div>
          <div className={styles.loanGrid}>
            {loanPrograms.map((loan, idx) => (
              <Link
                key={loan.href}
                href={loan.href}
                className={styles.loanCard}
                style={{ '--card-index': idx } as React.CSSProperties}
              >
                <div className={styles.loanHeader}>
                  <span className={styles.loanIcon}>{loan.icon}</span>
                  <span className={styles.loanBadge}>{loan.tag}</span>
                </div>
                <h3 className={styles.loanTitle}>{loan.title}</h3>
                <p className={styles.loanDesc}>{loan.desc}</p>
                <div className={styles.loanFooter}>
                  <span>Explore Guidelines</span>
                  <span className={styles.arrowIcon}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Slide 3: Who We Serve (Green Theme) ─────────────────── */}
      <div ref={(el) => { slideRefs.current[2] = el }} className={getSlideClass(2)}>
        <div className={`container ${styles.slideContent} ${styles.greenContent}`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadgeDark} style={{ backgroundColor: '#000', color: '#00E013' }}>
              WHO WE HELP
            </span>
            <h2 className={styles.sectionTitleDark} style={{ color: '#000' }}>
              REAL ADVICE. FOR REAL PEOPLE.
            </h2>
          </div>
          <div className={styles.audienceGrid}>
            {audiences.map((aud, idx) => (
              <Link
                key={aud.title}
                href={aud.href}
                className={styles.audienceCard}
                style={{ '--card-index': idx } as React.CSSProperties}
              >
                <div
                  className={styles.audienceBg}
                  style={{ backgroundImage: `url('${aud.image}')` }}
                />
                <div className={styles.audienceOverlay} />
                <div className={styles.audienceCardBody}>
                  <span className={styles.audienceSubtitle}>{aud.subtitle}</span>
                  <h3 className={styles.audienceTitle}>{aud.title}</h3>
                  <p className={styles.audienceDesc}>{aud.desc}</p>
                  <span className={styles.audienceLink}>Get Started →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Slide 4: Roadmap / How It Works (Dark Theme) ───────── */}
      <div ref={(el) => { slideRefs.current[3] = el }} className={getSlideClass(3)}>
        <div className={`container ${styles.slideContent}`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>ROADMAP</span>
            <h2 className={styles.sectionTitle}>3 STEPS TO CLOSING.</h2>
            <p className={styles.sectionDesc}>
              No headaches. No surprises. Just clear checkpoints from hello to keys.
            </p>
          </div>
          <div className={styles.roadmapGrid}>
            {[
              {
                num: '01',
                title: 'Strategy Session',
                desc: 'A quick 15-minute phone sync to align on your home loan budget, target rates, and timeframes.',
              },
              {
                num: '02',
                title: 'Verified Pre-Approval',
                desc: 'We review your documents upfront so Madison realtors trust your offer as much as cash.',
              },
              {
                num: '03',
                title: 'Closing Day Keys',
                desc: 'Rob&apos;s processing team manages final guidelines to ensure on-time, headache-free funding.',
              },
            ].map((step, idx) => (
              <div
                key={step.num}
                className={styles.roadmapStep}
                style={{ '--card-index': idx } as React.CSSProperties}
              >
                <div className={styles.stepNum}>{step.num}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.roadmapFooter}>
            <Link href="/mortgage-process" className={styles.cashButtonOutline}>
              View Comprehensive 12-Step Process →
            </Link>
          </div>
        </div>
      </div>

      {/* ── Slide 5: Why Rob Miller (White Theme) ────────────────── */}
      <div ref={(el) => { slideRefs.current[4] = el }} className={getSlideClass(4)}>
        <div className={`container ${styles.slideContent} ${styles.lightContent}`}>
          <div className={styles.splitLayout}>
            <div className={styles.splitLeft}>
              <span className={styles.sectionBadgeDark}>THE MADCITY ADVANTAGE</span>
              <h2 className={styles.sectionTitleDark}>MEET ROB MILLER.</h2>
              <p className={styles.splitText}>
                Rob Miller has spent 15+ years simplifying the home loan process for families across the Midwest. 
                As Branch Manager at ProVisor, Inc., Rob provides the resources of a national lender with the direct, 
                personal care of a local Madison neighbor.
              </p>
              <div className={styles.perksList}>
                <div className={styles.perkItem}>
                  <span className={styles.perkIcon}>✓</span>
                  <div>
                    <strong>Direct Access</strong>
                    <span>No call centers. Call or text Rob directly at 608-227-2002.</span>
                  </div>
                </div>
                <div className={styles.perkItem}>
                  <span className={styles.perkIcon}>✓</span>
                  <div>
                    <strong>Realtor-Trusted Pre-Approvals</strong>
                    <span>Wisconsin agents respect a MadCity pre-approval letters.</span>
                  </div>
                </div>
                <div className={styles.perkItem}>
                  <span className={styles.perkIcon}>✓</span>
                  <div>
                    <strong>Custom Loan Strategies</strong>
                    <span>Solutions for complex profiles, self-employed borrowers, and investors.</span>
                  </div>
                </div>
              </div>
              <div className={styles.splitActions}>
                <Link href="/about-rob" className={styles.cashButtonDark}>
                  Read Rob&apos;s Story
                </Link>
                <Link href="/reviews" className={styles.cashButtonOutlineDark}>
                  100+ Google Reviews
                </Link>
              </div>
            </div>
            <div className={styles.splitRight}>
              <div className={styles.robImageFrame}>
                <Image
                  src="/rob-miller.jpg"
                  alt="Rob Miller, Branch Manager"
                  fill
                  style={{ objectFit: 'cover' }}
                  className={styles.robImage}
                />
                <div className={styles.robBadgeFloater}>
                  <strong>NMLS #239865</strong>
                  <span>Senior Loan Officer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Slide 6: Service Areas & Map (Dark Theme) ─────────── */}
      <div ref={(el) => { slideRefs.current[5] = el }} className={getSlideClass(5)}>
        <div className={`container ${styles.slideContent}`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>SERVICE AREAS</span>
            <h2 className={styles.sectionTitle}>LICENSED IN 11 STATES.</h2>
            <p className={styles.sectionDesc}>
              Headquartered in Madison, WI. Closing digital mortgages nationwide.
            </p>
          </div>
          
          <div className={styles.mapContainer}>
            <InteractiveMap />
          </div>

          <div className={styles.stateChips}>
            {stateLicenses.map((s) => (
              <Link 
                key={s.state} 
                href={`/locations/${s.state.toLowerCase().replace(' ', '-')}`} 
                className={styles.stateChip}
              >
                <span>{s.flag}</span>
                <strong>{s.state}</strong>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Slide 7: Contact Form & Trust Partners (Deepest Ink Theme) ── */}
      <div ref={(el) => { slideRefs.current[6] = el }} className={getSlideClass(6)}>
        <div className={`container ${styles.slideContent} ${styles.contactContent}`}>
          <div className={styles.contactSplit}>
            <div className={styles.contactLeft}>
              <span className={styles.sectionBadge}>GET STARTED</span>
              <h2 className={styles.sectionTitle}>LET&apos;S TALK STRATEGY.</h2>
              <p className={styles.contactText}>
                Have a question about down payments, loan terms, or credit guidelines? 
                Drop your info and Rob or a team member will reach out same-day.
              </p>
              
              <div className={styles.contactDirectDetails}>
                <a href="tel:6082272002" className={styles.directContactItem}>
                  <span className={styles.directIcon}>📞</span>
                  <div>
                    <strong>Call or Text</strong>
                    <span>608-227-2002</span>
                  </div>
                </a>
                <a href="mailto:rob@provisor.com" className={styles.directContactItem}>
                  <span className={styles.directIcon}>✉</span>
                  <div>
                    <strong>Email Direct</strong>
                    <span>rob@provisor.com</span>
                  </div>
                </a>
              </div>

              {/* Trust Partner Logos */}
              <div className={styles.trustPartnersWrap}>
                <span className={styles.trustTitle}>Backed by Industry Leaders</span>
                <div className={styles.trustLogos}>
                  {trustPartners.map((logo) => (
                    <Image
                      key={logo.name}
                      src={logo.src}
                      alt={logo.name}
                      width={44}
                      height={44}
                      className={styles.trustLogo}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.contactRight}>
              <div className={styles.glassFormCard}>
                <h3 className={styles.formCardHeading}>Quick Inquiry Form</h3>
                <form className={styles.form} action="/api/contact" method="POST">
                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label htmlFor="name">Name</label>
                      <input type="text" id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div className={styles.formField}>
                      <label htmlFor="phone">Phone</label>
                      <input type="tel" id="phone" name="phone" placeholder="Phone number" />
                    </div>
                  </div>
                  <div className={styles.formField}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email address" required />
                  </div>
                  <div className={styles.formField}>
                    <label htmlFor="message">How can we help?</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell us about your home buying or refinancing goals..."
                      rows={3}
                    />
                  </div>
                  <button type="submit" className={styles.submitBtn}>
                    Send Message →
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className={styles.slideFooterLegal}>
            <p>
              Robert Miller NMLS #239865 · ProVisor, Inc. NMLS #1802853 · Branch NMLS #2398994. Equal Housing Lender.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
