
import { useEffect } from "react";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="pt-24 pb-16 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gradient-primary">Terms of Service</h1>
      
      <div className="space-y-8 text-gray-300">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
          <p>By accessing and using ChartlyAI's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">2. Description of Service</h2>
          <p>ChartlyAI provides AI-powered chart analysis tools and services designed to help users analyze financial charts and make informed decisions. Our services include but are not limited to chart analysis, pattern recognition, and predictive analytics.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">3. User Accounts</h2>
          <p>To access certain features of our service, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">4. Subscription and Payments</h2>
          <p>Some of our services require a paid subscription. By subscribing to our paid services, you agree to pay the fees as they are described at the time of your purchase. We reserve the right to change our prices with notice to you.</p>
          <p className="mt-2">Subscription fees are billed in advance on a monthly or annual basis depending on the subscription plan you select. Unless otherwise stated, subscriptions automatically renew at the end of each billing period.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">5. Intellectual Property</h2>
          <p>All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, and software, are owned by ChartlyAI and are protected by international copyright, trademark, and other intellectual property laws.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">6. User Content</h2>
          <p>You retain ownership of any content you upload to our services. By uploading content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display your content for the purpose of providing our services to you.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">7. Prohibited Uses</h2>
          <p>You agree not to use our services:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>In any way that violates applicable laws or regulations</li>
            <li>To transmit any material that is defamatory, offensive, or otherwise objectionable</li>
            <li>To attempt to gain unauthorized access to our systems or interfere with other users</li>
            <li>To engage in any activity that could damage, disable, or impair our services</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">8. Disclaimer of Warranties</h2>
          <p>Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, secure, or error-free.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">9. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, ChartlyAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">10. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms of Service at any time. We will notify you of any changes by posting the new Terms on our website and updating the "Last Updated" date.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">11. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which ChartlyAI is established, without regard to its conflict of law provisions.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">12. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p className="mt-2">Email: legal@chartlyai.com</p>
        </section>
        
        <section className="pt-6 border-t border-gray-700">
          <p className="text-sm text-gray-400">Last Updated: May 30, 2024</p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
