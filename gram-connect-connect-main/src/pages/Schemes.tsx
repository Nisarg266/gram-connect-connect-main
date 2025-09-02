import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { SchemeCard } from '@/components/SchemeCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, Filter, Plus } from 'lucide-react';
import { AddSchemeDialog } from '@/components/AddSchemeDialog';

// Import scheme images
import farmerPensionImage from '@/assets/scheme-farmer-pension.jpg';
import scholarshipImage from '@/assets/scheme-scholarship.jpg';
import healthcareImage from '@/assets/scheme-healthcare.jpg';

const SchemesContent = () => {
  const { t, language } = useLanguage();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
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

  const handleAddScheme = (newScheme: any) => {
    setSchemes([...schemes, { ...newScheme, id: `scheme-${Date.now()}` }]);
    setIsAddDialogOpen(false);
  };

  const handleDeleteScheme = (schemeId: string) => {
    setSchemes(schemes.filter(scheme => scheme.id !== schemeId));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation userRole="citizen" isOnline={true} />
      <main className="py-16 px-4">
        <div className="container">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                          <div>
                <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                  {t('schemes.all')}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {t('hero.subtitle')}
                </p>
              </div>
              <Button onClick={() => setIsAddDialogOpen(true)} className="mt-4 sm:mt-0">
                <Plus className="h-4 w-4 mr-2" />
                {t('scheme.add_new')}
              </Button>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-4xl">
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
                showDelete={true}
                onDelete={handleDeleteScheme}
              />
            ))}
          </div>
        </div>
      </main>

      <AddSchemeDialog
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        onAddScheme={handleAddScheme}
      />
    </div>
  );
};

const Schemes = () => {
  return <SchemesContent />;
};

export default Schemes;