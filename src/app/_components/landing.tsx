"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MoonIcon,
  SunIcon,
  MenuIcon,
  XIcon,
  ArrowRightIcon,
} from "lucide-react";

export function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen flex flex-col `}>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-primary">
            Fund the Future
          </a>
          <div className="hidden md:flex space-x-4">
            <a href="#mission" className="text-gray-600 hover:text-primary">
              Our Mission
            </a>
            <a href="#apply" className="text-gray-600 hover:text-primary">
              Apply
            </a>
            <a href="#board" className="text-gray-600 hover:text-primary">
              Board
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary">
              Contact
            </a>
            <a href="#donate" className="text-gray-600 hover:text-primary">
              Donate
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-2">
              <a href="#mission" className="text-gray-600 hover:text-primary">
                Our Mission
              </a>
              <a href="#apply" className="text-gray-600 hover:text-primary">
                Apply
              </a>
              <a href="#board" className="text-gray-600 hover:text-primary">
                Board
              </a>
              <a href="#contact" className="text-gray-600 hover:text-primary">
                Contact
              </a>
              <a href="#donate" className="text-gray-600 hover:text-primary">
                Donate
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <section className="relative text-white py-32">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              Fund the Future
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              Empowering students to explore, create, and achieve through
              extracurricular excellence.
            </p>
            <div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-600">
              <Button size="lg" variant="secondary">
                Learn More
              </Button>
              <Button size="lg" className="text-black" variant="outline">
                <a href="#donate">Donate Now</a>
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 bg-[url('/section1background.webp?height=1080&width=1920')] bg-cover bg-center mix-blend-overlay"></div>
        </section>

        <section id="mission" className="py-20 ">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Our Mission
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg mb-4">
                  At Fund the Future, we believe that every high school student
                  deserves the opportunity to explore their passions and develop
                  their skills beyond the classroom.
                </p>
                <p className="text-lg mb-4">
                  Our mission is to bridge the gap between academic learning and
                  real-world experiences by providing financial support for
                  extracurricular activities that enrich students' educational
                  journeys.
                </p>
                <p className="text-lg">
                  Through our grants, we aim to foster creativity, critical
                  thinking, and personal growth, preparing students for success
                  in college and beyond.
                </p>
              </div>
              <div className="relative h-64 md:h-full">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Students engaged in extracurricular activities"
                  className="rounded-lg shadow-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="apply" className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Apply for a Grant
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Are you a high school student looking to fund an extracurricular
              project or activity? We're excited to hear about your ideas and
              support your journey!
            </p>
            <Button size="lg" className="animate-pulse">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfU9XXsjvM60q646a2cVV-Cupkq7lY5LjaqLkWntFPc2NSUkQ/viewform?usp=sf_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Apply Now <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>

        <section id="board" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Board of Directors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Anaha Prabhakaran",
                  role: "President",
                  image: "/anahph.png?height=200&width=200",
                },
                {
                  name: "Agastya Gupta",
                  role: "Vice President",
                  image: "/goop.png?height=200&width=200",
                },
                {
                  name: "Eden Odendahl",
                  role: "Secretary",
                  image: "/eden.png?height=200&width=200",
                },
                {
                  name: "Hari Gridharan",
                  role: "Treasurer",
                  image: "/hari.png?height=200&width=200",
                },
              ].map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="donate" className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Donate Now</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Your contribution can make a significant impact on a student's
              life. Help us fund the future of education and empower the next
              generation of leaders.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" className="w-32">
                <a href="mailto:info@fundthefuture.org">Donate</a>
              </Button>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>
            <p className="text-lg mb-6">
              Have questions or want to get involved? We'd love to hear from
              you!
            </p>
            <Button size="lg">
              <a href="mailto:info@fundthefuture.org">Get in Touch</a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">Fund the Future</h3>
              <p className="text-sm">
                Empowering students through extracurricular activities
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary">
                Terms of Service
              </a>
              <a href="#donate" className="hover:text-primary">
                Donate
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            &copy; 2023 Fund the Future. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
