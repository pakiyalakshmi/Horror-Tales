import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

export const AuthorInfo = () => {
  return (
    <Card className="mt-12 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">About the Author</CardTitle>
        <CardDescription>Creator of Horror Stories Collection</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <img
            src="https://avatars.githubusercontent.com/u/default"
            alt="Pakiyalakshmi (ABINAYA)"
            className="w-16 h-16 rounded-full border-2 border-primary"
          />
          <div>
            <h3 className="text-lg font-semibold text-foreground">Pakiyalakshmi (ABINAYA)</h3>
            <p className="text-sm text-muted-foreground">Horror Story Writer & Web Developer</p>
          </div>
        </div>
        <p className="text-foreground/90">
          A passionate storyteller specializing in horror and supernatural fiction. With a unique blend
          of traditional horror elements and modern psychological twists, Pakiyalakshmi creates
          immersive narratives that keep readers on the edge of their seats. Her stories draw from both personal experiences 
          and urban legends, creating a unique blend of reality and fiction that resonates with readers worldwide.
        </p>
        <div className="flex gap-4 text-muted-foreground">
          <a 
            href="https://github.com/pakiyalakshmi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/pakiyalakshmi-s-9647211bb/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:ot72013@gmail.com" 
            className="hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};