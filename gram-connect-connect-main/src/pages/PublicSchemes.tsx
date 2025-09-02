import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { SchemeCard } from '@/components/SchemeCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, Filter, Shield, ArrowRight } from 'lucide-react';

// Import scheme images
import farmerPensionImage from '@/assets/scheme-farmer-pension.jpg';
import scholarshipImage from '@/assets/scheme-scholarship.jpg';
import healthcareImage from '@/assets/scheme-healthcare.jpg';

const PublicSchemes = () => {
  const { t, language } = useLanguage();
  const [schemes, setSchemes] = useState([
    {
      id: 'farmer-pension',
      title: t('scheme.farmer_pension.title'),
      description: t('scheme.farmer_pension.desc'),
      benefit: t('scheme.farmer_pension.benefit'),
      category: 'Agriculture',
      eligibilityStatus: 'eligible' as const,
      eligibilityReasons: [
        t('eligibility.age_requirement'),
        t('eligibility.income_limit')
      ],
      imageUrl: farmerPensionImage,
    },
    {
      id: 'scholarship',
      title: t('scheme.scholarship.title'),
      description: t('scheme.scholarship.desc'),
      benefit: t('scheme.scholarship.benefit'),
      category: 'Education',
      eligibilityStatus: 'partially-eligible' as const,
      eligibilityReasons: [
        t('eligibility.education_requirement'),
        'Family income verification pending'
      ],
      imageUrl: scholarshipImage,
    },
    {
      id: 'healthcare',
      title: t('scheme.healthcare.title'),
      description: t('scheme.healthcare.desc'),
      benefit: t('scheme.healthcare.benefit'),
      category: 'Health',
      eligibilityStatus: 'not-eligible' as const,
      eligibilityReasons: [
        'Already enrolled in another health scheme',
        'Income exceeds eligibility limit'
      ],
      imageUrl: healthcareImage,
    },
  ]);

  // Update schemes when language changes
  useEffect(() => {
    setSchemes([
      {
        id: 'farmer-pension',
        title: t('scheme.farmer_pension.title'),
        description: t('scheme.farmer_pension.desc'),
        benefit: t('scheme.farmer_pension.benefit'),
        category: 'Agriculture',
        eligibilityStatus: 'eligible' as const,
        eligibilityReasons: [
          t('eligibility.age_requirement'),
          t('eligibility.income_limit')
        ],
        imageUrl: farmerPensionImage,
      },
      {
        id: 'scholarship',
        title: t('scheme.scholarship.title'),
        description: t('scheme.scholarship.desc'),
        benefit: t('scheme.scholarship.benefit'),
        category: 'Education',
        eligibilityStatus: 'partially-eligible' as const,
        eligibilityReasons: [
          t('eligibility.education_requirement'),
          'Family income verification pending'
        ],
        imageUrl: scholarshipImage,
      },
      {
        id: 'healthcare',
        title: t('scheme.healthcare.title'),
        description: t('scheme.healthcare.desc'),
        benefit: t('scheme.healthcare.benefit'),
        category: 'Health',
        eligibilityStatus: 'not-eligible' as const,
        eligibilityReasons: [
          'Already enrolled in another health scheme',
          'Income exceeds eligibility limit'
        ],
        imageUrl: healthcareImage,
      },
    ]);
  }, [language, t]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation userRole="citizen" isOnline={true} />
      
      {/* Public Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-6">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8" />
              <div>
                <h1 className="text-2xl font-bold">Public Schemes</h1>
                <p className="text-green-100">Browse available government schemes</p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => window.location.href = '/manager/login'}
              className="border-white text-white hover:bg-white hover:text-green-600"
            >
              <ArrowRight className="h-4 w-4 mr-2" />
              Manager Access
            </Button>
          </div>
        </div>
      </div>

      <main className="py-8 px-4">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-2">
              {t('schemes.all')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('hero.subtitle')}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              These schemes are managed by authorized personnel only
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder={t('search.placeholder')}
                className="pl-10 h-12"
              />
            </div>
            <Select>
              <SelectTrigger className="w-full sm:w-48 h-12">
                <SelectValue placeholder={t('filter.category')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('filter.all_categories')}</SelectItem>
                <SelectItem value="agriculture">{t('filter.agriculture')}</SelectItem>
                <SelectItem value="education">{t('filter.education')}</SelectItem>
                <SelectItem value="health">{t('filter.health')}</SelectItem>
                <SelectItem value="employment">{t('filter.employment')}</SelectItem>
                <SelectItem value="housing">{t('filter.housing')}</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="h-12 px-6">
              <Filter className="h-4 w-4 mr-2" />
              {t('filter.filters')}
            </Button>
          </div>

          {/* Scheme Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schemes.map((scheme) => (
              <SchemeCard
                key={scheme.id}
                {...scheme}
                showDelete={false}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PublicSchemes;
