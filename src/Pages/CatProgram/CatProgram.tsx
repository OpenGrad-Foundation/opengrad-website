'use client';
import Hero from './Components/Hero/Hero';
import RealMentors from './Components/RealMentors/RealMentors';
import Results from './Components/Results/Results';
import ButterflyEffect from './Components/ButterflyEffect/ButterflyEffect';
import ImpactStory from './Components/ImpactStory/ImpactStory';
import Stats from './Components/Stats/Stats';
import CTA from './Components/CTA/CTA';
import YoutubeChannel from './Components/YoutubeChannel/YoutubeChannel';
import InstagramFeed from './Components/InstagramFeed/InstagramFeed';
import { Navbar } from '../../Components/Navbar/Navbar';
import {Footer} from '../../Components/Footer/Footer';

export default function CatProgram() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <RealMentors />
      <Results />
      <ButterflyEffect />
      <ImpactStory />
      <Stats />
      <CTA />
      <YoutubeChannel />
      <InstagramFeed />
      <Footer />
    </main>
  );
}
