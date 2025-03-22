
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarIcon, Clock, User } from 'lucide-react';

const Blog = () => {
  const navigate = useNavigate();
  
  const articles = [
    {
      id: 'wedding-budget-tips',
      title: 'How to Create a Wedding Budget That Works',
      excerpt: 'Planning a wedding but worried about costs? Learn practical tips for creating a realistic wedding budget that aligns with your priorities without sacrificing your dream day.',
      date: 'June 15, 2023',
      readTime: '8 min read',
      author: 'Priya Sharma',
      category: 'Wedding Planning',
      image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1400&auto=format&fit=crop'
    },
    {
      id: 'corporate-event-trends',
      title: 'Top Corporate Event Trends for 2023',
      excerpt: 'Discover the latest trends shaping corporate events this year, from hybrid experiences to sustainability practices and innovative tech integrations.',
      date: 'July 22, 2023',
      readTime: '6 min read',
      author: 'Amit Patel',
      category: 'Corporate Events',
      image: 'https://images.unsplash.com/photo-1540317580384-e5d43867d8c2?q=80&w=1400&auto=format&fit=crop'
    },
    {
      id: 'religious-ceremony-etiquette',
      title: 'Etiquette Guide for Religious Ceremonies',
      excerpt: 'Navigate traditional religious ceremonies with confidence. This comprehensive guide covers proper etiquette for various religious events in India.',
      date: 'August 10, 2023',
      readTime: '10 min read',
      author: 'Rahul Verma',
      category: 'Religious Events',
      image: 'https://images.unsplash.com/photo-1567591418663-97a36910f2c7?q=80&w=1400&auto=format&fit=crop'
    },
    {
      id: 'sustainable-event-planning',
      title: 'Sustainable Event Planning: Reducing Your Environmental Footprint',
      excerpt: 'Learn practical ways to make your next event more environmentally friendly, from choosing eco-conscious vendors to implementing waste reduction strategies.',
      date: 'September 5, 2023',
      readTime: '7 min read',
      author: 'Ananya Singh',
      category: 'Event Planning',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop'
    },
    {
      id: 'birthday-party-themes',
      title: '10 Creative Birthday Party Themes for All Ages',
      excerpt: 'Looking for unique birthday celebration ideas? Explore these creative themes that work wonderfully for both children and adults.',
      date: 'October 12, 2023',
      readTime: '5 min read',
      author: 'Neha Gupta',
      category: 'Birthday Planning',
      image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=1400&auto=format&fit=crop'
    },
    {
      id: 'vendor-negotiation-tips',
      title: 'How to Negotiate with Event Vendors: A Comprehensive Guide',
      excerpt: 'Master the art of vendor negotiation with these expert tips that will help you secure better deals while maintaining positive professional relationships.',
      date: 'November 28, 2023',
      readTime: '9 min read',
      author: 'Vikram Malhotra',
      category: 'Event Planning',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1400&auto=format&fit=crop'
    }
  ];
  
  const featuredArticle = articles[0];
  const regularArticles = articles.slice(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block py-1 px-3 bg-secondary mb-4 text-xs font-medium rounded-full">
              Resources & Insights
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Event Planning Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our articles for professional insights, tips, and inspiration for your next event.
            </p>
          </div>

          {/* Featured Article */}
          <div className="mb-12">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="text-sm text-muted-foreground mb-2">
                    <span className="bg-secondary/60 px-3 py-1 rounded-full">
                      {featuredArticle.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{featuredArticle.title}</h2>
                  <p className="text-muted-foreground mb-6">{featuredArticle.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{featuredArticle.author}</span>
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span className="mr-4">{featuredArticle.date}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <Button onClick={() => navigate(`/blog/${featuredArticle.id}`)}>
                    Read Article
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Regular Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {regularArticles.map((article) => (
              <Card key={article.id} className="flex flex-col h-full hover:shadow-md transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-secondary/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="flex-grow">
                  <CardTitle>{article.title}</CardTitle>
                  <CardDescription className="mt-2">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter className="border-t pt-4 flex flex-col items-start">
                  <div className="flex items-center text-sm text-muted-foreground mb-4 w-full">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-auto">{article.author}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{article.readTime}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-2"
                    onClick={() => navigate(`/blog/${article.id}`)}
                  >
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
