import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { stories } from "@/data/stories";

const Story = () => {
  const { id } = useParams();
  const story = stories.find(s => s.id === Number(id));

  if (!story) {
    return (
      <div className="min-h-screen bg-gray-600 py-16 px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1>Story not found</h1>
          <Link to="/">
            <Button variant="outline">← Back to Stories</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-600 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-[rgb(228,216,216)] p-8 rounded-lg shadow-lg">
        <Link to="/">
          <Button variant="outline" className="mb-6">
            ← Back to Stories
          </Button>
        </Link>
        
        <img 
          src={story.image}
          alt={story.title}
          className="mx-auto w-2/5 rounded-lg mb-6"
        />
        
        <h1 className="text-center text-4xl font-bold mb-6 text-[rgb(158,92,123)]">
          {story.title}
        </h1>
        
        <hr className="border-t-2 border-gray-300 my-6" />
        
        <div className="space-y-4 text-justify text-lg leading-relaxed">
          <p><span className="text-xl font-bold">Excerpt:</span> {story.excerpt}</p>
          <div className="whitespace-pre-line">{story.content}</div>
        </div>
      </div>
    </div>
  );
};

export default Story;