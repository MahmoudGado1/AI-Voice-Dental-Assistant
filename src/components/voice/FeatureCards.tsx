import React from "react";
import { Card, CardContent } from "../ui/card";
import { Calendar, Mic, Shield } from "lucide-react";

function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      <Card className="border border-accent-foreground/20 hover:shadow-2xl hover:shadow-primary/10 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300">
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-md">
                <Mic className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-lg font-semibold">How to Use</h2>
            </div>
            <p className="text-muted-foreground text-sm">
              Simple steps to get started with voice assistance
            </p>
          </div>
          <div className="space-y-3 mt-5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Click the microphone button to start talking</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Ask questions about dental health and treatments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Get instant voice responses from the AI</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>View conversation transcript in real-time</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="border border-accent-foreground/20 hover:shadow-2xl hover:shadow-primary/10 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300">
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-md">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-lg font-semibold">Features</h2>
            </div>
            <p className="text-muted-foreground text-sm">
              Advanced capabilities for dental care
            </p>
          </div>
          <div className="space-y-3 mt-5">
            <div className="flex items-center gap-2 bg-gradient-to-br from-accent-foreground/2 to-accent-foreground/5  rounded-md p-3">
              <div className="p-2 bg-primary/10 rounded-md">
                <Mic className="w-6 h-6 text-primary" />
              </div>
              <span>Real-time Voice Recognition</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-br from-accent-foreground/2 to-accent-foreground/5  rounded-md p-3">
              <div className="p-2 bg-primary/10 rounded-md">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <span>AI-Powered Responses</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-br from-accent-foreground/2 to-accent-foreground/5  rounded-md p-3">
              <div className="p-2 bg-primary/10 rounded-md">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <span>Conversation History</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default FeatureCards;
