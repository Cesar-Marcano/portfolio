'use client';

import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import ContactSection from './components/ContactSection';

export default function BackendPortfolio() {
	return (
		<main className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden">
			<HeroSection />
			<AboutMe />
			<Projects />
			<ContactSection />
		</main>
	);
}
