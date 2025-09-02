import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Home, 
  FileText, 
  MessageSquare, 
  User, 
  Menu,
  Wifi,
  WifiOff,
  Bell
} from 'lucide-react';

interface NavigationProps {
  userRole?: 'citizen' | 'officer' | 'admin';
  isOnline?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  userRole = 'citizen',
  isOnline = true 
}) => {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { key: 'home', icon: Home, label: t('nav.home'), href: '/' },
    { key: 'schemes', icon: FileText, label: t('nav.schemes'), href: '/schemes' },
    { key: 'applications', icon: FileText, label: t('nav.applications'), href: '/applications' },
    { key: 'grievances', icon: MessageSquare, label: t('nav.grievances'), href: '/grievances' },
    { key: 'profile', icon: User, label: t('nav.profile'), href: '/profile' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
            <span className="text-lg font-bold text-primary-foreground">GS</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">GRAMSEVA</h1>
            <p className="text-xs text-muted-foreground">Digital India Initiative</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return (
              <Button
                key={item.key}
                variant={isActive ? "default" : "ghost"}
                size="sm"
                className="h-9 px-3"
                asChild
              >
                <Link to={item.href}>
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </Button>
            );
          })}
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Offline Indicator */}
          <div className="hidden sm:flex items-center">
            {isOnline ? (
              <Badge variant="outline" className="border-eligible text-eligible">
                <Wifi className="h-3 w-3 mr-1" />
                Online
              </Badge>
            ) : (
              <Badge variant="outline" className="border-warning text-warning">
                <WifiOff className="h-3 w-3 mr-1" />
                Offline
              </Badge>
            )}
          </div>

          {/* Language Selector */}
          <Select value={language} onValueChange={(value: 'en' | 'hi' | 'gu') => setLanguage(value)}>
            <SelectTrigger className="w-35 h-9">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">ENGLISH</SelectItem>
              <SelectItem value="hi">हिन्दी</SelectItem>
              <SelectItem value="gu">ગુજરાતી</SelectItem>
            </SelectContent>
          </Select>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Bell className="h-4 w-4" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 text-xs bg-accent">
              3
            </Badge>
          </Button>

          {/* User Avatar */}
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                U
              </AvatarFallback>
            </Avatar>
            <div className="hidden sm:block">
              <p className="text-sm font-medium">User Name</p>
              <Badge variant="outline" className="text-xs">{userRole}</Badge>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-9 w-9"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4">
            <div className="grid grid-cols-2 gap-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Button
                    key={item.key}
                    variant={isActive ? "default" : "ghost"}
                    className="justify-start h-12"
                    asChild
                  >
                    <Link to={item.href}>
                      <Icon className="h-4 w-4 mr-3" />
                      {item.label}
                    </Link>
                  </Button>
                );
              })}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};