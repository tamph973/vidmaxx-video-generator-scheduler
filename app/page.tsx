import { CTA } from '@/components/landing/cta';
import { Features } from '@/components/landing/features';
import { Footer } from '@/components/landing/footer';
import { Hero } from '@/components/landing/hero';
import { HowItWorks } from '@/components/landing/how-it-works';
import { Navbar } from '@/components/landing/navbar';
import { Pricing } from '@/components/landing/pricing';
import { SocialProof } from '@/components/landing/social-proof';

export default function Home() {
	return (
		<div className='min-h-screen bg-black text-zinc-50 font-sans selection:bg-primary/20 selection:text-primary-foreground'>
			<Navbar />
			<main>
				<Hero />
				<SocialProof />
				<Features />
				<HowItWorks />
				<Pricing />
				<CTA />
			</main>
			<Footer />
		</div>
	);
}
