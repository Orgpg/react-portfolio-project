import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t py-12 bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-xl">Portfolio</h3>
            <p className="text-sm text-muted-foreground mt-1">
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:contact@example.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

