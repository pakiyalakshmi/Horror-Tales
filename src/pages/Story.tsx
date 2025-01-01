import { Button } from "@/components/ui/button";
import { stories } from "@/data/stories";
import { Link, useParams } from "react-router-dom";
import { AuthorInfo } from "@/components/AuthorInfo";

export const Story = () => {
  const { id } = useParams();
  const story = stories.find((s) => s.id === Number(id));

  if (!story) {
    return (
      <div className="min-h-screen bg-background py-16 px-4">
        <div className="max-w-3xl mx-auto bg-card p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4 text-foreground">Story not found</h1>
          <Link to="/">
            <Button variant="outline">← Back to Stories</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-3xl mx-auto bg-card p-8 rounded-lg shadow-lg">
        <Link to="/">
          <Button variant="outline" className="mb-6">
            ← Back to Stories
          </Button>
        </Link>
        
        <img 
          src={story.image}
          alt={story.title}
          className="mx-auto w-2/5 rounded-lg mb-8 shadow-md"
        />
        
        <h1 className="text-center text-4xl font-bold mb-8 text-primary">
          {story.title}
        </h1>
        
        <hr className="border-t border-border my-8" />
        
        <div className="space-y-6 text-justify leading-relaxed">
          <p className="text-lg font-medium text-primary/90">
            <span className="text-xl font-bold text-primary">Excerpt:</span> {story.excerpt}
          </p>
          <div className="whitespace-pre-line text-foreground/90 text-lg">
            {story.content}
          </div>
        </div>

        <AuthorInfo />
      </div>
    </div>
  );
};

export default Story;