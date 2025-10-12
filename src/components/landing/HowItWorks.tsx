import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon, Zap } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const HowItWorks = () => {
  return (
    <section className="relative py-20 px-6 z-10 mx-auto max-w-7xl outline-hidden">
      {/* header */}
      <div className="text-center mb-20 space-y-4">
        <div className="inline-flex items-center gap-2 text-primary px-4 py-2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm ">
          <Zap className="size-4 animate-pulse" />
          <span className="text-xs sm:text-sm font-medium">Simple Process</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Three steps to
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            better dental health
          </span>
        </h1>
        <p className="text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
          Our streamlined process makes dental care accessible, convenient, and
          stress-free for everyone
        </p>
      </div>
      {/* steps */}
      <div className="relative">
        {/* connection line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2 hidden lg:block"></div>
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          <div className="relative group">
            <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 h-[400px] flex flex-col justify-between">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                1
              </div>
              <div className=" w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6">
                <Image
                  src={"/audio.png"}
                  alt="DentWise AI"
                  width={40}
                  height={40}
                />
              </div>
              <h2 className="text-xl font-semibold text-center">Ask Questions</h2>
              <p className="text-muted-foreground text-center leading-relaxed mb-6">
                Chat with our AI assistant about any dental concerns. Get
                instant answers about symptoms, treatments, and oral health
                tips.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <div className="text-primary text-sm px-3 py-1  bg-gradient-to-r from-primary/10 to-primary/5 rounded-full">
                  24/7 Available
                </div>
                <div className="text-primary text-sm px-3 py-1  bg-gradient-to-r from-primary/10 to-primary/5 rounded-full">
                  Instant Response
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 h-[400px] flex flex-col justify-between">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                2
              </div>
              <div className=" w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6">
                <Image
                  src={"/brain.png"}
                  alt="DentWise AI"
                  width={40}
                  height={40}
                />
              </div>
              <h2 className="text-xl font-semibold text-center">Get Expert Advice</h2>
              <p className="text-muted-foreground text-center leading-relaxed mb-6">
                Receive personalized recommendations based on thousands of dental cases. Our AI
                provides professional-grade insights.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <div className="text-primary text-sm px-3 py-1  bg-gradient-to-r from-primary/10 to-primary/5 rounded-full">
                  AI-Powered
                </div>
                <div className="text-primary text-sm px-3 py-1  bg-gradient-to-r from-primary/10 to-primary/5 rounded-full">
                  Personalized
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 h-[400px] flex flex-col justify-between">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                3
              </div>
              <div className=" w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6">
                <Image
                  src={"/calendar.png"}
                  alt="DentWise AI"
                  width={40}
                  height={40}
                />
              </div>
              <h2 className="text-xl font-semibold text-center">Book & Get Care</h2>
              <p className="text-muted-foreground text-center leading-relaxed mb-6">
                Schedule with verified dentists and receive comprehensive follow-up care. Track your
                progress seamlessly.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <div className="text-primary text-sm px-3 py-1  bg-gradient-to-r from-primary/10 to-primary/5 rounded-full">
                  Verified Doctors
                </div>
                <div className="text-primary text-sm px-3 py-1  bg-gradient-to-r from-primary/10 to-primary/5 rounded-full">
                  Follow-up Care
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* CTA */}
      <div className="text-center mt-16">
        <SignUpButton mode="modal">
          <Button size="lg">
            <ArrowRightIcon className="mr-2 size-5" />
            Get Started Now
          </Button>
        </SignUpButton>
      </div>
    </section>
  );
};

export default HowItWorks;
