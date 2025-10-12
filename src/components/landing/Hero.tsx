import React from "react";
import { Button } from "../ui/button";
import { Calendar, Mic, StarIcon } from "lucide-react";
import { SignUpButton } from "@clerk/nextjs";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 sm:pt-32 md:pt-30 lg:pt-20 xl:pt-10 overflow-hidden">
      {/* gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-primary/5">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)]
        bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"
        />
      </div>

      {/* gradient orbs */}
      <div className="absolute top-20 left-1/4 w-64 h-64 sm:w-72 sm:h-72 bg-gradient-to-r from-primary/20 to-primary/10 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-r from-primary/15 to-primary/5 blur-3xl rounded-full" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid items-center max-xl:gap-1 gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm text-primary font-medium">
                AI-Powered Dental Assistant
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                Your dental
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-pulse">
                questions
              </span>
              <br />
              <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                answered instantly
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Chat with our AI dental assistant for instant advice, book smart appointments, 
              and get personalized care recommendations. Available 24/7.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <SignUpButton mode="modal">
                <Button size="lg" className="sm:mr-4">
                  <Mic className="mr-2 size-5" />
                  Try voice chat
                </Button>
              </SignUpButton>
              <SignUpButton mode="modal">
                <Button variant="outline" size="lg" className="backdrop-blur-2xl">
                  <Calendar className="mr-2 size-5" />
                  Book appointment
                </Button>
              </SignUpButton>
            </div>

            {/* Testimonials */}
            <div className="pt-4">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                {/* avatars */}
                <div className="flex -space-x-3">
                  {[
                    "photo-1544005313-94ddf0286df2",
                    "photo-1560250097-0b93528c311a",
                    "photo-1580489944761-15a19d654956",
                    "photo-1633332755192-727a05c4013d",
                    "photo-1598300042247-d088f8ab3a91",
                  ].map((id, i) => (
                    <Image
                      key={i}
                      src={`https://images.unsplash.com/${id}?w=100&h=100&fit=crop&crop=face`}
                      alt={`User ${i + 1}`}
                      width={48}
                      height={48}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-4 ring-background"
                    />
                  ))}
                </div>
                {/* rating */}
                <div className="space-y-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon
                          key={star}
                          className="h-4 w-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-foreground">
                      4.9/5
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Trusted by{" "}
                    <span className="font-semibold text-foreground">
                      1,200+ patients
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative lg:pl-8 flex justify-center">
            <div className="absolute -top-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl rotate-45 blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-2xl"></div>

            <Image
              src="/hero.png"
              alt="DentWise AI"
              width={600}
              height={600}
              className="w-[60%] sm:w-[70%] md:w-[80%] max-xl:h-[80vh] h-[90vh]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
