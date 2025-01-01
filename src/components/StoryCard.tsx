import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

interface StoryCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  rating: number;
  reviews: number;
}

export const StoryCard = ({ id, title, excerpt, image, rating, reviews }: StoryCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      </CardHeader>
      <CardContent>
        <CardTitle className="mb-2">{title}</CardTitle>
        <CardDescription>{excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span>{rating}</span>
          <span className="text-sm text-muted-foreground">({reviews})</span>
        </div>
        <Link to={`/story/${id}`}>
          <Button variant="outline" size="sm">
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};