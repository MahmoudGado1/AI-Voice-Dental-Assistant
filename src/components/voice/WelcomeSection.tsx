import { Mic } from 'lucide-react'
import React from 'react'

function WelcomeSection() {
  return (
        <div className="space-y-6">
          <div className="flex items-center justify-between bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8 rounded-xl border border-primary/20">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full border border-primary/20 ">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary">
                  Voice Assistant Ready
                </span>
              </div>
              <h1 className="text-3xl font-bold">AI Voice Assistant</h1>
              <p className="text-muted-foreground">
                Talk to your AI dental assistant using natural voice commands.
                Get instant advice and professional guidance.
              </p>
            </div>

            <div className="hidden sm:block">
              <div className="w-32 h-32 flex justify-center items-center bg-gradient-to-br from-primary/20 to-primary/10 rounded-full animate-pulse">
                <Mic className="w-16 h-16 text-primary" />
              </div>
            </div>
          </div>
        </div>
  )
}

export default WelcomeSection
