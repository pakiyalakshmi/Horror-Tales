import { StoryCard } from "./StoryCard";

interface StoriesGridProps {
  stories: Array<{
    id: number;
    title: string;
    excerpt: string;
    image: string;
    rating: number;
    reviews: number;
  }>;
}

export const StoriesGrid = ({ stories }: StoriesGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stories.map((story) => (
        <StoryCard key={story.id} {...story} />
      ))}
    </div>
  );
};