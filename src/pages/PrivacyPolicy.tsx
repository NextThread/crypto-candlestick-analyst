
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="pt-24 pb-16 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gradient-primary">Privacy Policy</h1>
      
      <div className="space-y-8 text-gray-300">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
          <p>Welcome to ChartlyAI. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">2. Information We Collect</h2>
          <p>We collect information you provide directly to us when you:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Create an account</li>
            <li>Subscribe to our services</li>
            <li>Contact our customer support</li>
            <li>Upload charts or data for analysis</li>
          </ul>
          <p className="mt-4">This information may include:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Name and contact information</li>
            <li>Payment information</li>
            <li>User preferences and settings</li>
            <li>Content you upload for analysis</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send you technical notices, updates, and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Develop new products and services</li>
            <li>Monitor and analyze trends and usage</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">5. Cookies and Tracking Technologies</h2>
          <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">6. Third-Party Services</h2>
          <p>We may use third-party services such as payment processors, analytics providers, and cloud service providers. These third parties may have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">7. Your Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal data, including:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>The right to access and receive a copy of your personal data</li>
            <li>The right to rectify or update your personal data</li>
            <li>The right to erase your personal data</li>
            <li>The right to restrict processing of your personal data</li>
            <li>The right to object to processing of your personal data</li>
            <li>The right to data portability</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">8. Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">9. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="mt-2">Email: privacy@chartlyai.com</p>
        </section>
        
        <section className="pt-6 border-t border-gray-700">
          <p className="text-sm text-gray-400">Last Updated: May 30, 2024</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
