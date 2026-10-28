import React from 'react';
import {
  getLeadStoryAndSecondary,
  getLatestStories,
  getNigerDeltaStories,
  getPublishedArticles,
  getEditorialCategories,
} from '@/lib/content';
import { LeadStorySection } from '@/components/news/LeadStorySection';
import { NigerDeltaSection } from '@/components/news/NigerDeltaSection';
import { LatestNewsSection } from '@/components/news/LatestNewsSection';
import { DesksGridSection } from '@/components/news/DesksGridSection';
import { MultimediaPreviewSection } from '@/components/news/MultimediaPreviewSection';

export default async function HomePage() {
  // Concurrently fetch published content from the content access layer
  const [
    leadAndSecondary,
    latestStories,
    nigerDeltaStories,
    allArticlesResult,
    categories,
  ] = await Promise.all([
    getLeadStoryAndSecondary(),
    getLatestStories(12),
    getNigerDeltaStories(),
    getPublishedArticles({ pageSize: 40 }),
    getEditorialCategories(),
  ]);

  return (
    <div className="space-y-12">
      {/* 1. Lead Story & Secondary Inquiries Section (Section 3.C) */}
      <LeadStorySection
        leadStory={leadAndSecondary.lead}
        secondaryStories={leadAndSecondary.secondary}
      />

      {/* 2. Niger Delta Regional Priority Section (Section 3.E) */}
      <NigerDeltaSection initialArticles={nigerDeltaStories} />

      {/* 3. Latest News Dispatches (Section 3.D) */}
      <LatestNewsSection articles={latestStories} initialCount={6} increment={3} />

      {/* 4. Multimedia Preview: Coastline TV & Podcasts (Section 3.G) */}
      <MultimediaPreviewSection />

      {/* 5. Specialised News Desks Showcase (Section 3.F) */}
      <DesksGridSection categories={categories} articles={allArticlesResult.data} />
    </div>
  );
}
