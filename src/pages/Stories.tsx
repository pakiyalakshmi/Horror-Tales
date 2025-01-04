import { StoriesGrid } from "@/components/StoriesGrid";
import { stories } from "@/data/stories";

const Stories = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Horror Stories Collection</h1>
        <StoriesGrid stories={stories} />
      </section>
    </div>
  );
};

export default Stories;