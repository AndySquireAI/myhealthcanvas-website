import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  articlePublishedTime?: string;
  articleAuthor?: string;
  noindex?: boolean;
}

export default function SEO({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  canonicalPath,
  ogType = 'website',
  articlePublishedTime,
  articleAuthor = 'Andy Squire',
  noindex = false
}: SEOProps) {
  const [location] = useLocation();
  const fullUrl = `https://myhealthcanvas.com${canonicalPath || location}`;
  const defaultOgImage = 'https://myhealthcanvas.com/images/MyHealthCanvasLOGO.png';
  const imageUrl = ogImage || defaultOgImage;

  useEffect(() => {
    // Update title - LOCKED, do not allow browser/plugin translation
    document.title = title;

    // Prevent browser auto-translation of title
    document.documentElement.setAttribute('translate', 'no');
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Primary meta tags
    updateMetaTag('title', title);
    updateMetaTag('description', description);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Robots directive
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // Prevent Google Translate from changing the title
    updateMetaTag('google', 'notranslate');

    // Open Graph
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', imageUrl, true);
    updateMetaTag('og:locale', 'en_US', true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:site_name', 'MyHealthCanvas', true);

    // Article-specific Open Graph tags
    if (ogType === 'article') {
      if (articlePublishedTime) {
        updateMetaTag('article:published_time', articlePublishedTime, true);
      }
      updateMetaTag('article:author', articleAuthor, true);
    }

    // Twitter
    updateMetaTag('twitter:url', fullUrl);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', imageUrl);
    updateMetaTag('twitter:card', 'summary_large_image');

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // Add hreflang x-default (single language site, no translations)
    let hreflangDefault = document.querySelector('link[hreflang="x-default"]');
    if (!hreflangDefault) {
      hreflangDefault = document.createElement('link');
      hreflangDefault.setAttribute('rel', 'alternate');
      hreflangDefault.setAttribute('hreflang', 'x-default');
      document.head.appendChild(hreflangDefault);
    }
    hreflangDefault.setAttribute('href', fullUrl);

    // Add hreflang en (primary language)
    let hreflangEn = document.querySelector('link[hreflang="en"]');
    if (!hreflangEn) {
      hreflangEn = document.createElement('link');
      hreflangEn.setAttribute('rel', 'alternate');
      hreflangEn.setAttribute('hreflang', 'en');
      document.head.appendChild(hreflangEn);
    }
    hreflangEn.setAttribute('href', fullUrl);

    // Inject Article structured data for blog posts
    if (ogType === 'article') {
      const existingScript = document.querySelector('script[data-seo-article]');
      if (existingScript) existingScript.remove();
      
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-article', 'true');
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title.replace(' | MyHealthCanvas eLibrary', ''),
        "description": description,
        "image": imageUrl,
        "author": {
          "@type": "Person",
          "name": articleAuthor,
          "url": "https://myhealthcanvas.com/about"
        },
        "publisher": {
          "@type": "Organization",
          "name": "MyHealthCanvas",
          "logo": {
            "@type": "ImageObject",
            "url": "https://myhealthcanvas.com/images/MyHealthCanvasLOGO.png"
          }
        },
        "datePublished": articlePublishedTime,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": fullUrl
        }
      });
      document.head.appendChild(script);
      
      return () => {
        const scriptToRemove = document.querySelector('script[data-seo-article]');
        if (scriptToRemove) scriptToRemove.remove();
      };
    }

  }, [title, description, keywords, fullUrl, imageUrl, ogType, articlePublishedTime, articleAuthor, noindex]);

  return null;
}
