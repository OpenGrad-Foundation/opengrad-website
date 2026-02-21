import React, { useEffect } from 'react';
import { Navbar } from '../../Components/Navbar/Navbar';
import { Footer } from '../../Components/Footer/Footer';
import ceoBg from './ceo-bg.png';
import styles from './index.module.css';

const CEOLetter: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.container}>
        <div 
          onClick={() => window.location.href = '/aboutus'} 
          className={styles.backLink}
        >
          <span>&lt;</span> Back to homepage
        </div>
        
        <div className={styles.imageContainer}>
          <img 
            src={ceoBg} 
            alt="Sahil Sameer" 
            className={styles.ceoImage}
          />
          <h1 className={styles.title}>A Letter from Our CEO</h1>
        </div>

        <div className={styles.content}>
          <p>India’s public education system has made significant progress in school enrollment and board results, but a critical gap remains in translating schooling into access to quality higher education. For most government school students, especially those from rural, tribal, and low-access regions, the system effectively ends at Class 12. Entry into good national and state-level colleges depends on competitive entrance exams that sit entirely outside the public school system, while guidance, applications, and preparation are largely controlled by a private coaching industry that most families cannot access.</p>
          <p>OpenGrad exists to build the missing higher-education layer on top of the public school system. Our mission is to ensure that students from government schools are not excluded from good colleges due to lack of guidance, preparation, or support. We do this through state government partnerships, community-driven mentoring, and a technology-first delivery model that provides career mapping, exam preparation, mentorship, application support, and follow-through until college enrollment.</p>
          <p>Today, we work with governments in Tamil Nadu and Chhattisgarh and run a community-driven MBA program in Kerala. We support over 10,000 students across programs, with more than 500 securing admissions to Tier-1 institutions. As entrance ecosystems become more complex and AI-driven learning becomes more unevenly distributed, we have responded by strengthening our on-ground Fellowship Program and building Daksha, an AI-enabled, regional-language, voice-first platform that brings guidance and practice to low-access contexts.</p>
          <p>We operate a tech-first, transparent model where every step career mapping, attendance, mentoring, mock tests, applications, and admissions is digitally tracked and verifiable. This allows donors, partners, and governments to see progress in real time and hold us accountable to outcomes that matter.</p>
          <p>What began as a small idea of building a movement around community-powered learning amplified by technology has grown into a system-level effort to convert years of schooling into real opportunities. Our focus going forward is depth and institutional adoption and strengthening what we run today so it can be embedded within public education systems and sustained at scale.</p>
          <p>Thank you for taking the time to learn about our work.</p>
          <p className={styles.signature}>
            Warm regards,<br />
            <strong>Sahil Sameer</strong><br />
            Co-Founder & CEO, OpenGrad Foundation
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CEOLetter;