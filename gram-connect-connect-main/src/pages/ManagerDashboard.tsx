import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { SchemeCard } from '@/components/SchemeCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, Filter, Plus, LogOut, User, Shield } from 'lucide-react';
import { AddSchemeDialog } from '@/components/AddSchemeDialog';

// Import scheme images
import farmerPensionImage from '@/assets/scheme-farmer-pension.jpg';
import scholarshipImage from '@/assets/scheme-scholarship.jpg';
import healthcareImage from '@/assets/scheme-healthcare.jpg';

const ManagerDashboard = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
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

  const [managerUsername, setManagerUsername] = useState('');

  useEffect(() => {
    // Check if manager is logged in
    const isLoggedIn = localStorage.getItem('managerLoggedIn');
    const username = localStorage.getItem('managerUsername');
    
    if (!isLoggedIn || !username) {
      navigate('/manager/login');
      return;
    }
    
    setManagerUsername(username);
  }, [navigate]);

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
  }, [t]);

  const handleAddScheme = (newScheme: any) => {
    setSchemes([...schemes, { ...newScheme, id: `scheme-${Date.now()}` }]);
    setIsAddDialogOpen(false);
  };

  const handleDeleteScheme = (schemeId: string) => {
    setSchemes(schemes.filter(scheme => scheme.id !== schemeId));
  };

  const handleLogout = () => {
    localStorage.removeItem('managerLoggedIn');
    localStorage.removeItem('managerUsername');
    navigate('/manager/login');
  };

  if (!managerUsername) {
    return null; // Loading state
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation userRole="admin" isOnline={true} />
      
      {/* Manager Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-6">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8" />
              <div>
                <h1 className="text-2xl font-bold">Manager Dashboard</h1>
                <p className="text-blue-100">Welcome back, {managerUsername}</p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <main className="py-8 px-4">
        <div className="container">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                Scheme Management
              </h2>
              <p className="text-xl text-muted-foreground">
                Add, edit, and manage government schemes
              </p>
            </div>
            <Button onClick={() => setIsAddDialogOpen(true)} className="mt-4 sm:mt-0">
              <Plus className="h-4 w-4 mr-2" />
              Add New Scheme
            </Button>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-4xl">
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

export default ManagerDashboard;
