export const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom, scalable web solutions with cutting-edge technologies and modern frameworks.',
    iconName: 'Code2',
    color: 'from-violet-600 to-purple-600',
  },
  {
    id: 2,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that engage and delight users.',
    iconName: 'Smartphone',
    color: 'from-fuchsia-600 to-pink-600',
    delay: 0.1,
  },
  {
    id: 3,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and seamless deployment optimization.',
    iconName: 'Cloud',
    color: 'from-cyan-500 to-blue-600',
    delay: 0.2,
  },
  {
    id: 4,
    title: 'AI Integration',
    description: 'Machine learning and AI-powered intelligent automation systems.',
    iconName: 'Zap',
    color: 'from-amber-500 to-orange-600',
    delay: 0.3,
  },
  {
    id: 5,
    title: 'Security',
    description: 'Enterprise-grade security, compliance, and data protection solutions.',
    iconName: 'Shield',
    color: 'from-emerald-500 to-teal-600',
    delay: 0.4,
  },
  {
    id: 6,
    title: 'Analytics',
    description: 'Data-driven insights, performance metrics, and business intelligence.',
    iconName: 'BarChart3',
    color: 'from-indigo-500 to-violet-600',
    delay: 0.5,
  },
]

export const solutions = [
  {
    title: 'Enterprise Solutions',
    subtitle: 'Large-scale implementations',
    description: 'Robust solutions designed for enterprise organizations with complex requirements and global operations.',
    benefits: ['Scalable Architecture', 'Multi-tenant Support', 'Advanced Analytics', 'Enterprise Security'],
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    title: 'Startup Accelerator',
    subtitle: 'Growth-focused packages',
    description: 'Tailored services to help startups scale rapidly with cost-effective and flexible solutions.',
    benefits: ['Cost Optimization', 'Rapid Deployment', 'Flexible Scaling', 'Growth Mentoring'],
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    title: 'Digital Transformation',
    subtitle: 'Legacy to modern systems',
    description: 'Strategic modernization of legacy systems to unlock innovation and competitive advantages.',
    benefits: ['System Modernization', 'Process Automation', 'Data Migration', 'Staff Training'],
    gradient: 'from-teal-500 to-emerald-500',
  },
]

export const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A complete e-commerce solution with real-time inventory management and AI-powered recommendations.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=600&q=80',
    color: 'from-violet-600 to-indigo-600',
    size: 'large',
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    title: 'FinTech Dashboard',
    category: 'UI/UX Design',
    description: 'Comprehensive financial analytics dashboard with real-time data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    color: 'from-cyan-500 to-blue-600',
    size: 'small',
    tech: ['D3.js', 'TypeScript'],
  },
  {
    id: 3,
    title: 'Healthcare App',
    category: 'Mobile Development',
    description: 'Patient management system with telemedicine integration.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&q=80',
    color: 'from-emerald-500 to-teal-600',
    size: 'small',
    tech: ['React Native', 'Firebase'],
  },
  {
    id: 4,
    title: 'AI Content Generator',
    category: 'Machine Learning',
    description: 'Advanced AI tool for generating marketing content, blog posts, and social media updates.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
    color: 'from-purple-600 to-pink-600',
    size: 'medium',
    tech: ['Python', 'OpenAI', 'FastAPI'],
  },
  {
    id: 5,
    title: 'Smart Home IoT',
    category: 'IoT Solutions',
    description: 'Complete smart home ecosystem with voice control and automation.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80',
    color: 'from-orange-500 to-red-500',
    size: 'medium',
    tech: ['Arduino', 'AWS IoT', 'Python'],
  },
  {
    id: 6,
    title: 'Blockchain Platform',
    category: 'Web3',
    description: 'Decentralized marketplace for digital assets and NFTs.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80',
    color: 'from-amber-500 to-orange-600',
    size: 'large',
    tech: ['Solidity', 'Ethers.js', 'IPFS'],
  },
]

export const portfolioCategories = ['All', 'Web Development', 'UI/UX Design', 'Mobile Development', 'Machine Learning', 'IoT Solutions', 'Web3']

export const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechVision Inc',
    content: 'NEPTUNES TECH transformed our entire digital infrastructure. Their solutions are not just innovative but incredibly reliable. The team went above and beyond our expectations.',
    rating: 5,
    image: 'SJ',
    color: 'from-violet-500 to-purple-600',
  },
  {
    name: 'Michael Chen',
    role: 'CTO, Digital Innovators',
    content: 'The best technology partner we could ask for. Their expertise and commitment to excellence is unmatched in the industry. They delivered everything on time and under budget.',
    rating: 5,
    image: 'MC',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, NextGen Solutions',
    content: 'Working with NEPTUNES TECH was a game-changer for our startup. They helped us scale from zero to hero in just months. Absolutely incredible team!',
    rating: 5,
    image: 'ER',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'David Thompson',
    role: 'VP Operations, Enterprise Co',
    content: 'Outstanding service, outstanding results. NEPTUNES TECH delivered exactly what we needed and more. They truly understand the enterprise landscape.',
    rating: 5,
    image: 'DT',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Lisa Wang',
    role: 'Product Director, InnovateTech',
    content: 'The attention to detail and creative problem-solving skills of the NEPTUNES TECH team are remarkable. They transformed our complex requirements into elegant solutions.',
    rating: 5,
    image: 'LW',
    color: 'from-pink-500 to-rose-600',
  },
  {
    name: 'James Miller',
    role: 'Managing Director, FutureCorp',
    content: "From concept to deployment, NEPTUNES TECH was with us every step of the way. Their proactive communication and technical prowess set them apart from the competition.",
    rating: 5,
    image: 'JM',
    color: 'from-indigo-500 to-violet-600',
  },
]

export const aboutFeatures = [
  {
    iconName: 'Zap',
    title: 'Lightning Fast',
    description: 'Optimized performance that keeps your business moving at digital speed',
    color: 'from-amber-500 to-orange-600',
  },
  {
    iconName: 'Shield',
    title: 'Enterprise Security',
    description: 'Bank-grade security protocols protecting your valuable data assets',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    iconName: 'Users',
    title: 'Expert Team',
    description: '150+ skilled professionals with diverse industry expertise',
    color: 'from-violet-500 to-purple-600',
  },
  {
    iconName: 'Award',
    title: 'Award Winning',
    description: 'Recognized excellence in digital transformation and innovation',
    color: 'from-cyan-500 to-blue-600',
  },
]

export const aboutStats = [
  { value: '500+', label: 'Projects Delivered', suffix: '' },
  { value: '98', label: 'Client Satisfaction', suffix: '%' },
  { value: '150', label: 'Team Members', suffix: '+' },
  { value: '10', label: 'Years Experience', suffix: '+' },
]

export const ctaStats = [
  { value: '500+', label: 'Active Clients' },
  { value: '1000+', label: 'Projects Delivered' },
  { value: '99.9%', label: 'Uptime SLA' },
]

export const footerLinks = {
  Product: [
    { label: 'Features', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'Documentation', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
  Resources: [
    { label: 'Help Center', href: '#' },
    { label: 'API Docs', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'Status', href: '#' },
  ],
  Legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Cookies', href: '#' },
    { label: 'Compliance', href: '#' },
  ],
}

export const socialLinks = [
  { iconName: 'Github', href: '#', label: 'GitHub' },
  { iconName: 'Linkedin', href: '#', label: 'LinkedIn' },
  { iconName: 'Twitter', href: '#', label: 'Twitter' },
  { iconName: 'Mail', href: '#', label: 'Email' },
]

export const companyInfo = {
  name: 'NEPTUNES TECH',
  tagline: 'Building tomorrow\'s technology solutions today. Innovative, reliable, scalable.',
  email: 'hello@neptunestech.com',
  phone: '+1 (555) 123-4567',
}
