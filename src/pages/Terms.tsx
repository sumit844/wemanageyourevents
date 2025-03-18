import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground mb-6">
              Last Updated: June 15, 2023
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Welcome to Eventify. These Terms of Service govern your use of our website and the services we offer. By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access our services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Use of Our Services</h2>
              <p className="text-muted-foreground mb-4">
                Our services are intended for users who are at least 18 years old. By using our services, you represent and warrant that you meet this requirement.
              </p>
              <p className="text-muted-foreground mb-4">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
                <li>Use our services in any way that violates any applicable federal, state, local, or international law or regulation</li>
                <li>Use our services for the purpose of exploiting, harming, or attempting to exploit or harm minors in any way</li>
                <li>Transmit any material that is defamatory, obscene, indecent, abusive, offensive, harassing, violent, hateful, inflammatory, or otherwise objectionable</li>
                <li>Impersonate or attempt to impersonate Eventify, an Eventify employee, another user, or any other person or entity</li>
                <li>Engage in any other conduct that restricts or inhibits anyone's use or enjoyment of our services</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Bookings and Payments</h2>
              <p className="text-muted-foreground mb-4">
                When booking our services, you agree to provide current, complete, and accurate information. All bookings are subject to availability and confirmation.
              </p>
              <p className="text-muted-foreground mb-4">
                Payment terms vary depending on the type of event and services required. Full details will be provided in your service agreement. Generally, a non-refundable deposit is required to secure your booking date, with the balance due prior to the event.
              </p>
              <p className="text-muted-foreground">
                Prices for our services may change from time to time. We reserve the right to modify or discontinue any service without notice at any time.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Cancellations and Refunds</h2>
              <p className="text-muted-foreground mb-4">
                Our cancellation policy is as follows:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
                <li>Cancellations made more than 90 days before the event date: Full refund of any payments made, minus the non-refundable deposit</li>
                <li>Cancellations made 30-90 days before the event date: 50% refund of any payments made, minus the non-refundable deposit</li>
                <li>Cancellations made less than 30 days before the event date: No refund will be provided</li>
              </ul>
              <p className="text-muted-foreground">
                All cancellations must be made in writing. In case of unforeseen circumstances or force majeure events, we reserve the right to cancel the agreement, in which case a full refund will be provided.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                The content on our website, including text, graphics, logos, images, and software, is the property of Eventify or our licensors and is protected by copyright and trademark laws.
              </p>
              <p className="text-muted-foreground">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website, except as incidental to normal web browsing.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                Eventify and its directors, employees, partners, agents, suppliers, or affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
                <li>Your access to or use of or inability to access or use our services</li>
                <li>Any conduct or content of any third party on our services</li>
                <li>Any content obtained from our services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Changes to These Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms at any time. If we make changes, we will update the "Last Updated" date at the top of these Terms. Your continued use of our services following the posting of revised Terms means that you accept and agree to the changes.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="mt-4">
                <p className="text-muted-foreground">Email: legal@eventify.com</p>
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

export default Terms;
