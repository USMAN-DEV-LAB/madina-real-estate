# Madina Real Estate Marketing — Home Page

React JS + Tailwind CSS (Vite) me bana hua homepage. Theme ilaaqa.com jaisa,
content "Madina Real Estate Marketing" (Sale / Purchase / Rent / Renovation —
Garden West, Fowara Chowk) ke liye customize kiya gaya hai.

## 1. Apne Computer Par Chalana (Local)

Zaroorat: [Node.js](https://nodejs.org) installed ho (v18 ya newer).

```bash
# 1) is folder ke andar jayein
cd madina-real-estate

# 2) packages install karein (sirf pehli baar)
npm install

# 3) dev server start karein
npm run dev
```

Terminal me jo `http://localhost:5173` jaisa link aayega usay browser me
kholein — home page live dikh jayega. Koi bhi file save karenge to browser
khud-ba-khud update ho jayega.

## 2. Files Kahan Edit Karni Hain

- `src/components/Hero.jsx` → headline, hero text, hero background image
- `src/components/Services.jsx` → Sale/Purchase/Rent/Renovation cards
- `src/components/PopularAreas.jsx` → Garden West, Fowara Chowk area cards
- `src/components/FeaturedProperties.jsx` → property listings (price, images)
- `src/components/ContactFooter.jsx` → phone number, address, contact form
- `tailwind.config.js` → colors (`madina` green, `gold` accent)

Abhi images Unsplash (free stock photos) se lagi hain — jab apki real property
photos ready hon to bas `img:` wali line me apni image ka URL ya
`/images/xyz.jpg` path daal dein.

## 3. GitHub Par Upload Karna

```bash
git init
git add .
git commit -m "Madina Real Estate homepage"
```

Phir GitHub par naya repository banayein aur usay push kar dein
(GitHub website par "Create repository" → wahan diye gaye commands copy karein).

## 4. Vercel Par FREE Deploy Karna

1. [vercel.com](https://vercel.com) par jayein aur **GitHub account se sign up**
   karein (free hai).
2. Dashboard me **"Add New Project"** par click karein.
3. Apna GitHub repo (jo abhi upload kiya) select karein → **Import**.
4. Vercel khud detect kar lega ke ye **Vite** project hai — settings change
   karne ki zaroorat nahi (Build Command: `npm run build`, Output: `dist`).
5. **Deploy** button dabayein — 1-2 minute me apka live link mil jayega
   (kuch is tarah: `madina-real-estate.vercel.app`).

Agar GitHub use nahi karna to seedha **Vercel CLI** se bhi deploy ho sakta hai:

```bash
npm install -g vercel
vercel login
vercel        # project folder ke andar se chalayein
vercel --prod # final live link ke liye
```

Har baar jab GitHub par naya code push karenge, Vercel khud-ba-khud
site ko update kar dega (auto-deploy) — dubara kuch karne ki zaroorat nahi.
