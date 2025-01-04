import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthorInfo } from "@/components/AuthorInfo";

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
            <Link to="/stories">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Reading
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto">
          <AuthorInfo />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <form onSubmit={handleContact} className="space-y-6">
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="min-h-[150px]"
            />
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