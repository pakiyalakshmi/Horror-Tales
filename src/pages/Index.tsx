import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Star, Mail, Send } from "lucide-react";

const stories = [
  {
    id: 1,
    title: "Girl in the Mirror",
    excerpt: "A young boy meets a mysterious girl who only appears in mirrors...",
    image: "https://i.pinimg.com/originals/bf/10/a4/bf10a4a1774adb5eb8c2d43fc04133a2.jpg",
    rating: 4.5,
    reviews: 254
  },
  {
    id: 2,
    title: "1 Spoon and 2 Eye Balls",
    excerpt: "A disturbing viral video leads to horrifying consequences...",
    image: "https://media.istockphoto.com/id/184991366/id/foto/mata-pada-sendok.jpg?s=1024x1024&w=is&k=20&c=kxdzXYB-NQcMi-wDXISJH-Y87aC29TIJalCKKvN_HcE=",
    rating: 4.1,
    reviews: 189
  },
  {
    id: 3,
    title: "You Are My Next Internet Star",
    excerpt: "A Japanese student discovers a terrifying website...",
    image: "https://w0.peakpx.com/wallpaper/1014/179/HD-wallpaper-you-re-next-grim-reaper-dog-tags-ring.jpg",
    rating: 4.3,
    reviews: 167
  },
  {
    id: 4,
    title: "Endless Loop in the Desert",
    excerpt: "A man's nightmare becomes an infinite cycle of horror...",
    image: "https://www.kidsgen.com/stories/horror-stories/short-stories/images/endless-loop.jpg",
    rating: 4.2,
    reviews: 145
  },
  {
    id: 5,
    title: "Her Old Piano",
    excerpt: "A mysterious piano holds a dark and bloody secret...",
    image: "https://static2.bigstockphoto.com/7/0/2/large1500/207986107.jpg",
    rating: 4.4,
    reviews: 198
  },
  {
    id: 6,
    title: "I'm Behind You... Turn Around...",
    excerpt: "A night alone turns into a terrifying game of cat and mouse...",
    image: "http://thegirlwholoveshorror.blogspot.com/2011/10/movie-review-ward-2011.html",
    rating: 4.6,
    reviews: 223
  }
];

const Index = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-[url('https://media.istockphoto.com/id/1022236966/photo/conceptual-background-on-history-education-literature-topics.jpg?s=612x612&w=0&k=20&c=YMti30QgV34p8S60u9s0I4NY4FmEqL-J9LE2uJcJTQE=')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Read Something That Matters</h1>
            <p className="text-xl mb-8">Immerse yourself in a collection of spine-chilling horror stories that will keep you awake at night.</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Reading
            </Button>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-20 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story) => (
            <Card key={story.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img src={story.image} alt={story.title} className="w-full h-48 object-cover rounded-t-lg" />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">{story.title}</CardTitle>
                <CardDescription>{story.excerpt}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{story.rating}</span>
                  <span className="text-sm text-muted-foreground">({story.reviews})</span>
                </div>
                <Button variant="outline" size="sm">Read More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <form onSubmit={handleContact} className="space-y-6">
            <div>
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="min-h-[150px]"
              />
            </div>
            <Button type="submit" className="w-full">
              <Mail className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-8">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Horror Stories. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;