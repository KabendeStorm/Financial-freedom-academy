# Financial Freedom Academy Website

A professional financial coaching website based on biblical principles from Ellen G. White's teachings.

## 🚀 Quick Start

### Option 1: Deploy to GitHub Pages (FREE - Recommended)

1. **Create a new GitHub repository**
   - Go to github.com and create a new repository
   - Name it: `financial-freedom-academy`
   - Make it public

2. **Upload your files**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Financial Freedom Academy website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/financial-freedom-academy.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main, folder: / (root)
   - Click Save

4. **Your site will be live at:**
   `https://YOUR-USERNAME.github.io/financial-freedom-academy/`

5. **Add a custom domain (Optional - ~N$150/year)**
   - Buy domain from Namecheap, GoDaddy, or Namibian registrar
   - In GitHub repo settings → Pages → Custom domain
   - Add your domain (e.g., financialfreedom.com.na)
   - Update DNS settings at your domain registrar

### Option 2: Deploy to Netlify (FREE)

1. Push code to GitHub (see above)
2. Go to netlify.com
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Click "Deploy site"
6. Your site will be live at: `your-site-name.netlify.app`

## 📝 Customization Guide

### 1. Replace Placeholder Information

**Update these in `index.html`:**

- [ ] Your actual phone number (Line 276, 345, 346, 355, 562)
- [ ] Your actual email address (Line 350, 562)
- [ ] Your Discord server invite link (Line 355, 558)
- [ ] Workshop schedule (Line 125)
- [ ] Stats in hero section (Lines 48-58) - update when you have real numbers
- [ ] Add your actual photo (Line 226) - replace the placeholder

**Update contact form:**
- [ ] Sign up for Formspree.io (free)
- [ ] Replace `YOUR_FORM_ID` on Line 361 with your Formspree form ID

### 2. Create Your Free Resources

You need to create these downloadable files:

1. **Budget Template** (`budget-template.xlsx`)
   - Create a simple Excel budget template
   - Include: Income, Expenses (categorized), Savings, Debt payments
   - Add formulas for totals and balance

2. **EGW Principles Guide** (`egw-principles.pdf`)
   - You already have the PowerPoint presentation!
   - Export it to PDF
   - Rename to `egw-principles.pdf`

3. **Debt Elimination Worksheet** (`debt-worksheet.pdf`)
   - Create a simple PDF with:
     - List all debts with balances and interest rates
     - Debt snowball method explanation
     - Payment priority calculator

4. **7-Day Challenge** (`7day-challenge.pdf`)
   - Day 1: Track every expense
   - Day 2: Calculate net worth
   - Day 3: List all debts
   - Day 4: Create categories for budget
   - Day 5: Set one financial goal
   - Day 6: Calculate tithe and offering
   - Day 7: Review and commit to plan

Place all these files in the same folder as `index.html`.

### 3. Add Real Testimonials

**IMPORTANT:** Only add testimonials after you have real clients and their written permission.

In `index.html`, lines 230-280, replace the example testimonials with real ones:

```html
<div class="testimonial-card">
    <div class="testimonial-header">
        <div class="testimonial-photo">JD</div>
        <div>
            <h4>John D.</h4>
            <p class="testimonial-location">Windhoek, Namibia</p>
        </div>
    </div>
    <div class="testimonial-text">
        <p>"[Their actual quote about their experience]"</p>
    </div>
    <div class="testimonial-result">
        <strong>Result:</strong> [Their actual result]
    </div>
</div>
```

### 4. Update Colors (Optional)

In `styles.css`, lines 11-18, you can change the color scheme:

```css
--primary-color: #2C5F2D;        /* Main brand color */
--primary-light: #97BC62;         /* Lighter accent */
--accent-color: #D4A574;          /* Gold highlights */
```

Use a tool like coolors.co to generate a new palette if desired.

### 5. Add Your Photo

1. Take a professional photo (or use a good quality selfie)
2. Save it as `isaack-photo.jpg` in the same folder
3. The website will automatically display it

## 📱 Mobile Responsive

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Smartphones

Test it on your phone after deployment!

## 🔧 Technical Details

**Files included:**
- `index.html` - Main website structure
- `styles.css` - All styling and design
- `script.js` - Interactive features
- `README.md` - This file

**Features:**
- Smooth scrolling navigation
- Animated elements on scroll
- Mobile-friendly design
- Contact form integration ready
- SEO-optimized structure
- Fast loading

## 💰 Costs

**Free Option (GitHub Pages):**
- Hosting: FREE forever
- SSL Certificate: FREE (automatic)
- Subdomain: FREE (username.github.io)
- **Total: N$0**

**With Custom Domain:**
- Domain (.com.na or .com): ~N$150-300/year
- Everything else: FREE
- **Total: ~N$150-300/year**

## 📊 Next Steps

1. [ ] Deploy to GitHub Pages
2. [ ] Update all placeholder text with your info
3. [ ] Create the 4 free resource PDFs
4. [ ] Set up Formspree for contact form
5. [ ] Add your photo
6. [ ] Test on mobile device
7. [ ] Share the link on WhatsApp/Facebook
8. [ ] Run your first free workshop
9. [ ] Collect testimonials (with permission)
10. [ ] Update site with real testimonials

## 🎯 Marketing Your Site

Once live, share it on:

1. **WhatsApp Status**
   - Post the link with a compelling message
   - Update weekly with tips

2. **Facebook Groups**
   - Namibian Christian groups
   - Teacher groups
   - Financial literacy groups
   - Ruacana community groups

3. **Church Bulletin**
   - Ask to include in church announcements
   - Offer free workshop to church members

4. **School**
   - Share with colleagues
   - Offer staff workshop

5. **Business Cards**
   - Print simple cards with:
     - Your name
     - "Biblical Financial Coach"
     - Website URL
     - WhatsApp number

## ❓ Need Help?

Common issues:

**Site not showing up on GitHub Pages:**
- Wait 5-10 minutes after enabling
- Check that files are in root directory
- Make sure repository is public

**Contact form not working:**
- Set up Formspree account
- Replace form action with your Formspree URL

**Images not loading:**
- Make sure image files are in the same folder
- Check file names match exactly (case-sensitive)

## 📞 Support

If you run into issues, you can:
1. Ask me (Claude) for help
2. Check GitHub Pages documentation
3. Use YouTube tutorials for "GitHub Pages deployment"

## 🙏 Biblical Foundation

"The blessing of the Lord makes rich, and He adds no sorrow with it." - Proverbs 10:22

This website is built on biblical principles to help others achieve financial freedom while honoring God.

---

**Built with:** HTML, CSS, JavaScript
**Hosted on:** GitHub Pages (free)
**License:** You own this completely - use it however you want!
