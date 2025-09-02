# GRAMSEVA Manager System

## સિસ્ટમ ઓવરવ્યુ

આ system માં બે types ના pages છે:

1. **Public Pages** - જ્યાં citizens schemes જોઈ શકે છે
2. **Manager Pages** - જ્યાં authorized personnel schemes manage કરી શકે છે

## 🔐 Manager Login

### Credentials:
- **Username**: `Nisarg`
- **Password**: `123`

### Access:
- **URL**: `/manager/login`
- **Features**: Secure authentication, session management

## 📊 Manager Dashboard

### URL: `/manager/dashboard`

### Features:
✅ **Add New Schemes** - Create new government schemes  
✅ **Edit Schemes** - Modify existing scheme details  
✅ **Delete Schemes** - Remove schemes from the system  
✅ **View All Schemes** - See complete scheme inventory  
✅ **Search & Filter** - Find specific schemes quickly  
✅ **Language Support** - English, Hindi, Gujarati  

### Security:
- Session-based authentication
- Automatic logout on page refresh
- Protected routes

## 🌐 Public Access

### URL: `/public-schemes`

### Features:
✅ **View Schemes** - Browse all available schemes  
✅ **Search & Filter** - Find schemes by category/keyword  
✅ **Language Switching** - Support for 3 languages  
❌ **No Add/Delete** - Read-only access for public  

### Navigation:
- Home page થી direct access
- Manager access button available
- Responsive design for all devices

## 🚀 How to Use

### For Managers:

1. **Login**: Go to `/manager/login`
2. **Enter Credentials**: Username: `Nisarg`, Password: `123`
3. **Access Dashboard**: Manage schemes, add new ones, delete old ones
4. **Logout**: Click logout button when done

### For Public Users:

1. **View Schemes**: Go to `/public-schemes`
2. **Browse**: See all available government schemes
3. **Search**: Use search and filter options
4. **Language**: Switch between English, Hindi, Gujarati

## 🔧 Technical Details

### File Structure:
```
src/
├── pages/
│   ├── ManagerLogin.tsx      # Manager authentication
│   ├── ManagerDashboard.tsx  # Scheme management
│   ├── PublicSchemes.tsx     # Public view
│   └── Schemes.tsx          # Original page (legacy)
├── components/
│   └── SchemeCard.tsx       # Scheme display component
└── contexts/
    └── LanguageContext.tsx   # Multi-language support
```

### Routes:
- `/` - Home page
- `/public-schemes` - Public schemes view
- `/manager/login` - Manager login
- `/manager/dashboard` - Manager dashboard
- `/schemes` - Legacy schemes page

### Authentication:
- Local storage based session
- Username/password validation
- Protected route guards

## 🎯 Key Benefits

1. **Role Separation** - Clear distinction between public and manager access
2. **Security** - Only authorized personnel can modify schemes
3. **User Experience** - Clean, intuitive interfaces for both user types
4. **Language Support** - Multi-language support maintained
5. **Responsive Design** - Works on all devices

## 🚨 Important Notes

- **Manager credentials are hardcoded** - In production, use proper authentication
- **Session expires on page refresh** - Implement proper session management
- **Schemes are stored in local state** - Use database for persistence
- **Public users cannot modify schemes** - This is by design for security

## 🔄 Future Enhancements

1. **Database Integration** - Store schemes in database
2. **User Management** - Multiple manager accounts
3. **Audit Logs** - Track scheme changes
4. **Advanced Permissions** - Role-based access control
5. **API Integration** - Connect with government systems

## 📱 Testing

### Test Manager Access:
1. Go to `/manager/login`
2. Enter: Username: `Nisarg`, Password: `123`
3. Verify access to dashboard
4. Test add/delete functionality

### Test Public Access:
1. Go to `/public-schemes`
2. Verify schemes are visible
3. Confirm no add/delete buttons
4. Test language switching

### Test Security:
1. Try accessing `/manager/dashboard` without login
2. Verify redirect to login page
3. Test logout functionality
