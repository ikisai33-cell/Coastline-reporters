import { StoryGrid } from '@/components/news/StoryGrid';
import { SPECIMEN_ARTICLES } from '@/lib/constants/specimens';

export default function HomePage() {
  return (
    <div className="space-y-10">
      <StoryGrid articles={SPECIMEN_ARTICLES} />
    </div>
  );
}
