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
  }
  
  export const pricingPackages: PricingPackage[] = [
    {
      id: 'basic',
      title: 'Essential',
      price: '₹30,000',
      description: 'Perfect for smaller events with core services included',
      features: [
        'Event consultation and planning',
        'Basic venue setup',
        'Standard decorations',
        'Event coordination (4 hours)',
        'Basic photography',
        'Assistance with vendor selection'
      ]
    },
    {
      id: 'standard',
      title: 'Premium',
      price: '₹75,000',
      description: 'Our most popular package for medium-sized events',
      features: [
        'Comprehensive event planning',
        'Complete venue setup and styling',
        'Custom themed decorations',
        'Full-day event management',
        'Professional photography',
        'Catering arrangement and management',
        'Guest list management',
        'Transportation coordination'
      ],
      popular: true
    },
    {
      id: 'premium',
      title: 'Luxury',
      price: '₹1,50,000',
      description: 'All-inclusive package for elaborate events',
      features: [
        'End-to-end event planning and design',
        'Luxury venue selection and setup',
        'Premium decorations with floral arrangements',
        'Full weekend event management',
        'Photography and videography',
        'Gourmet catering with custom menu',
        'VIP guest management',
        'Luxury transportation arrangements',
        'Entertainment and performance booking',
        'Custom event website and digital invitations'
      ]
    },
    {
      id: 'custom',
      title: 'Bespoke',
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