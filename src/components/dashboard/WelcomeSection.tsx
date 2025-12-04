
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";

async function WelcomeSection() {
  const user = await currentUser();
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8 rounded-xl border border-primary/20">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full border border-primary/20 ">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">
              Online & Ready
            </span>
          </div>
          <h1 className="text-3xl font-bold">
            Good{" "}
            {new Date().getHours() < 12
              ? "morning"
              : new Date().getHours() < 18
              ? "afternoon"
              : "evening"}
            , {user?.firstName}!
          </h1>
          <p className="text-muted-foreground">
            Your personal AI dental assistant is ready to help you maintain
            perfect oral health.
          </p>
        </div>

        <div className="hidden sm:block">
          <div className="w-32 h-32 flex justify-center items-center bg-gradient-to-br from-primary/20 to-primary/10 rounded-full animate-pulse">
            <Image
              src={"/logo.png"}
              alt="Logo"
              width={32}
              height={32}
              className="w-15"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
