import type { NavLink, Service, Testimonial, BlogPost, FaqItem } from './types'
import { Github, Twitter, Linkedin } from 'lucide-react'

export const SITE_CONFIG = {
  name: 'PeterSmart Link',
  url: 'https://petersmartlink.com',
  description:
    'Your trusted tech partner in Uganda, offering electronics, software services, web development, and more.',
  tagline: 'Smart Tech Solutions for Everyday Needs',
  founder: {
    name: 'Peter Katabira',
    dob: '2005-05-05',
  },
  business: {
    founded: '2023-05-05',
  },
} as const

export const CONTACT_INFO = {
  email: 'support@petersmartlink.com',
  phone: '+256 756 306 040',
  whatsapp: '+256775912582',
  get whatsappLink() {
    return `https://wa.me/${this.whatsapp}`
  },
  address: 'Mbirizi Town Council, Lwengo District, Uganda',
} as const

export const NAV_LINKS: NavLink[] = [
  { href: '/', title: 'Home' },
  { href: '/about', title: 'About' },
  { href: '/services', title: 'Services' },
  { href: '/blog', title: 'Blog' },
  { href: '/contact', title: 'Contact' },
]

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: '#', icon: Github },
  { name: 'Twitter', url: '#', icon: Twitter },
  { name: 'LinkedIn', url: '#', icon: Linkedin },
] as const

export const services: Service[] = [
  {
    title: 'Computer Services',
    description:
      'Expert Windows installation, system repairs, performance optimization, and general maintenance to keep your PC running smoothly.',
    icon: 'Laptop',
  },
  {
    title: 'Website Development',
    description:
      'Modern, mobile-friendly websites for businesses and individuals. From simple portfolios to complex e-commerce solutions.',
    icon: 'Code2',
  },
  {
    title: 'App Development',
    description:
      'Custom mobile app development for Android and iOS. We bring your ideas to life with intuitive and powerful applications.',
    icon: 'Smartphone',
  },
  {
    title: 'Electronics & Accessories',
    description:
      'Sales of quality electronics and a wide range of accessories including chargers, cables, headphones, and more.',
    icon: 'Headphones',
  },
  {
    title: 'Media Center',
    description:
      'Your hub for entertainment. Get the latest movies, music, and videos for your enjoyment.',
    icon: 'Film',
  },
  {
    title: 'Digital Library',
    description:
      'Access a vast collection of digital books, educational materials, and resources for learning and research.',
    icon: 'Book',
  },
  {
    title: 'Software Updates',
    description:
      'Keep your devices secure and up-to-date. We provide software updates and installation services for various applications.',
    icon: 'Download',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'PeterSmart Link delivered a fantastic website for my business. The process was smooth and professional. Highly recommended!',
    author: 'John Doe',
    role: 'Local Business Owner',
  },
  {
    quote:
      'My computer was running slow, but after their service, it feels brand new. Fast and reliable service!',
    author: 'Jane Smith',
    role: 'Student',
  },
  {
    quote:
      'I always get my phone accessories from them. Great quality and fair prices. The staff is very helpful.',
    author: 'David Mulumba',
    role: 'Regular Customer',
  },
]

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-install-windows-11',
    title: 'A Beginner’s Guide to Installing Windows 11',
    description:
      'Step-by-step tutorial on how to perform a clean installation of Windows 11 on your computer, from creating a bootable USB to the final setup.',
    category: 'Tutorials',
    date: '2024-07-20',
    image: 'blog-windows-install',
    content: `
## Introduction
Installing a new operating system can seem daunting, but with this guide, you'll find installing Windows 11 is a straightforward process. This post will walk you through each step.

## Prerequisites
- A USB drive with at least 8GB of space.
- A valid Windows 11 license.
- A PC that meets Windows 11 system requirements.

## Step 1: Create a Bootable USB Drive
First, download the Windows 11 Media Creation Tool from the official Microsoft website. Run the tool and follow the on-screen instructions to create a bootable USB drive.

## Step 2: Boot from the USB Drive
Insert the USB drive into the computer where you want to install Windows. Restart the computer and enter the BIOS/UEFI settings (usually by pressing F2, F12, DEL, or ESC during startup). Change the boot order to prioritize the USB drive.

## Step 3: Install Windows
Your computer will now boot from the USB drive, and the Windows installer will start. Select your language, time, and keyboard preferences, and then click "Install Now". Enter your product key when prompted, or select "I don't have a product key" if you plan to activate it later.

## Step 4: Final Setup
Follow the remaining on-screen instructions to complete the installation. This includes selecting the drive to install Windows on and setting up your user account. Once finished, your computer will restart into your new Windows 11 desktop.
`,
  },
  {
    slug: 'best-smartphones-in-uganda',
    title: 'Top 5 Budget Smartphones in Uganda for 2024',
    description:
      'Looking for a new phone without breaking the bank? Here’s our roundup of the best budget-friendly smartphones available in Uganda right now.',
    category: 'Tech Tips',
    date: '2024-07-15',
    image: 'blog-best-smartphones',
    content: `
## Introduction
The smartphone market in Uganda is booming, with options available for every budget. In this post, we focus on the best devices that offer great value for money.

## 1. Tecno Spark Series
Tecno has a strong presence in Uganda, and its Spark series offers large screens, long-lasting batteries, and decent cameras at an affordable price point.

## 2. Infinix Hot Series
Similar to Tecno, Infinix provides feature-packed phones for less. The Hot series is known for its stylish designs and impressive performance for its price.

## 3. Samsung Galaxy A-Series (Lower End)
While Samsung is known for its premium phones, the lower-end models of the Galaxy A-series offer the reliability and quality of the Samsung brand at a more accessible price.

## 4. Itel P-Series
For those on a very tight budget, Itel's P-series is a great choice. These phones are famous for their massive batteries, ensuring you stay connected all day.

## 5. Nokia C-Series
Nokia offers a clean Android experience with guaranteed software updates. The C-series phones are durable and provide a smooth, user-friendly interface.
`,
  },
  {
    slug: 'why-every-business-needs-a-website',
    title: 'Why Every Ugandan Business Needs a Website in 2024',
    description:
      'In today’s digital age, a website is no longer a luxury but a necessity. Discover why having an online presence is crucial for the success of your business.',
    category: 'Business Updates',
    date: '2024-07-10',
    image: 'blog-business-website',
    content: `
## Introduction
As the world becomes more connected, having a digital storefront is as important as a physical one. Here are key reasons why your Ugandan business needs a website.

## 1. Increase Credibility
A professional website instantly increases your credibility as a legitimate business. It's the first place potential customers will go to check you out.

## 2. Reach a Wider Audience
A website allows you to break geographical barriers and reach customers beyond your immediate location, both within Uganda and internationally.

## 3. It's Always Open
Your website works for you 24/7, 365 days a year. It can provide information, answer questions, and even generate sales while you're asleep.

## 4. Showcase Your Products and Services
A website is the perfect platform to showcase what you offer in detail. You can use high-quality images, detailed descriptions, and even video demonstrations.

## 5. Cost-Effective Marketing
Compared to traditional marketing methods like print or radio, a website is a highly cost-effective way to promote your business and reach thousands of potential customers.

## Conclusion
Investing in a website is one of the best decisions you can make for your business. It's a powerful tool for growth, marketing, and building a strong brand. Contact PeterSmart Link today to get started!
`,
  },
]

export const faqs: FaqItem[] = [
  {
    question: 'What are your business hours?',
    answer: 'We are open from Monday to Saturday, 9:00 AM to 6:00 PM. We are closed on Sundays and public holidays.',
  },
  {
    question: 'Do you offer a warranty on your services?',
    answer: 'Yes, we offer a 30-day warranty on all our repair services. For website and app development, we provide a 3-month period of support to fix any bugs or issues that may arise after launch.',
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'A standard business website typically takes 2-4 weeks from start to finish, depending on the complexity and the content provided. E-commerce or custom projects may take longer.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept mobile money (MTN, Airtel), bank transfers, and cash payments at our office.',
  },
  {
    question: 'Can you help me get a domain name and hosting?',
    answer: 'Absolutely! We can manage the entire process for you, from registering the perfect domain name to setting up reliable hosting for your new website.',
  },
]
