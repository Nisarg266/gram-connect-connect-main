import { SchemeCard } from './SchemeCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, Filter, Star } from 'lucide-react';

// Import scheme images
import farmerPensionImage from '@/assets/scheme-farmer-pension.jpg';
import scholarshipImage from '@/assets/scheme-scholarship.jpg';
import healthcareImage from '@/assets/scheme-healthcare.jpg';

export const SchemeSection: React.FC = () => {
  const { t } = useLanguage();

  // Mock scheme data with eligibility
  const schemes = [
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
  ];

  return (
    <section className="py-16 px-4">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-muted text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="h-4 w-4" />
            Personalized for You
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t('schemes.recommended')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Based on your profile, here are the government schemes you may be eligible for
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-4xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search schemes by name, category, or keyword..."
              className="pl-10 h-12"
            />
          </div>
          <Select>
            <SelectTrigger className="w-full sm:w-48 h-12">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="agriculture">Agriculture</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="health">Health</SelectItem>
              <SelectItem value="employment">Employment</SelectItem>
              <SelectItem value="housing">Housing</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="h-12 px-6">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Eligibility Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
          <div className="bg-eligible-muted border border-eligible/20 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-eligible mb-1">2</div>
            <div className="text-sm text-eligible">Fully Eligible</div>
          </div>
          <div className="bg-partially-eligible-muted border border-partially-eligible/20 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-partially-eligible mb-1">1</div>
            <div className="text-sm text-partially-eligible">Partially Eligible</div>
          </div>
          <div className="bg-not-eligible-muted border border-not-eligible/20 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-not-eligible mb-1">1</div>
            <div className="text-sm text-not-eligible">Not Eligible</div>
          </div>
        </div>

        {/* Scheme Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {schemes.map((scheme) => (
            <SchemeCard
              key={scheme.id}
              {...scheme}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" onClick={() => window.location.href = '/schemes'}>
            View All {schemes.length + 0} Schemes
          </Button>
        </div>
      </div>
    </section>
  );
};