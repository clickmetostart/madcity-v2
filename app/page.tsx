import type { Metadata } from 'next';
import CashAppHome from '../components/CashAppHome';

export const metadata: Metadata = {
  title: 'Madison, WI Mortgage Lender | Home Loans 2026 | Rob Miller | MadCity Home Loans',
  description:
    'MadCity Home Loans — Rob Miller, Senior Loan Officer in Madison, WI. Licensed in 11 states. Expert FHA, VA, conventional, jumbo, USDA & WHEDA loans in 2026. Fast closings, local expertise. Call 608-227-2002.',
};

export default function HomePage() {
  return <CashAppHome />;
}
