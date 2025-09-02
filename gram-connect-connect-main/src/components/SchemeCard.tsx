import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle, AlertTriangle, XCircle, ExternalLink, Trash2, Eye } from 'lucide-react';

interface SchemeCardProps {
  id: string;
  title: string;
  description: string;
  benefit: string;
  category: string;
  eligibilityStatus: 'eligible' | 'partially-eligible' | 'not-eligible';
  eligibilityReasons: string[];
  imageUrl: string;
  onDelete?: (id: string) => void;
  showDelete?: boolean;
}

export const SchemeCard: React.FC<SchemeCardProps> = ({
  id,
  title,
  description,
  benefit,
  category,
  eligibilityStatus,
  eligibilityReasons,
  imageUrl,
  onDelete,
  showDelete = false,
}) => {
  const { t } = useLanguage();

  const getEligibilityIcon = () => {
    switch (eligibilityStatus) {
      case 'eligible':
        return <CheckCircle className="h-4 w-4" />;
      case 'partially-eligible':
        return <AlertTriangle className="h-4 w-4" />;
      case 'not-eligible':
        return <XCircle className="h-4 w-4" />;
    }
  };

  const getEligibilityVariant = () => {
    switch (eligibilityStatus) {
      case 'eligible':
        return 'eligible';
      case 'partially-eligible':
        return 'warning';
      case 'not-eligible':
        return 'not-eligible';
    }
  };

  const getEligibilityLabel = () => {
    switch (eligibilityStatus) {
      case 'eligible':
        return t('scheme.eligible');
      case 'partially-eligible':
        return t('scheme.partially');
      case 'not-eligible':
        return t('scheme.not_eligible');
    }
  };

  return (
    <Card className="group hover:shadow-scheme transition-[var(--transition-smooth)] transform hover:scale-[1.02] bg-gradient-subtle">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="text-xs">
                {category}
              </Badge>
              <Badge 
                variant={getEligibilityVariant() as any}
                className="text-xs flex items-center gap-1"
              >
                {getEligibilityIcon()}
                {getEligibilityLabel()}
              </Badge>
            </div>
            <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
          </div>
          <div className="w-16 h-16 rounded-lg overflow-hidden shadow-card">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-4">
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {description}
        </p>
        
        <div className="mb-4">
          <p className="text-lg font-semibold text-secondary">
            {benefit}
          </p>
        </div>

        {eligibilityReasons.length > 0 && (
          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground">Eligibility:</p>
            {eligibilityReasons.slice(0, 2).map((reason, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-1 h-1 rounded-full bg-current" />
                {reason}
              </div>
            ))}
            {eligibilityReasons.length > 2 && (
              <p className="text-xs text-muted-foreground">
                +{eligibilityReasons.length - 2} more requirements
              </p>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-0 gap-4 flex-wrap">
        <div className="flex flex-col gap-4 w-full">
          {/* First Row - Apply and Check Eligibility */}
          <div className="grid grid-cols-2 gap-3">
            <Button 
              size="default" 
              className={`h-12 text-base font-medium px-4 border-0 transition-all duration-200 hover:scale-105 ${
                eligibilityStatus === 'eligible' 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-gray-400 text-gray-600 cursor-not-allowed'
              }`}
              variant="default"
              disabled={eligibilityStatus === 'not-eligible'}
            >
              {t('scheme.apply')}
            </Button>
            <Button 
              size="default" 
              className="h-12 text-base font-medium px-4 bg-black text-white hover:bg-black/90 transition-all duration-200 hover:scale-105"
            >
              <Eye className="h-4 w-4 mr-2" />
              {t('scheme.check_eligibility')}
            </Button>
          </div>
          
          {/* Second Row - Learn More */}
          <Button 
            size="default" 
            variant="outline" 
            className="w-full h-12 text-base font-medium px-4 bg-white text-gray-800 border-gray-300 hover:bg-gray-50 transition-all duration-200 hover:scale-105"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            {t('scheme.learn_more')}
          </Button>
        </div>
        
        {showDelete && onDelete && (
          <Button 
            size="default" 
            variant="destructive" 
            onClick={() => onDelete(id)}
            className="w-full mt-2 h-12 text-base font-medium px-4 transition-all duration-200 hover:scale-105"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            {t('scheme.delete')}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};