import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthorInfo } from "@/components/AuthorInfo";
import { StoriesGrid } from "@/components/StoriesGrid";
import { stories } from "@/data/stories";

const Index = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:ot72013@gmail.com?subject=Feedback from Horror Stories&body=From: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Show success message
    toast({
      title: "Email client opened!",
      description: "Please send the email through your default email client.",
    });
    
    setEmail("");
    setMessage("");
  };

  // Get the 3 most recent stories
  const recentStories = stories.slice(0, 3);
  
  // Get stories that are novels (in this case, we'll take stories with longer content)
  const novelStories = stories.filter(story => story.content.length > 3000).slice(0, 3);

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

      {/* Newly Added Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Newly Added</h2>
          <StoriesGrid stories={recentStories} />
          <div className="text-center mt-8">
            <Link to="/stories">
              <Button variant="outline">View All Stories</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Novel Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Novel Section</h2>
          <StoriesGrid stories={novelStories} />
          <div className="text-center mt-8">
            <Link to="/stories">
              <Button variant="outline">Explore More Novels</Button>
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
          
          {/* Contact Information Table */}
          <div className="mb-12 overflow-hidden rounded-lg border bg-card">
            <table className="w-full">
              <tbody className="divide-y">
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3 flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-muted-foreground" />
                    <a 
                      href="mailto:ot72013@gmail.com"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      ot72013@gmail.com
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3 flex items-center">
                    <Linkedin className="w-5 h-5 mr-3 text-muted-foreground" />
                    <a 
                      href="https://www.linkedin.com/in/pakiyalakshmi-s-9647211bb/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3 flex items-center">
                    <Github className="w-5 h-5 mr-3 text-muted-foreground" />
                    <a 
                      href="https://github.com/pakiyalakshmi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      GitHub Profile
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

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