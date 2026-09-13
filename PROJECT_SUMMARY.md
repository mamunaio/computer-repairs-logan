# CCTV Carindale — Project Migration & Development Summary

**Project:** CCTV Installation Landing Page Migration (Monolithic HTML to Modular Astro)  
**Location:** `e:\cctv-carindale-main`  
**Target Repository:** `https://github.com/rob82aus/cctv-carindale.git`  
**Current Git Commit:** `96f485d` (`main` branch)  
**Status:** Build Passed (0 Errors), Dev Server Active on Port `4321`

---

## ১. প্রজেক্টের পটভূমি ও মূল লক্ষ্য (Background & Objective)
পূর্বে পুরো ওয়েবসাইটটি `robert/index.html` ফাইলে একটি একক (monolithic) দীর্ঘ HTML ফাইল হিসেবে ছিল। মূল লক্ষ্য ছিল:
1. পুরো ওয়েবসাইটটিকে একটি আধুনিক, স্কেলেবল ও কম্পোনেন্ট-ভিত্তিক **Astro** প্রজেক্টে রূপান্তর করা।
2. সকল Tailwind CSS স্টাইল, রেসপনসিভনেস, SVG আইকন এবং জাভাস্ক্রিপ্ট ইন্টারঅ্যাক্টিভিটি ১০০% অক্ষুণ্ণ রাখা।
3. প্রজেক্টটিকে ১৪টি স্বতন্ত্র কম্পোনেন্ট, ১টি মূল লেআউট এবং ১টি ইনডেক্স পেইজে ভাগ করা।

---

## ২. বর্তমান ফাইল আর্কিটেকচার (File Architecture)

```text
e:\cctv-carindale-main\
├── public/                     # সকল স্ট্যাটিক ইমেজ ও এসেটস
│   ├── cctv-blueprint-plan.jpg # ফ্লোরপ্ল্যান প্রুফ ইমেজ
│   ├── cctv-ch1-day.jpg        # ক্যামেরা ফিড ১ (Day 4K HDR)
│   ├── cctv-ch1-night.jpg      # ক্যামেরা ফিড ১ (ColorVu Night)
│   ├── cctv-ch2-porch.jpg      # ক্যামেরা ফিড ২ (Porch Parcel)
│   ├── cctv-ch3-side.jpg       # ক্যামেরা ফিড ৩ (Side Fence)
│   ├── cctv-ch4-patio.jpg      # ক্যামেরা ফিড ৪ (Rear Patio)
│   ├── cctv-tidy-rack.jpg      # র‍্যাক ক্যাবলিং প্রুফ ইমেজ
│   ├── robots.txt              # এসইও ক্রলার কনফিগারেশন
│   └── zoologo.png             # অফিশিয়াল ব্র্যান্ড লোগো
├── src/
│   ├── components/             # ১৪টি মডুলার কম্পোনেন্ট
│   │   ├── Header.astro        # নেভিগেশন বার, থিম টগল, ও কল বাটন
│   │   ├── Hero.astro          # হিরো সেকশন + লাইভ ক্যামেরা OSD প্রিভিউয়ার
│   │   ├── TrustBadges.astro   # লাইসেন্স ও সিকিউরিটি ট্রাস্ট ব্যাজ
│   │   ├── ServicesGrid.astro  # ৬টি সার্ভিস কার্ড (রেসিডেন্ট, কমার্শিয়াল ইত্যাদি)
│   │   ├── Inclusions.astro    # স্ট্যান্ডার্ড ইনস্টলেশন ফিচার ও গ্যারান্টি
│   │   ├── SystemComparison.astro # ৩ স্তরের সিস্টেম তুলনা (Good/Better/Best)
│   │   ├── PricingPackages.astro  # ৩টি প্রাইসিং প্যাকেজ (BYO, 4-Cam, 8-Cam)
│   │   ├── ProcessSteps.astro  # ৪ ধাপের ইনস্টলেশন প্রক্রিয়া
│   │   ├── LocalCaseStudy.astro # কারিন্ডেল কেস স্টাডি ও ক্যামেরা লেআউট প্রুফ
│   │   ├── Reviews.astro       # ভেরিফাইড গুগল কাস্টমার রিভিউ
│   │   ├── SuburbGrid.astro    # সাবআর্ব ফিল্টার ও সার্চ পিলস
│   │   ├── Faq.astro           # ১২টি এফএকিউ একর্ডিয়ন (স্মুথ এনিমেশনযুক্ত)
│   │   ├── QuoteForm.astro     # প্রি-ফিল্ড ইনস্ট্যান্ট কোট ফর্ম
│   │   └── Footer.astro        # ফুটার লিংক, এসিএমএ লাইসেন্স ও কপিরাইট
│   ├── layouts/
│   │   └── Layout.astro        # গ্লোবাল মেটা, Tailwind CDN, ফন্টস, থিম স্ক্রিপ্ট,
│   │                           # ক্যামেরা সুইচার এবং গ্লোবাল CSS/JS লজিক
│   └── pages/
│       └── index.astro         # মূল সিঙ্গেল পেইজ রাউট (সবগুলো কম্পোনেন্ট এসেম্বল্ড)
├── astro.config.mjs            # এস্ট্রো সাইটম্যাপ কনফিগারেশন
├── package.json                # ডিপেন্ডেন্সি ও বিল্ড স্ক্রিপ্ট
└── .gitignore                  # node_modules, dist, .astro ও robert ইগনোর
```

---

## ৩. সমাধানকৃত সমস্যা ও উন্নয়নসমূহ (Key Issues Fixed)

### ক. ফন্ট সাইজ ও টাইপোগ্রাফি উন্নয়ন (Client Request 1)
- পূর্বে বডি টেক্সট এবং কার্ডের লেখাগুলো খুব ছোট (১১-১২ পিক্সেল / `text-xs`) ছিল।
- ক্লায়েন্টের নির্দেশনায় সব বডি কপি, কার্ড, ফর্ম লেবেল এবং একর্ডিয়নের টেক্সট আধুনিক স্ট্যান্ডার্ড ১৪-১৬ পিক্সেল (`text-sm sm:text-base`) এ উন্নীত করা হয়েছে।

### খ. লেআউট ও অ্যালাইনমেন্ট ফিক্স (Client Request 2)
1. **SystemComparison.astro:** লেবেলে `shrink-0` এবং অপ্রয়োজনীয় ফ্লেক্সের কারণে টেক্সট অপ্রশস্ত কলামে সংকুচিত হয়ে ভেঙে যাচ্ছিল। ফ্লেক্স ফরম্যাটিং ঠিক করে টেক্সটকে স্বাভাবিক ফুল-উইডথ প্যারাগ্রাফ ব্লকে রূপান্তর করা হয়েছে।
2. **PricingPackages.astro:** চেকমার্কের পর `<strong>` ট্যাগ এবং পরবর্তী টেক্সট নোড দুটি আলাদা ফ্লেক্স কলামে ভাগ হয়ে যাচ্ছিল। এগুলোকে একটি সমন্বিত `<span>` ট্যাগে আবদ্ধ করে `items-start gap-2.5` দিয়ে সারিবদ্ধ করা হয়েছে।
3. **ServicesGrid.astro:** চেকমার্কের সাথে টেক্সটের অ্যালাইনমেন্ট ঠিক করা হয়েছে।

### গ. FAQ সেকশনের ইন্টারঅ্যাক্টিভিটি ও এনিমেশন (Client Request 3)
1. **অটো-ক্লোজ লজিক (Single Open Accordion):** পূর্বে একটি FAQ ওপেন করার পর অন্যটিতে ক্লিক করলে আগেরটি খোলা থাকত। এখন যেকোনো FAQ-তে ক্লিক করলে পূর্বের খোলা সব FAQ স্বয়ংক্রিয়ভাবে ক্লোজ হয়ে যাবে।
2. **স্মুথ সিএসএস গ্রিড এনিমেশন:** পূর্বে শুধু `hidden` ক্লাস দিয়ে ইনস্ট্যান্ট পপ করত। এখন আধুনিক CSS Grid টেকনিক (`grid-template-rows: 0fr -> 1fr` উইথ `300ms cubic-bezier`) যোগ করা হয়েছে, ফলে ড্রপডাউনটি একদম স্মুথভাবে স্লাইড হয়।
3. **আইকন ডিজাইন:** প্লাস (`+`) ও মাইনাস (`−`) কে একটি প্রিমিয়াম সার্কুলার ব্যাজ ডিজাইনে রূপান্তর করা হয়েছে।

### ঘ. FAQ নিচের লাইন ম্যাচ না হওয়ার সমাধান (Client Request 4)
- **সমস্যা:** ডান কলামের ৪ নম্বর প্রশ্নটি (*"What warranty applies to equipment and workmanship?"*) লম্বা হওয়ায় ২ লাইনে ভেঙে গিয়েছিল। ফলে ডান কলামের উচ্চতা বেড়ে গিয়ে নিচের অংশ অসমান হয়ে পড়েছিল।
- **সমাধান:** 
  - কন্টেইনার উইডথ `max-w-6xl` করা হয়েছে এবং টাইটেল ফন্ট `text-sm sm:text-base font-bold` করায় এটি ডেস্কটপে ১ লাইনেই সুন্দরভাবে ফিট হয়েছে।
  - প্রতিটি বাটনে `min-h-[44px] sm:min-h-[48px]` মিনিমাম হাইট দেওয়া হয়েছে, যার ফলে ছোট স্ক্রিন বা ট্যাবলেটেও উভয় পাশের কার্ডের উচ্চতা একদম সমান থাকে এবং নিচের তলা (bottom border) পিক্সেল-টু-পিক্সেল ম্যাচ করে।

---

## ৪. এরর চেকিং ও বর্তমান স্ট্যাটাস (Verification & Status)

- **বিল্ড টেস্ট:** `npm run build` সফলভাবে এক্সিকিউট হয়েছে (**০ টি এরর**)।
- **স্ট্যাটিক রাউট জেনারেশন:** `dist/index.html` এবং `dist/sitemap-index.xml` সঠিকভাবে জেনারেট হচ্ছে।
- **লোকাল গিট স্ট্যাটাস:** সকল ফাইল `main` ব্রাঞ্চে ক্লিনভাবে কমিট করা হয়েছে (Commit: `96f485d`).
- **রিমোট কনফিগারেশন:** `origin https://github.com/rob82aus/cctv-carindale.git` সেট করা আছে।

---

## ৫. বাসায় গিয়ে পরবর্তী কাজ ও গিটহাব পুশ গাইড (Next Steps & GitHub Push)

### গিটহাবে পুশ করার ধাপ:
গিটহাবে পুশ করার সময় `remote: Repository not found` এররটি এসেছে। এর মানে:
- `rob82aus` অ্যাকাউন্টে `cctv-carindale` নামের রিপোজিটরিটি এখনও তৈরি করা হয়নি, অথবা
- রিপোজিটরিটি Private হওয়ায় আপনার বর্তমান টার্মিনালে পুশ পারমিশন/টোকেন দেওয়া নেই।

#### সমাধান ধাপসমূহ:
1. **GitHub-এ রিপোজিটরি তৈরি করুন:**
   - ব্রাউজারে [github.com/new](https://github.com/new)-এ যান।
   - Repository name দিন: `cctv-carindale`
   - Public অথবা Private সিলেক্ট করুন।
   - **গুরুত্বপূর্ণ:** "Add a README file", ".gitignore" বা "license" কোনো টিকচিহ্ন দেবেন না (খালি রিপোজিটরি তৈরি করবেন)।
   - **Create repository** বাটনে ক্লিক করুন।

2. **টার্মিনাল থেকে পুশ করুন:**
   টার্মিনাল বা কমান্ড প্রম্পটে প্রজেক্ট ফোল্ডারে গিয়ে রান করুন:
   ```bash
   git push -u origin main
   ```
   *যদি লগইন বা টোকেন চায়, আপনার GitHub Personal Access Token (PAT) ইনপুট দিলেই কোড পুশ হয়ে যাবে।*

---

## ৬. লোকাল মেশিনে প্রজেক্ট রান করার নিয়ম (How to Run Locally)

1. **প্রজেক্ট ফোল্ডারে টার্মিনাল ওপেন করুন:**
   ```bash
   cd e:\cctv-carindale-main
   ```
2. **ডেভ সার্ভার চালু করতে:**
   ```bash
   npm run dev
   ```
   এরপর ব্রাউজারে ওপেন করুন: `http://localhost:4321`

3. **প্রোডাকশন বিল্ড টেস্ট করতে:**
   ```bash
   npm run build
   ```

4. **বিল্ড প্রিভিউ দেখতে:**
   ```bash
   npm run preview
   ```
