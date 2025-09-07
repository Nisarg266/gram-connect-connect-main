import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Search, TrendingUp, Users, Shield } from 'lucide-react';
import heroImage from '@/assets/gramseva-hero.jpg';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 px-4 bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-primary-muted text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Shield className="h-4 w-4" />
                Digital India Bha Initiative
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">100+</div>
                <div className="text-sm text-primary-foreground/80">Active Schemes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">10L+</div>
                <div className="text-sm text-primary-foreground/80">Citizens Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">98%</div>
                <div className="text-sm text-primary-foreground/80">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="xl" variant="secondary" className="group">
                <Search className="h-5 w-5 mr-2" />
                {t('hero.cta')}
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="xl" variant="outline" className="border-primary-foreground text-black hover:bg-primary-foreground hover:text-black">
                <TrendingUp className="h-5 w-5 mr-2" />
                Check Eligibility
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              <Button size="sm" variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                <Users className="h-4 w-4 mr-2" />
                Popular Schemes
              </Button>
              <Button size="sm" variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                Track Application
              </Button>
              <Button size="sm" variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                Report Issue
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src={heroImage} 
                alt="Citizens using digital government services"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full backdrop-blur-sm border border-secondary-foreground/20 flex items-center justify-center">
              <Shield className="h-8 w-8 text-secondary" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-accent/20 rounded-full backdrop-blur-sm border border-accent-foreground/20 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};