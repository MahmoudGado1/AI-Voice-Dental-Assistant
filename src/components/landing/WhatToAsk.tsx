import { MessageCircle, MessageSquareIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const WhatToAsk = () => {
  return (
    <section id="about" className="relative py-30 px-6 bg-gradient-to-b from-background to-muted/20 outline-hidden">
      <div className="relative mx-auto max-w-7xl z-10">
        {/* header */}
        <div className="text-center mb-20">
          <div className="inline-flex text-primary items-center px-4 py-2 gap-2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm">
            <MessageCircle className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-medium">
              AI-Powered Conversations
            </span>
          </div>
          <h2 className="mt-6 text-3xl mb-6 sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Ask about
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              anything dental
            </span>
          </h2>
          <p className="text-xl text-muted-background mx-auto leading-relaxed max-w-3xl">
            From simple questions to complex concerns, our AI delivers
            expert-level guidance trained on thousands of real dental cases
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3>Common questions our AI answers:</h3>
              <div className="group relative">
                <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                      <MessageSquareIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
                        <p className="font-semibold text-primary">
                          "My tooth hurts when I bite down"
                        </p>
                      </div>
                      <div className="bg-muted/30 rounded-2xl p-4">
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          Get immediate advice on pain management, possible
                          causes, and when to see a dentist urgently
                        </p>
                        <div className="flex gap-2 mt-3">
                          <span className="text-primary px-2 py-1 bg-primary/10 text-xs rounded-full">
                            Instant Response
                          </span>
                          <span className="text-primary px-2 py-1 bg-primary/10 text-xs rounded-full">
                            Pain Relief
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                      <MessageSquareIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
                        <p className="font-semibold text-primary">
                          "How much does teeth whitening cost?"
                        </p>
                      </div>
                      <div className="bg-muted/30 rounded-2xl p-4">
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          Compare treatment options, pricing ranges, and find
                          the best whitening solution for your budget
                        </p>
                        <div className="flex gap-2 mt-3">
                          <span className="text-primary px-2 py-1 bg-primary/10 text-xs rounded-full">
                            Cost Analysis
                          </span>
                          <span className="text-primary px-2 py-1 bg-primary/10 text-xs rounded-full">
                            Treatment Options
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                      <MessageSquareIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
                        <p className="font-semibold text-primary">
                          "When should I replace my filling?"
                        </p>
                      </div>
                      <div className="bg-muted/30 rounded-2xl p-4">
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          Learn about filling lifespan, warning signs of wear,
                          and replacement timing guidance
                        </p>
                        <div className="flex gap-2 mt-3">
                          <span className="text-primary px-2 py-1 bg-primary/10 text-xs rounded-full">
                            Preventive Care
                          </span>
                          <span className="text-primary px-2 py-1 bg-primary/10 text-xs rounded-full">
                            Maintenance
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side - AI Illustration */}
          <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500">
            <div className="flex items-center justify-center h-full">
              <Image
                src={"/confused.png"}
                alt="AI Illustration"
                width={500}
                height={500}
                className="w-full h-auto max-w-lg object-contain"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToAsk;
