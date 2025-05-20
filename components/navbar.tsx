"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Portfolio
        </Link>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <nav className="flex flex-col p-4">
              <Link
                href="#home"
                className="py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="#skills"
                className="py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

