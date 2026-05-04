/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import Services from './components/Services';
import PricingPlans from './components/PricingPlans';
import Insurance from './components/Insurance';
import DigitalProcess from './components/DigitalProcess';
import Stats from './components/Stats';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-brand-navy">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProperties />
        <Services />
        <PricingPlans />
        <Insurance />
        <DigitalProcess />
        <Stats />
        <Team />
        <Testimonials />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
