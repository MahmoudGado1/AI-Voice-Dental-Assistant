import React from "react";
import Navbar from "../Navbar";
import { CrownIcon, LockIcon, MicIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";

function ProPlanRequired() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto pt-24 px-6 py-8">
        <div className="relative mb-12 overflow-hidden">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8 rounded-3xl border border-primary/20">
            <div className="relative flex items-center justify-between z-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                  <LockIcon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">
                    Pro Feature
                  </span>
                </div>
                <div>
                  <h1 className="text-4xl font-bold mb-2">
                    Voice Assistant Access Required
                  </h1>
                  <p className="text-muted-foreground">
                    Upgrade to AI Pro or AI Basic to unlock unlimited voice
                    consultations with our AI dental assistant.
                  </p>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="w-32 h-32 rounded-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
                  <MicIcon className="text-primary w-16 h-16" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 max-w-2xl mx-auto">
          <CardContent className="relative p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-105 mx-auto transition-transform duration-300 mb-6">
              <LockIcon className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Upgrade Required</h3>
            <p className="text-muted-foreground mb-6">
              The voice assistant feature is availabel to AI Pro and AI Basic
              subscribers. Get instant dental advice through natural voice
              converstations.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">24/7 voice consultations</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Professional dental guidance</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Instant pain relief advice</span>
              </div>
            </div>

            <Link href={"/pro"}>
              <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <CrownIcon className="mr-2 h-5 w-5" />
                Upgrade to Pro
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ProPlanRequired;
