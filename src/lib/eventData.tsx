interface Event {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  imageSrc: string;
  imageAlt: string;
}

export const events: Event[] = [
  {
    id: 'ashtyam-puja',
    title: 'Ashtyam Puja',
    category: 'Religious',
    description: 'Traditional Ashtyam Puja ceremony with complete arrangements and rituals performed by experienced priests.',
    fullDescription: `
      The Ashtyam Puja is a significant religious ceremony that marks important milestones in life. Our comprehensive service includes:

      - Arrangement of all necessary puja items and materials
      - Coordination with experienced and knowledgeable priests
      - Traditional decoration of the puja area
      - Arrangement of seating for family members and guests
      - Assistance with all rituals and ceremonies
      - Complete setup and cleanup services
      - Catering options for prasad and meals

      We ensure that all traditions are followed with precision while making the experience comfortable for you and your guests. Our team handles all logistics so you can focus entirely on the spiritual significance of the ceremony.
    `,
    imageSrc: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=1400&auto=format&fit=crop',
    imageAlt: 'Traditional puja ceremony with decorated altar and offerings'
  },
  {
    id: 'parthi-puja',
    title: 'Parthi Puja',
    category: 'Religious',
    description: 'Authentic Parthi Puja ceremony arrangements for auspicious occasions and celebrations in your society.',
    fullDescription: `
      Our Parthi Puja event service brings this sacred ceremony to your society with complete authenticity. Our offerings include:

      - Consultation with religious experts to ensure proper protocol
      - Arrangement of all ceremonial items and materials
      - Setting up of the sacred space according to tradition
      - Coordination with experienced priests
      - Beautiful traditional decorations
      - Arrangement for community participation
      - Sound system for mantras and bhajans
      - Post-ceremony cleanup and arrangement

      We specialize in organizing community religious events that bring people together for spiritual purposes. Our team ensures that every aspect of the ceremony is handled with respect for tradition while providing a seamless experience for all participants.
    `,
    imageSrc: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?q=80&w=1400&auto=format&fit=crop',
    imageAlt: 'Sacred space with traditional decorations for religious ceremony'
  },
  {
    id: 'wedding',
    title: 'Wedding Ceremonies',
    category: 'Wedding',
    description: 'Comprehensive wedding planning services that handle everything from venue selection to the final send-off.',
    fullDescription: `
      Your perfect wedding day deserves nothing less than perfect planning. Our full-service wedding packages include:

      - Pre-wedding consultation and personalized planning
      - Venue selection and booking assistance
      - Theme development and styling
      - Vendor coordination (catering, photography, music, etc.)
      - Custom decor and floral arrangements
      - Wedding day timeline creation and management
      - Rehearsal dinner planning
      - Day-of coordination and management
      - Guest experience enhancement
      - Transportation arrangements
      - Wedding emergency kit and support

      From intimate gatherings to grand celebrations, we handle every detail with precision and care, allowing you to fully enjoy your special day without stress or worry. Our experienced team works closely with you to bring your wedding vision to life.
    `,
    imageSrc: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Elegantly decorated wedding venue with floral arrangements'
  },
  {
    id: 'birthday',
    title: 'Birthday Celebrations',
    category: 'Birthday',
    description: 'Memorable birthday parties for all ages with custom themes, entertainment, and complete event management.',
    fullDescription: `
      Celebrate another trip around the sun with our complete birthday party planning services for all ages. We offer:

      - Custom theme development and design
      - Venue selection and setup
      - Personalized decorations and props
      - Entertainment booking (musicians, DJs, performers)
      - Custom cake and dessert arrangements
      - Activity planning and coordination
      - Photography and videography
      - Invitation design and management
      - Party favors and gifts
      - Setup and cleanup services

      Whether it's a child's themed party, a milestone birthday, or an elegant adult celebration, our team creates personalized experiences that reflect the guest of honor's personality and preferences. We handle all logistics so you can focus on making memories.
    `,
    imageSrc: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Colorful birthday celebration with decorations and cake'
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    category: 'Corporate',
    description: 'Professional corporate event planning for conferences, team-building activities, and company celebrations.',
    fullDescription: `
      Elevate your business events with our professional corporate event management services. Our offerings include:

      - Strategic event planning and concept development
      - Venue selection and negotiation
      - Registration and attendee management
      - Technical production and AV coordination
      - Speaker and talent management
      - Catering and menu planning
      - Brand integration and promotional materials
      - Team-building activities
      - Transportation and accommodation arrangements
      - Event day management and coordination
      - Post-event reporting and analysis

      From small team gatherings to large conferences, we handle all aspects of corporate events with professionalism and attention to detail. Our goal is to create meaningful experiences that achieve your business objectives while impressing attendees.
    `,
    imageSrc: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Professional corporate event setting with staged area'
  },
  {
    id: 'social-gatherings',
    title: 'Social Gatherings',
    category: 'Social',
    description: 'Elegant social events for reunions, anniversaries, and special occasions with personalized touches.',
    fullDescription: `
      Make your social gatherings truly special with our comprehensive event planning services. We specialize in:

      - Theme development and styling
      - Venue selection and preparation
      - Customized decor and ambiance creation
      - Catering and beverage service
      - Entertainment and music coordination
      - Photography and memory capturing
      - Guest list management and invitations
      - Timeline creation and event flow
      - Transportation arrangements
      - Complete setup and cleanup

      Whether you're planning a family reunion, anniversary celebration, retirement party, or any special occasion, our team creates warm, inviting environments where connections thrive and memories are made. We pay attention to the small details that make your gathering unique and memorable.
    `,
    imageSrc: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Elegant social gathering with people enjoying themselves'
  }
];

export interface PricingPackage {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  eventType?: string;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: 'religious-basic',
    title: 'Puja Essentials',
    price: '₹15,000',
    description: 'Basic puja arrangement for small gatherings',
    features: [
      'Puja setup and coordination',
      'Essential decorations',
      'Priest arrangement',
      'Basic sound system',
      'Assistance with ceremonies'
    ],
    eventType: 'Religious'
  },
  {
    id: 'religious-standard',
    title: 'Complete Puja Package',
    price: '₹35,000',
    description: 'Comprehensive puja services for medium gatherings',
    features: [
      'Complete puja setup and coordination',
      'Traditional decorations',
      'Experienced priest arrangement',
      'Audio system with bhajans',
      'Prasad distribution',
      'Photography service',
      'Guest coordination'
    ],
    popular: true,
    eventType: 'Religious'
  },
  {
    id: 'religious-premium',
    title: 'Grand Ceremony',
    price: '₹75,000',
    description: 'Elaborate ceremonial arrangement for large gatherings',
    features: [
      'Premium puja setup with mandap',
      'Elaborate traditional decorations',
      'Multiple priest coordination',
      'Professional sound system',
      'Live devotional music',
      'Catering arrangements',
      'Photography and videography',
      'Guest management services',
      'Live streaming of ceremony'
    ],
    eventType: 'Religious'
  },
  
  {
    id: 'wedding-basic',
    title: 'Wedding Essentials',
    price: '₹1,00,000',
    description: 'Core wedding services for intimate ceremonies',
    features: [
      'Venue coordination',
      'Basic decoration package',
      'Day-of coordination (8 hours)',
      'Ceremony planning assistance',
      'Vendor recommendations',
      'Timeline creation'
    ],
    eventType: 'Wedding'
  },
  {
    id: 'wedding-standard',
    title: 'Signature Wedding',
    price: '₹2,50,000',
    description: 'Comprehensive wedding package for mid-sized celebrations',
    features: [
      'Complete venue styling',
      'Custom decoration package',
      'Full weekend coordination',
      'Catering management',
      'Photography coordination',
      'Guest accommodation assistance',
      'Transportation arrangement',
      'RSVP management'
    ],
    popular: true,
    eventType: 'Wedding'
  },
  {
    id: 'wedding-premium',
    title: 'Luxury Wedding',
    price: '₹5,00,000',
    description: 'All-inclusive wedding experience for grand celebrations',
    features: [
      'Premium venue selection',
      'Luxury decor and styling',
      'Full event design',
      'Multiple event coordination',
      'Custom catering menu',
      'Premium photography and videography',
      'Entertainment booking',
      'Complete guest management',
      'Honeymoon planning assistance',
      'Post-wedding services'
    ],
    eventType: 'Wedding'
  },
  
  {
    id: 'birthday-basic',
    title: 'Birthday Basics',
    price: '₹20,000',
    description: 'Essential birthday party elements for small gatherings',
    features: [
      'Venue setup and decoration',
      'Basic themed decorations',
      'Cake arrangement',
      'Party coordination (4 hours)',
      'Basic photography',
      'Party favors'
    ],
    eventType: 'Birthday'
  },
  {
    id: 'birthday-standard',
    title: 'Fun Birthday Package',
    price: '₹45,000',
    description: 'Complete birthday experience with entertainment',
    features: [
      'Custom theme design',
      'Elaborate decorations',
      'Custom cake and desserts',
      'Entertainment (games/performer)',
      'Photography service',
      'Food and beverage coordination',
      'Guest management',
      'Return gifts coordination'
    ],
    popular: true,
    eventType: 'Birthday'
  },
  {
    id: 'birthday-premium',
    title: 'Ultimate Birthday',
    price: '₹90,000',
    description: 'Luxury birthday celebration with premium services',
    features: [
      'Premium venue arrangement',
      'Custom theme with premium decor',
      'Gourmet catering',
      'Multiple entertainment options',
      'Professional photography/videography',
      'Custom invitations',
      'VIP guest management',
      'Personalized mementos',
      'Special effects and lighting'
    ],
    eventType: 'Birthday'
  },
  
  {
    id: 'corporate-basic',
    title: 'Business Essentials',
    price: '₹75,000',
    description: 'Basic corporate event services for meetings and seminars',
    features: [
      'Venue selection assistance',
      'Basic setup and coordination',
      'AV equipment arrangement',
      'Registration management',
      'Basic catering coordination',
      'Event timeline management'
    ],
    eventType: 'Corporate'
  },
  {
    id: 'corporate-standard',
    title: 'Professional Package',
    price: '₹1,50,000',
    description: 'Comprehensive corporate event management',
    features: [
      'Complete venue management',
      'Professional setup and branding',
      'Full technical production',
      'Catering management',
      'Speaker coordination',
      'Attendee management system',
      'Event materials preparation',
      'Post-event reporting'
    ],
    popular: true,
    eventType: 'Corporate'
  },
  {
    id: 'corporate-premium',
    title: 'Executive Corporate',
    price: '₹3,00,000',
    description: 'Premium corporate experience for high-profile events',
    features: [
      'Premium venue selection',
      'Complete event design',
      'Advanced technical production',
      'VIP speaker management',
      'Luxury catering services',
      'Accommodation arrangements',
      'Transportation coordination',
      'Comprehensive event analytics',
      'Media coverage coordination',
      'Post-event engagement strategy'
    ],
    eventType: 'Corporate'
  },
  
  {
    id: 'social-basic',
    title: 'Social Gathering Basics',
    price: '₹25,000',
    description: 'Essential services for small social gatherings',
    features: [
      'Venue setup and coordination',
      'Basic decorations',
      'Food and beverage coordination',
      'Basic entertainment',
      'Event day management (4 hours)',
      'Guest list management'
    ],
    eventType: 'Social'
  },
  {
    id: 'social-standard',
    title: 'Premium Social Package',
    price: '₹60,000',
    description: 'Complete social event management for medium gatherings',
    features: [
      'Venue selection and management',
      'Custom theme and decorations',
      'Catering management',
      'Entertainment coordination',
      'Photography service',
      'Invitation management',
      'Full event coordination (8 hours)',
      'Transportation assistance'
    ],
    popular: true,
    eventType: 'Social'
  },
  {
    id: 'social-premium',
    title: 'Luxury Social Event',
    price: '₹1,25,000',
    description: 'High-end social gathering with premium services',
    features: [
      'Exclusive venue arrangement',
      'Luxury decor and styling',
      'Gourmet catering package',
      'Premium entertainment options',
      'Professional photography/videography',
      'VIP guest services',
      'Custom event website',
      'Transportation and valet',
      'Full weekend coordination',
      'Post-event services'
    ],
    eventType: 'Social'
  },
  
  {
    id: 'custom',
    title: 'Bespoke Package',
    price: 'Custom',
    description: 'Fully customized services tailored to your specific needs',
    features: [
      'Completely personalized planning',
      'Customized services based on requirements',
      'Flexible budget options',
      'Specialized event themes',
      'Access to exclusive venues and vendors',
      'Premium add-on options available',
      'Multiple event coordination'
    ]
  }
];
