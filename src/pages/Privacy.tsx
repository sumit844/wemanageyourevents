import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground mb-6">
              Last Updated: June 15, 2023
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                At Eventify, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
              <p className="text-muted-foreground">
                This privacy policy applies to all information collected through our website, as well as any related services, sales, marketing, or events.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. The Data We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect several types of information for various purposes to provide and improve our service to you. The types of data we may collect include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
                <li>Personal identification information (Name, email address, phone number, etc.)</li>
                <li>Contact information</li>
                <li>Technical data (IP address, browser type and version, time zone setting, etc.)</li>
                <li>Usage data (information on how you use our website and services)</li>
                <li>Marketing and communications data</li>
              </ul>
              <p className="text-muted-foreground">
                We do not collect any Special Categories of Personal Data about you (this includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health, and genetic and biometric data).
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
              <p className="text-muted-foreground mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To allow you to participate in interactive features of our service when you choose to do so</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our service</li>
                <li>To monitor the usage of our service</li>
                <li>To detect, prevent and address technical issues</li>
                <li>To provide you with news, special offers and general information about other goods, services and events which we offer</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
              </p>
              <p className="text-muted-foreground">
                We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Your Legal Rights</h2>
              <p className="text-muted-foreground mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
              <p className="text-muted-foreground">
                If you wish to exercise any of these rights, please contact us.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4">
                <p className="text-muted-foreground">Email: privacy@eventify.com</p>
                <p className="text-muted-foreground">Phone: (123) 456-7890</p>
                <p className="text-muted-foreground">Address: 123 Event Street, New York, NY 10001</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;