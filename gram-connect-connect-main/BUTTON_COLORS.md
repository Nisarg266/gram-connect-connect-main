# Scheme Card Button Colors

## 🎨 Button Color Scheme

બધા scheme cards માં buttons ની colors નીચે મુજબ fix કરી છે:

### 1. Apply Button (અરજી કરો)
- **Background**: Green (`bg-green-600`)
- **Hover**: Darker Green (`hover:bg-green-700`)
- **Text**: White (`text-white`)
- **Status**: 
  - ✅ Eligible: Green background
  - ❌ Not Eligible: Gray background (`bg-gray-400`)

### 2. Check Eligibility Button (પાત્રતા તપાસો)
- **Background**: Black (`bg-black`)
- **Hover**: Black with opacity (`hover:bg-black/90`)
- **Text**: White (`text-white`)
- **Icon**: Eye icon

### 3. Learn More Button (વધુ જાણો)
- **Background**: White (`bg-white`)
- **Hover**: Light Gray (`hover:bg-gray-50`)
- **Text**: Dark Gray (`text-gray-800`)
- **Border**: Gray (`border-gray-300`)
- **Icon**: External Link icon

### 4. Delete Button (કાઢી નાખો) - Manager Only
- **Background**: Red (destructive variant)
- **Text**: White
- **Icon**: Trash icon

## 🔧 Technical Implementation

### CSS Classes Used:
```css
/* Apply Button */
bg-green-600 hover:bg-green-700 text-white

/* Check Eligibility */
bg-black hover:bg-black/90 text-white

/* Learn More */
bg-white text-gray-800 border-gray-300 hover:bg-gray-50

/* Disabled Apply Button */
bg-gray-400 text-gray-600 cursor-not-allowed
```

### Dynamic Styling:
- Apply button color changes based on eligibility status
- Hover effects with smooth transitions
- Consistent button sizes (`h-12`)
- Proper spacing and padding

## 📱 Responsive Design

- **Mobile**: Buttons stack vertically
- **Desktop**: Apply and Check Eligibility side by side
- **All Devices**: Learn More button full width

## 🎯 Benefits

✅ **Visual Consistency** - All cards have same button colors  
✅ **User Experience** - Clear visual hierarchy  
✅ **Accessibility** - High contrast colors  
✅ **Professional Look** - Government scheme appropriate styling  

## 🧪 Testing

### Test Button Colors:
1. Go to any scheme page (`/public-schemes`, `/manager/dashboard`)
2. Verify Apply button is green
3. Verify Check Eligibility button is black
4. Verify Learn More button is white
5. Test hover effects on all buttons

### Test Eligibility States:
1. Check eligible schemes - Apply button should be green
2. Check not-eligible schemes - Apply button should be gray
3. Verify disabled state styling
