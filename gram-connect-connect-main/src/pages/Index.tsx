import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { SchemeSection } from '@/components/SchemeSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation userRole="citizen" isOnline={true} />
      <main>
        <Hero />
        <SchemeSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">GRAMSEVA</h3>
              <p className="text-primary-foreground/80 text-sm">
                Empowering citizens through digital access to government schemes and services.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="/public-schemes" className="hover:text-primary-foreground">View Schemes</a></li>
                <li><a href="/applications" className="hover:text-primary-foreground">Track Application</a></li>
                <li><a href="/grievances" className="hover:text-primary-foreground">Lodge Complaint</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="/help" className="hover:text-primary-foreground">Help Center</a></li>
                <li><a href="/contact" className="hover:text-primary-foreground">Contact Us</a></li>
                <li><a href="/faq" className="hover:text-primary-foreground">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Access</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="/public-schemes" className="hover:text-primary-foreground">Public Schemes</a></li>
                <li><a href="/manager/login" className="hover:text-primary-foreground">Manager Login</a></li>
                <li className="text-xs opacity-75">Available in English, Hindi, and Gujarati</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
            © 2024 GRAMSEVA - Government of India. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
