import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Clock, User, ArrowLeft, Facebook, Twitter, Linkedin, Share2 } from 'lucide-react';

// Blog data (in a real app, this would come from an API)
const blogArticles = [
  {
    id: 'wedding-budget-tips',
    title: 'How to Create a Wedding Budget That Works',
    excerpt: 'Planning a wedding but worried about costs? Learn practical tips for creating a realistic wedding budget that aligns with your priorities without sacrificing your dream day.',
    content: `
      <p>Planning a wedding is an exciting journey, but it often comes with financial stress. The key to a successful wedding budget is balancing your dreams with reality.</p>
      
      <h3>Start With the Big Picture</h3>
      <p>Before diving into spreadsheets and numbers, have an honest conversation about your priorities. What aspects of the wedding are most important to you both? Is it the venue, the food, the photography, or perhaps the honeymoon? Identifying your non-negotiables will help you allocate funds accordingly.</p>
      
      <h3>Determine Your Total Budget</h3>
      <p>Consider all sources of wedding funds, including your savings, contributions from family, and any amount you're comfortable putting on credit. Be realistic about what you can afford without starting your marriage in debt.</p>
      
      <h3>Break It Down</h3>
      <p>A typical wedding budget breakdown might look like this:</p>
      <ul>
        <li><strong>Venue and Catering:</strong> 45-50%</li>
        <li><strong>Photography and Videography:</strong> 10-12%</li>
        <li><strong>Attire and Beauty:</strong> 8-10%</li>
        <li><strong>Decor and Flowers:</strong> 8-10%</li>
        <li><strong>Music and Entertainment:</strong> 5-7%</li>
        <li><strong>Stationery:</strong> 2-3%</li>
        <li><strong>Wedding Rings:</strong> 2-3%</li>
        <li><strong>Transportation:</strong> 2-3%</li>
        <li><strong>Gifts and Favors:</strong> 2-3%</li>
        <li><strong>Miscellaneous and Contingency:</strong> 5-8%</li>
      </ul>
      
      <h3>Research Real Costs in Your Area</h3>
      <p>Costs vary significantly depending on your location, wedding season, and day of the week. Research venue prices, contact vendors for quotes, and adjust your budget accordingly.</p>
      
      <h3>Build in a Buffer</h3>
      <p>Always include a 5-10% buffer for unexpected expenses or last-minute additions. Wedding planning often involves surprises, and having this cushion will reduce stress.</p>
      
      <h3>Use Technology to Your Advantage</h3>
      <p>There are numerous wedding budget apps and tools available that can help you track expenses, manage payments, and stay organized throughout the planning process.</p>
      
      <h3>Consider Off-Peak Savings</h3>
      <p>If your budget is tight, consider an off-season wedding or a Friday/Sunday celebration. You can often save 20-30% compared to a Saturday in peak season.</p>
      
      <h3>Don't Forget Post-Wedding Expenses</h3>
      <p>Remember to budget for thank-you cards, photograph printing, and any gift returns or exchanges that might occur after the wedding.</p>
      
      <h3>Final Thoughts</h3>
      <p>A well-planned wedding budget is the foundation of a stress-free celebration. Be flexible, communicate openly about finances, and remember that the most meaningful aspects of your wedding day aren't always the most expensive.</p>
    `,
    date: 'June 15, 2023',
    readTime: '8 min read',
    author: 'Priya Sharma',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1400&auto=format&fit=crop',
    category: 'Wedding Planning',
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1400&auto=format&fit=crop',
    relatedPosts: ['corporate-event-trends', 'sustainable-event-planning']
  },
  {
    id: 'corporate-event-trends',
    title: 'Top Corporate Event Trends for 2023',
    excerpt: 'Discover the latest trends shaping corporate events this year, from hybrid experiences to sustainability practices and innovative tech integrations.',
    content: `
      <p>The corporate event landscape is constantly evolving, and staying ahead of trends is crucial for event planners and businesses alike. Here's our roundup of the top corporate event trends for 2023.</p>
      
      <h3>Hybrid Events Continue to Evolve</h3>
      <p>Hybrid events aren't just about streaming a physical event online anymore. They've evolved into sophisticated experiences that engage both in-person and virtual attendees in unique ways. Expect to see more customized virtual lobbies, networking rooms, and interactive elements that create a cohesive experience across both formats.</p>
      
      <h3>Sustainability Takes Center Stage</h3>
      <p>Corporate social responsibility is no longer optional. Events are increasingly focusing on sustainability through digital invitations, locally-sourced catering, reusable or biodegradable materials, and carbon offset programs. Showcasing these efforts has become part of the event narrative itself.</p>
      
      <h3>Micro-Events and Exclusive Experiences</h3>
      <p>Rather than hosting one large annual event, many companies are opting for a series of smaller, more exclusive gatherings. These micro-events allow for deeper connections, more personalized content, and often provide better ROI and data collection opportunities.</p>
      
      <h3>Technology Integration</h3>
      <p>From AR/VR experiences to AI-powered networking suggestions, technology is enhancing corporate events in unprecedented ways. Event apps now offer real-time polling, personalized agendas, and seamless integration with social media platforms.</p>
      
      <h3>Wellness Components</h3>
      <p>Corporate events are increasingly incorporating wellness elements such as morning yoga sessions, meditation breaks, healthy food options, and even dedicated wellness lounges where attendees can recharge.</p>
      
      <h3>Unconventional Venues</h3>
      <p>Traditional conference centers are giving way to unique, Instagram-worthy spaces that reflect company values and create memorable experiences. Think art galleries, rooftop gardens, historic buildings, or even outdoor adventure settings.</p>
      
      <h3>Data-Driven Personalization</h3>
      <p>Advanced data analytics are allowing event organizers to personalize experiences based on attendee preferences, past behavior, and professional interests. This might include recommended sessions, tailored networking opportunities, or customized follow-up content.</p>
      
      <h3>Interactive Entertainment</h3>
      <p>Passive entertainment is out; interactive experiences are in. Think collaborative art installations, team cooking challenges, escape rooms, or music creation stations that get attendees involved and create memorable shared experiences.</p>
      
      <h3>Final Thoughts</h3>
      <p>The most successful corporate events in 2023 will be those that combine these trends thoughtfully while staying true to their core objectives and brand identity. By embracing innovation while focusing on genuine human connection, companies can create impactful events that resonate long after they're over.</p>
    `,
    date: 'July 22, 2023',
    readTime: '6 min read',
    author: 'Amit Patel',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1400&auto=format&fit=crop',
    category: 'Corporate Events',
    image: 'https://images.unsplash.com/photo-1540317580384-e5d43867d8c2?q=80&w=1400&auto=format&fit=crop',
    relatedPosts: ['wedding-budget-tips', 'vendor-negotiation-tips']
  },
  {
    id: 'religious-ceremony-etiquette',
    title: 'Etiquette Guide for Religious Ceremonies',
    excerpt: 'Navigate traditional religious ceremonies with confidence. This comprehensive guide covers proper etiquette for various religious events in India.',
    content: `
      <p>Religious ceremonies play a significant role in Indian culture, marking important life transitions and celebrations. Understanding the etiquette for these events shows respect and helps you participate appropriately.</p>
      
      <h3>Hindu Ceremonies</h3>
      <p>When attending Hindu ceremonies such as pujas, weddings, or thread ceremonies, consider these etiquette guidelines:</p>
      <ul>
        <li><strong>Dress Code:</strong> Dress modestly and colorfully. Women often wear sarees or salwar kameez, while men wear kurta pajamas or formal Western attire. Avoid black and white, which are associated with mourning.</li>
        <li><strong>Footwear:</strong> Remove your shoes before entering temples or homes where ceremonies are conducted.</li>
        <li><strong>Greetings:</strong> Join your palms together in a "Namaste" gesture when greeting elders and priests.</li>
        <li><strong>Food:</strong> Accept prasad (blessed food) with your right hand. During meals, it's customary to wait for elders to begin eating first.</li>
        <li><strong>Temple Etiquette:</strong> Walk clockwise around shrines and sacred objects. Avoid touching idols—instead, touch the base and then your forehead as a sign of respect.</li>
      </ul>
      
      <h3>Sikh Ceremonies</h3>
      <p>For Sikh ceremonies at gurdwaras or during celebrations like Gurpurabs:</p>
      <ul>
        <li><strong>Head Covering:</strong> Both men and women should cover their heads when entering a gurdwara.</li>
        <li><strong>Seating:</strong> Sit on the floor cross-legged, never with your feet pointing toward the Guru Granth Sahib (the holy book).</li>
        <li><strong>Langar:</strong> Participate in the communal meal (langar) if offered. Everyone sits together regardless of status, symbolizing equality.</li>
        <li><strong>Respect:</strong> Stand when the Guru Granth Sahib is being carried or read.</li>
      </ul>
      
      <h3>Jain Ceremonies</h3>
      <p>Jain ceremonies emphasize non-violence and respect for all life forms:</p>
      <ul>
        <li><strong>Timing:</strong> Ceremonies often begin early in the morning, so punctuality is appreciated.</li>
        <li><strong>Dietary Awareness:</strong> Avoid bringing or consuming non-vegetarian food, eggs, or root vegetables.</li>
        <li><strong>Speaking:</strong> Maintain a soft voice and avoid unnecessary talking during rituals.</li>
      </ul>
      
      <h3>Buddhist Ceremonies</h3>
      <p>When attending Buddhist ceremonies:</p>
      <ul>
        <li><strong>Silence:</strong> Maintain quiet and meditative composure, especially during chanting or meditation.</li>
        <li><strong>Buddha Images:</strong> Never point your feet toward Buddha statues or images.</li>
        <li><strong>Monks:</strong> If monks are present, it's respectful to stand when they enter and to sit only after they are seated.</li>
      </ul>
      
      <h3>General Etiquette for All Religious Ceremonies</h3>
      <ul>
        <li><strong>Mobile Phones:</strong> Turn them off or set to silent mode.</li>
        <li><strong>Photography:</strong> Ask before taking photos, as some rituals may prohibit photography.</li>
        <li><strong>Gift Giving:</strong> If bringing gifts, traditional items like fruits, sweets, or envelopes with money are usually appropriate.</li>
        <li><strong>Children:</strong> Supervise children closely and explain the importance of respectful behavior beforehand.</li>
      </ul>
      
      <h3>Final Thoughts</h3>
      <p>When in doubt, observe others or politely ask for guidance. Most people appreciate genuine interest in their traditions and will happily explain proper etiquette. Remember that showing respect for the religious practices and traditions is the most important aspect of attending any ceremony.</p>
    `,
    date: 'August 10, 2023',
    readTime: '10 min read',
    author: 'Rahul Verma',
    authorImage: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1400&auto=format&fit=crop',
    category: 'Religious Events',
    image: 'https://images.unsplash.com/photo-1567591418663-97a36910f2c7?q=80&w=1400&auto=format&fit=crop',
    relatedPosts: ['birthday-party-themes', 'sustainable-event-planning']
  },
  {
    id: 'sustainable-event-planning',
    title: 'Sustainable Event Planning: Reducing Your Environmental Footprint',
    excerpt: 'Learn practical ways to make your next event more environmentally friendly, from choosing eco-conscious vendors to implementing waste reduction strategies.',
    content: `
      <p>In today's environmentally conscious world, sustainable event planning has moved from a nice-to-have to an essential consideration. Here's how to create memorable events while minimizing environmental impact.</p>
      
      <h3>Thoughtful Venue Selection</h3>
      <p>Choose venues with green certifications or demonstrated sustainability practices. Look for spaces that:</p>
      <ul>
        <li>Use renewable energy sources</li>
        <li>Have efficient HVAC systems</li>
        <li>Employ water conservation methods</li>
        <li>Are accessible by public transportation</li>
        <li>Have natural lighting to reduce electricity usage</li>
      </ul>
      <p>Consider outdoor venues when weather permits, reducing the need for artificial lighting and climate control.</p>
      
      <h3>Digital Over Paper</h3>
      <p>Embrace digital solutions throughout your event planning:</p>
      <ul>
        <li>Send electronic invitations and registration forms</li>
        <li>Create a custom event app instead of printed programs</li>
        <li>Use digital signage rather than printed banners</li>
        <li>Offer QR codes for information access</li>
        <li>Provide digital certificates and receipts</li>
      </ul>
      <p>If printing is necessary, use recycled paper with vegetable-based inks and print double-sided.</p>
      
      <h3>Sustainable Catering Practices</h3>
      <p>Food choices have significant environmental impacts:</p>
      <ul>
        <li>Source local, seasonal ingredients to reduce transportation emissions</li>
        <li>Offer plant-based options, which typically have lower carbon footprints</li>
        <li>Work with caterers who have sustainable practices</li>
        <li>Use reusable or compostable serving ware</li>
        <li>Arrange for excess food to be donated to local charities</li>
      </ul>
      <p>Consider serving smaller portions with refill options to minimize food waste.</p>
      
      <h3>Waste Management Planning</h3>
      <p>Develop a comprehensive waste management strategy:</p>
      <ul>
        <li>Set up clearly labeled recycling and composting stations</li>
        <li>Choose vendors with take-back programs for materials</li>
        <li>Avoid single-use plastics entirely</li>
        <li>Rent equipment instead of purchasing new items</li>
        <li>Create a post-event plan for leftover materials</li>
      </ul>
      <p>Consider hiring a sustainability coordinator who can oversee waste management during the event.</p>
      
      <h3>Eco-Friendly Decor</h3>
      <p>Rethink traditional decoration approaches:</p>
      <ul>
        <li>Use potted plants that can be replanted after the event</li>
        <li>Choose reusable or biodegradable decorations</li>
        <li>Rent furniture and display items instead of buying</li>
        <li>Incorporate LED lighting for energy efficiency</li>
        <li>Repurpose existing materials for creative decor solutions</li>
      </ul>
      <p>Consider natural materials like bamboo, jute, or organic cotton for table settings and decor elements.</p>
      
      <h3>Carbon Offsetting</h3>
      <p>For unavoidable environmental impacts, consider carbon offsetting:</p>
      <ul>
        <li>Calculate your event's carbon footprint</li>
        <li>Invest in certified carbon offset projects</li>
        <li>Communicate these efforts to attendees</li>
        <li>Consider building the offset cost into registration fees</li>
      </ul>
      <p>Some organizations plant trees as part of their offsetting strategy, creating a lasting positive impact.</p>
      
      <h3>Final Thoughts</h3>
      <p>Sustainable event planning is an ongoing journey of improvement. Start with changes that are feasible for your current situation, then build on your successes. Not only does this approach benefit the environment, but it also increasingly appeals to attendees who value social responsibility. Remember to measure your impact and share your sustainability story—your efforts may inspire others to follow suit.</p>
    `,
    date: 'September 5, 2023',
    readTime: '7 min read',
    author: 'Ananya Singh',
    authorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1400&auto=format&fit=crop',
    category: 'Event Planning',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop',
    relatedPosts: ['corporate-event-trends', 'vendor-negotiation-tips']
  },
  {
    id: 'birthday-party-themes',
    title: '10 Creative Birthday Party Themes for All Ages',
    excerpt: 'Looking for unique birthday celebration ideas? Explore these creative themes that work wonderfully for both children and adults.',
    content: `
      <p>Birthday celebrations are perfect opportunities to express personality and create memorable experiences. Here are 10 creative themes that can be adapted for various age groups:</p>
      
      <h3>1. Around the World</h3>
      <p>Transform your venue into a global adventure with different areas representing various countries. Serve international cuisines, play music from around the world, and even set up "passport" stations where guests can collect stamps for visiting each country's section.</p>
      <p><strong>For Kids:</strong> Focus on fun facts about each country with simple crafts and games.</p>
      <p><strong>For Adults:</strong> Create sophisticated food and cocktail pairings representing different cultures.</p>
      
      <h3>2. Decades Theme</h3>
      <p>Choose a favorite decade—whether it's the Roaring 20s, the psychedelic 60s, the disco 70s, or the neon 80s—and immerse guests in that era through music, decorations, and attire.</p>
      <p><strong>For Kids:</strong> Focus on fun fashion elements and age-appropriate music from the era.</p>
      <p><strong>For Adults:</strong> Create authentic cocktails from the period and incorporate trivia about important events.</p>
      
      <h3>3. Bollywood Extravaganza</h3>
      <p>Celebrate with vibrant colors, energetic music, and dramatic flair. Set up a photo booth with props, arrange for dance performances, and serve delicious Indian cuisine.</p>
      <p><strong>For Kids:</strong> Simple choreography lessons and colorful accessories.</p>
      <p><strong>For Adults:</strong> Professional dance performances or lessons, classic Bollywood movie screenings.</p>
      
      <h3>4. Enchanted Forest/Jungle Adventure</h3>
      <p>Transform your space with lush greenery, twinkling lights, and nature-inspired elements. This versatile theme can be magical or adventurous depending on the execution.</p>
      <p><strong>For Kids:</strong> Treasure hunts, animal masks, and explorer activities.</p>
      <p><strong>For Adults:</strong> Sophisticated botanical cocktails and elegant nature-inspired decor.</p>
      
      <h3>5. Mystery Dinner Party</h3>
      <p>Host a whodunit event where guests play characters in a mystery that unfolds throughout the celebration. This interactive experience keeps everyone engaged and creates unforgettable memories.</p>
      <p><strong>For Kids:</strong> Simplified mysteries with obvious clues and costume elements.</p>
      <p><strong>For Adults:</strong> Complex storylines with character backgrounds and hidden clues.</p>
      
      <h3>6. Festival Experience</h3>
      <p>Recreate the atmosphere of a music festival with different "stages" or activity areas. Include live music or performances, food stalls, and interactive art installations.</p>
      <p><strong>For Kids:</strong> Focus on interactive music stations and arts and crafts.</p>
      <p><strong>For Adults:</strong> Curated playlists, mixology stations, and perhaps local performers.</p>
      
      <h3>7. Carnival/Circus</h3>
      <p>Set up game booths, serve classic carnival treats, and incorporate circus-inspired entertainment for a playful, nostalgic atmosphere.</p>
      <p><strong>For Kids:</strong> Simple games with prizes, cotton candy, and magic tricks.</p>
      <p><strong>For Adults:</strong> Add sophisticated circus performances and carnival-inspired cocktails.</p>
      
      <h3>8. Cooking Competition</h3>
      <p>Divide guests into teams for a friendly culinary challenge. Provide ingredients and equipment, then judge creations on taste, presentation, and creativity.</p>
      <p><strong>For Kids:</strong> Simple no-bake recipes with pre-measured ingredients.</p>
      <p><strong>For Adults:</strong> More complex challenges with gourmet ingredients.</p>
      
      <h3>9. Outdoor Movie Night</h3>
      <p>Set up a projector and screen in a garden or terrace, create comfortable seating areas with cushions and blankets, and serve movie-themed snacks.</p>
      <p><strong>For Kids:</strong> Animated films with interactive elements before the screening.</p>
      <p><strong>For Adults:</strong> Classic films or new releases with themed cocktails.</p>
      
      <h3>10. Spa Day/Wellness Retreat</h3>
      <p>Create a relaxing oasis with DIY spa stations, healthy refreshments, and calming activities like yoga or meditation.</p>
      <p><strong>For Kids:</strong> Fun face masks, nail painting, and relaxation techniques.</p>
      <p><strong>For Adults:</strong> Professional massage therapists, aromatherapy workshops, and higher-end treatments.</p>
      
      <h3>Final Thoughts</h3>
      <p>The best birthday themes reflect the personality and interests of the person being celebrated. Don't be afraid to mix elements from different themes or create something entirely unique. Remember that thoughtful details and personal touches will make any theme successful.</p>
    `,
    date: 'October 12, 2023',
    readTime: '5 min read',
    author: 'Neha Gupta',
    authorImage: 'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1400&auto=format&fit=crop',
    category: 'Birthday Planning',
    image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=1400&auto=format&fit=crop',
    relatedPosts: ['wedding-budget-tips', 'religious-ceremony-etiquette']
  },
  {
    id: 'vendor-negotiation-tips',
    title: 'How to Negotiate with Event Vendors: A Comprehensive Guide',
    excerpt: 'Master the art of vendor negotiation with these expert tips that will help you secure better deals while maintaining positive professional relationships.',
    content: `
      <p>Negotiating with vendors is a crucial skill for event planners and clients alike. The right approach can save you money while building valuable long-term relationships. Here's how to negotiate effectively and respectfully.</p>
      
      <h3>Do Your Research First</h3>
      <p>Before entering any negotiation, arm yourself with knowledge:</p>
      <ul>
        <li>Research market rates for the services you're seeking</li>
        <li>Understand what's typically included in standard packages</li>
        <li>Know the vendor's reputation and unique selling points</li>
        <li>Be clear about your exact requirements and priorities</li>
        <li>Understand seasonal pricing fluctuations in the industry</li>
      </ul>
      <p>This preparation gives you credibility and helps you recognize a good offer when you see one.</p>
      
      <h3>Build Rapport Before Negotiating</h3>
      <p>Effective negotiation is built on relationships:</p>
      <ul>
        <li>Schedule initial meetings to get to know vendors personally</li>
        <li>Express genuine interest in their work and experience</li>
        <li>Share your vision and why you're excited about working with them</li>
        <li>Establish common ground and mutual respect</li>
      </ul>
      <p>Remember that vendors are more likely to be flexible with clients they like and respect.</p>
      
      <h3>Focus on Value, Not Just Price</h3>
      <p>The cheapest option isn't always the best value:</p>
      <ul>
        <li>Consider the total package and what's included</li>
        <li>Evaluate quality, reliability, and experience</li>
        <li>Think about the vendor's ability to handle unexpected situations</li>
        <li>Consider post-event support and policies</li>
      </ul>
      <p>Sometimes paying more for an exceptional vendor saves money in the long run by preventing costly problems.</p>
      
      <h3>Be Clear About Your Budget</h3>
      <p>Transparency about finances sets the right tone:</p>
      <ul>
        <li>Be honest about your budget constraints</li>
        <li>Ask for suggestions on how to maximize value within your budget</li>
        <li>Discuss what elements could be adjusted to meet financial requirements</li>
        <li>Consider whether flexibility in dates or times could affect pricing</li>
      </ul>
      <p>Most vendors appreciate clients who are straightforward about budgetary limitations.</p>
      
      <h3>Ask for Package Customization</h3>
      <p>Standard packages rarely fit every client perfectly:</p>
      <ul>
        <li>Identify elements in standard packages you don't need</li>
        <li>Ask to substitute unwanted elements for ones you value more</li>
        <li>Inquire about creating a custom package specific to your needs</li>
        <li>Request itemized pricing to better understand costs</li>
      </ul>
      <p>This approach often results in better value than simply asking for discounts.</p>
      
      <h3>Leverage Timing and Volume</h3>
      <p>Strategic timing can improve your negotiating position:</p>
      <ul>
        <li>Book during off-peak seasons for better rates</li>
        <li>Consider weekday events instead of weekends</li>
        <li>Book multiple services from the same vendor for package discounts</li>
        <li>If planning multiple events, discuss annual contracts</li>
      </ul>
      <p>Many vendors offer significant discounts to fill their calendars during slower periods.</p>
      
      <h3>Offer Value Beyond Money</h3>
      <p>Consider what non-monetary value you can provide:</p>
      <ul>
        <li>Prominent credit and exposure at high-profile events</li>
        <li>Testimonials and portfolio opportunities</li>
        <li>Referrals to other potential clients</li>
        <li>Flexibility that makes their job easier</li>
        <li>Potential for repeat business</li>
      </ul>
      <p>These incentives can be powerful negotiating tools, especially with newer vendors building their portfolios.</p>
      
      <h3>Get Everything in Writing</h3>
      <p>After reaching an agreement:</p>
      <ul>
        <li>Request a detailed contract specifying all services and deliverables</li>
        <li>Ensure pricing, payment schedules, and cancellation policies are clearly stated</li>
        <li>Review all terms carefully before signing</li>
        <li>Keep copies of all correspondence related to negotiations</li>
      </ul>
      <p>This documentation protects both parties and prevents misunderstandings.</p>
      
      <h3>Final Thoughts</h3>
      <p>Successful negotiation isn't about winning at the vendor's expense—it's about finding mutually beneficial arrangements. By approaching negotiations with respect, preparation, and clarity, you can secure better deals while building valuable long-term vendor relationships that benefit your events for years to come.</p>
    `,
    date: 'November 28, 2023',
    readTime: '9 min read',
    author: 'Vikram Malhotra',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1400&auto=format&fit=crop',
    category: 'Event Planning',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1400&auto=format&fit=crop',
    relatedPosts: ['sustainable-event-planning', 'corporate-event-trends']
  }
];

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [relatedArticles, setRelatedArticles] = useState<any[]>([]);
  
  useEffect(() => {
    // In a real app, this would be an API call
    setLoading(true);
    setTimeout(() => {
      const foundArticle = blogArticles.find(article => article.id === id);
      setArticle(foundArticle);
      
      if (foundArticle) {
        const related = foundArticle.relatedPosts
          .map(relatedId => blogArticles.find(article => article.id === relatedId))
          .filter(Boolean);
        setRelatedArticles(related as any[]);
      }
      
      setLoading(false);
      
      if (!foundArticle) {
        navigate('/blog', { replace: true });
      }
    }, 300);
  }, [id, navigate]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-75"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-150"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!article) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="mb-6">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/blog')}
              className="flex items-center text-sm text-muted-foreground mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Blog
            </Button>
            
            <div className="mb-3">
              <span className="bg-secondary/60 px-3 py-1 rounded-full text-xs font-medium">
                {article.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{article.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 md:gap-8 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={article.authorImage} alt={article.author} />
                  <AvatarFallback>{article.author.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <span>{article.author}</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-1" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
          
          <div className="mb-12 rounded-lg overflow-hidden h-[400px] md:h-[500px]">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-8">
              <article className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </article>
              
              <div className="mt-12 flex flex-wrap items-center justify-between pt-6 border-t">
                <div>
                  <h4 className="text-sm font-medium mb-2">Share this article</h4>
                  <div className="flex space-x-2">
                    <Button size="icon" variant="outline">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0">
                  <Button variant="outline" size="sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Back to top
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-4">
              <div className="sticky top-24">
                <div className="bg-muted/40 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
                  <div className="space-y-6">
                    {relatedArticles.map((related) => (
                      <div key={related.id} className="group">
                        <h4 className="font-medium group-hover:text-primary transition-colors">
                          <Link to={`/blog/${related.id}`}>{related.title}</Link>
                        </h4>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <CalendarIcon className="h-3 w-3 mr-1" />
                          <span>{related.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-primary/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Get Help Planning Your Event</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Ready to create an unforgettable event? Our team of professionals is here to help.
                  </p>
                  <Button className="w-full" onClick={() => navigate('/contact')}>
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
