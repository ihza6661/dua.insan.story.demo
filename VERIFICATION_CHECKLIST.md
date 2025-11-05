# ✅ Theme Verification Checklist

Use this checklist to verify your new theme is working correctly across all aspects.

---

## 🎯 Color Variables Verification

### Light Mode Colors
- [ ] **Background**: Should be soft warm cream (#FBF7F4)
  - Check: Body background looks peachy/cream, not white or blue
  
- [ ] **Text**: Should be warm dark brown (#3E2920)
  - Check: Text is readable and warm-toned, not cold/blue
  
- [ ] **Primary Button**: Should be deep warm brown (#36231B)
  - Check: Buttons look sophisticated brown, not black
  
- [ ] **Accent**: Should be warm gold (#C49B6A)
  - Check: Any gold elements look like actual gold, not yellow
  
- [ ] **Cards**: Should be slightly more golden than background
  - Check: Card backgrounds are subtly warmer than body

### Dark Mode Colors
- [ ] **Background**: Should be deep slate gray (#232E3A)
  - Check: Background is dark gray with slight blue tone, not purple
  
- [ ] **Text**: Should be near white (#F2F2F2)
  - Check: Text is clean white/nearly white, high contrast
  
- [ ] **Primary Button**: Should be charcoal gray (#384755)
  - Check: Buttons are sophisticated gray, modern minimalist
  
- [ ] **Accent**: Should be rose gold (#D17060)
  - Check: Rose gold pops against slate gray beautifully
  
- [ ] **Cards**: Should be slightly lighter than background
  - Check: Cards have depth and visual separation

---

## 🔄 Theme Switching

- [ ] **Dark Mode Toggle Works**
  - Action: Toggle dark mode on/off multiple times
  - Expected: Colors switch smoothly, no flashing
  - Check: All colors change appropriately

- [ ] **Persistence** (if implemented)
  - Action: Toggle to dark mode, refresh page
  - Expected: Stays in dark mode (or remembers preference)

- [ ] **System Preference** (if implemented)
  - Action: Check system dark mode setting
  - Expected: App respects system preference on first load

---

## 🖱️ Interactive States

### Button Interactions

- [ ] **Hover State Visible**
  - Action: Hover over any primary button
  - Expected: Color noticeably changes to lighter gray
  - Light Mode: #36231B → #4B2F24
  - Dark Mode: #384755 → #485F76

- [ ] **Active/Pressed State**
  - Action: Click and hold on button
  - Expected: Color changes to darker (pressed appearance)
  - Light Mode: #36231B → #2B1B15
  - Dark Mode: #384755 → #2C3A48

- [ ] **Smooth Transition**
  - Action: Hover over button slowly
  - Expected: Color change is smooth (not instant)
  - Duration: ~200ms transition

- [ ] **Disabled State**
  - Action: Find or create a disabled button
  - Expected: Button is muted (light gray/brown)
  - Should be: Unclickable and visually obvious

### Link Interactions

- [ ] **Link Color Correct**
  - Expected: Links are primary color (#36231B light / #384755 dark)

- [ ] **Link Hover**
  - Action: Hover over a link
  - Expected: Color changes to hover variant

---

## ⌨️ Keyboard Accessibility

- [ ] **Tab Navigation Works**
  - Action: Press Tab key repeatedly
  - Expected: Focus moves through all interactive elements

- [ ] **Focus Ring Visible**
  - Action: Tab to a button
  - Expected: Clear ring appears around button
  - Light Mode: Warm brown ring
  - Dark Mode: Rose gold ring

- [ ] **Focus Ring Color Consistent**
  - Expected: Focus rings match theme (not default browser blue)

- [ ] **Focus State Obvious**
  - Expected: Focus ring is clearly visible, high contrast

---

## 🔤 Typography Colors

- [ ] **Headings (h1, h2, h3)**
  - Expected: Dark/readable color on background
  - Light Mode: Warm brown text on cream
  - Dark Mode: Warm ivory text on mauve

- [ ] **Body Text**
  - Expected: Same color as headings for consistency

- [ ] **Muted Text**
  - Expected: Lighter/grayer version of text color
  - Still readable but less prominent

- [ ] **Links**
  - Expected: Primary color, underline or distinct styling

---

## 📱 Responsive Design

- [ ] **Mobile (375px width)**
  - Action: Test on mobile device or dev tools
  - Expected: Colors accurate, readable on small screen

- [ ] **Tablet (768px width)**
  - Action: Test on tablet size
  - Expected: Colors consistent across sizes

- [ ] **Desktop (1024px+)**
  - Action: Test on large screens
  - Expected: Colors maintain integrity at any size

---

## 🎨 Component Verification

### Cards
- [ ] **Card Background**: Visible but subtle difference from body
- [ ] **Card Border**: Present and visible but not harsh
- [ ] **Card Shadow**: Subtle (not too deep)
- [ ] **Card Hover**: Optional elevation effect smooth

### Inputs & Forms
- [ ] **Input Background**: hsl(40 30% 94%) light / hsl(270 12% 22%) dark
- [ ] **Input Border**: Visible but subtle
- [ ] **Input Text**: Readable color
- [ ] **Input Placeholder**: Muted but visible
- [ ] **Input Focus**: Ring appears, clearly visible

### Buttons
- [ ] **Primary Button**: Brown in light / Mauve in dark
- [ ] **Accent Button**: Gold in both modes
- [ ] **Button Hover**: State change obvious
- [ ] **Button Active**: Pressed appearance clear
- [ ] **Button Disabled**: Muted appearance

### Navigation (Sidebar/Header)
- [ ] **Sidebar Background**: Light/warm in light mode
- [ ] **Sidebar Background**: Lighter mauve in dark mode
- [ ] **Sidebar Text**: Readable on sidebar
- [ ] **Active Navigation**: Gold or highlighted accent

---

## 📊 Contrast & Readability

### Light Mode Contrast Checks
- [ ] **Text on Background**: Easily readable (12.5:1+ ratio)
  - Use: https://webaim.org/resources/contrastchecker/
  
- [ ] **White Button Text on Primary**: Readable (15:1+ ratio)

- [ ] **Gold on Cream**: Readable (4.8:1+ ratio)

### Dark Mode Contrast Checks
- [ ] **Text on Background**: Easily readable (12:1+ ratio)

- [ ] **White Button Text on Primary**: Readable (7:1+ ratio)

- [ ] **Gold on Dark Background**: Readable (8.3:1+ ratio)

---

## 🌓 Light/Dark Mode Edge Cases

- [ ] **All Buttons Work in Both Modes**
  - Check: Primary, secondary, accent, disabled in both modes

- [ ] **All Text Readable in Both Modes**
  - Check: Body, heading, muted text readable everywhere

- [ ] **All Borders Visible in Both Modes**
  - Check: Card borders, input borders, dividers all visible

- [ ] **All Inputs Usable in Both Modes**
  - Check: Forms functional and readable in both modes

- [ ] **No White Text on White**
  - Check: No contrast issues anywhere

- [ ] **No Black Text on Black**
  - Check: No contrast issues anywhere

---

## 🎯 Specific Element Tests

### Test Each Component Type

**Buttons:**
- [ ] Primary button (dark brown/mauve)
- [ ] Accent button (gold)
- [ ] Secondary button
- [ ] Disabled button

**Cards:**
- [ ] Product card
- [ ] Form card
- [ ] Content card
- [ ] Hover state

**Forms:**
- [ ] Text input
- [ ] Email input
- [ ] Textarea
- [ ] Select dropdown
- [ ] Checkbox
- [ ] Radio button

**Navigation:**
- [ ] Header/navbar
- [ ] Sidebar (if present)
- [ ] Breadcrumbs
- [ ] Pagination

**Feedback:**
- [ ] Toast notifications
- [ ] Modal/dialog
- [ ] Alert boxes
- [ ] Error states

---

## 🔍 Visual Inspection

- [ ] **Warmth Consistent**: All colors have warm undertones
  - No cold grays (should be warm-grays)
  - No pure blacks (should be warm-browns)
  - No pure whites (should be warm-creams)

- [ ] **Gold Used Intentionally**: Not overdone
  - Accents/highlights/calls-to-action
  - Premium feel without overwhelming

- [ ] **Mauve in Dark Mode**: Not too blue or purple
  - Should be sophisticated mauve
  - Not harsh or cold

- [ ] **Ivory Text in Dark Mode**: Warm, not harsh
  - Should reduce eye strain
  - Not pure white

---

## 🚀 Performance Check

- [ ] **No Layout Shift**: Colors don't cause reflow
- [ ] **No Flashing**: Theme switches smoothly
- [ ] **CSS Variables Load**: No color fallbacks
- [ ] **Transitions Smooth**: No jerky animations

---

## 📋 Browser Compatibility

- [ ] **Chrome/Edge**: All colors correct
- [ ] **Firefox**: All colors correct
- [ ] **Safari**: All colors correct
- [ ] **Mobile Safari**: All colors correct
- [ ] **Mobile Chrome**: All colors correct

---

## ✨ Optional Enhancements

- [ ] **Texture Applied** (if added)
  - Linen / Paper Grain / Watercolor visible?

- [ ] **Component Examples Used**
  - Any `ThemeExamples.tsx` components working?

- [ ] **Utility Classes Applied**
  - Any `theme-enhancements.css` utilities working?

---

## 🐛 Known Issues Checklist

### Issues to Look For

- [ ] **No color shift on theme toggle** → CSS variables not loading
  - Solution: Hard refresh (Ctrl+Shift+R)

- [ ] **Buttons not showing hover state** → Missing hover variants
  - Solution: Use `hover:bg-primary-hover` not `hover:opacity-80`

- [ ] **Text not readable** → Contrast issue
  - Solution: Check contrast ratio at webaim.org

- [ ] **Focus ring not visible** → Not using ring color
  - Solution: Add `focus:ring-2 focus:ring-ring`

- [ ] **Gold looks yellow** → Wrong saturation
  - Solution: Verify `--accent: 35 45% 58%` in CSS

---

## 📝 Testing Scenarios

### Scenario 1: New User
- [ ] Opens site in light mode
- [ ] Sees warm cream background ✓
- [ ] Reads brown text easily ✓
- [ ] Clicks primary button ✓
- [ ] Sees button hover state ✓

### Scenario 2: Dark Mode User
- [ ] Toggles to dark mode ✓
- [ ] Sees deep mauve background ✓
- [ ] Reads warm ivory text ✓
- [ ] Finds gold accent clear ✓
- [ ] Text doesn't strain eyes ✓

### Scenario 3: Mobile User
- [ ] Opens on phone ✓
- [ ] Colors accurate on small screen ✓
- [ ] Buttons easy to tap ✓
- [ ] Text readable ✓
- [ ] Theme works on mobile ✓

### Scenario 4: Keyboard User
- [ ] Tabs through page ✓
- [ ] Focus ring always visible ✓
- [ ] Can navigate all elements ✓
- [ ] Focus ring color matches theme ✓

---

## 🏁 Final Verification

### Before Launching

- [ ] All colors match BEFORE_AFTER.md
- [ ] No harsh color transitions
- [ ] Accessibility meets WCAG AA
- [ ] Works on all browsers tested
- [ ] Mobile/tablet/desktop all good
- [ ] Dark mode works perfectly
- [ ] Button states all functional
- [ ] No contrast issues anywhere
- [ ] User feedback positive (if tested)

### Sign Off

- [ ] Project Lead: Verified ___________
- [ ] Date: ___________
- [ ] Notes: _________________________________

---

## 🎉 Success Criteria

Your theme is **complete** when:

✅ Colors match design specifications  
✅ All interactive states working  
✅ Accessibility standards met  
✅ Works across all browsers  
✅ Responsive on all device sizes  
✅ Dark mode functioning  
✅ No visual issues or glitches  
✅ Team feedback positive  

---

**Use this checklist throughout development to ensure quality.**

For detailed info: See `THEME_GUIDE.md`, `COLOR_REFERENCE.md`, `BEFORE_AFTER.md`
