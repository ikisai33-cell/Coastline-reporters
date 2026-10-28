import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { EDITORIAL_CATEGORIES } from '@/lib/constants/navigation';
import { SPECIMEN_ARTICLES } from '@/lib/constants/specimens';
import { ArticleCard } from '@/components/news/ArticleCard';
import { SpecimenNotice } from '@/components/news/SpecimenNotice';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = EDITORIAL_CATEGORIES.find((c) => c.slug === slug);
  if (!category) {
    return { title: 'Category Not Found' };
  }
  return {
    title: `${category.name} News`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = EDITORIAL_CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  // Filter specimen articles matching category or fallback to representative specimens
  const categoryArticles = SPECIMEN_ARTICLES.filter(
    (a) => a.category?.slug === slug || a.category_id === slug
  );
  const displayArticles = categoryArticles.length > 0 ? categoryArticles : SPECIMEN_ARTICLES.slice(0, 3);

  return (
    <div className="space-y-8">
      {/* Category Header Banner */}
      <div className="bg-white border-l-4 border-brand-teal-500 rounded-r-lg border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-teal-700">
          <span>Editorial Desk</span>
          <span>&bull;</span>
          <span>Coastline Reporters</span>
        </div>
        <h1 className="text-3xl font-black text-brand-navy-950 uppercase tracking-tight mt-1">
          {category.name}
        </h1>
        <p className="text-slate-600 text-sm mt-2 max-w-3xl leading-relaxed">
          {category.description}
        </p>
      </div>

      <SpecimenNotice />

      {/* Articles Grid */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayArticles.map((article) => (
            <ArticleCard key={article.id} article={article} variant="standard" />
          ))}
        </div>
      </div>
    </div>
  );
}
