
import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import { CalendarIcon, MessageSquareIcon } from "lucide-react";
import Link from "next/link";

function MainAction() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mb-12">
      <Card className="border border-accent-foreground/20 hover:shadow-2xl hover:shadow-primary/10 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300">
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="py-1 px-3 bg-primary/10 rounded-md">
                <Image
                  src={"/audio.png"}
                  alt="Logo"
                  width={32}
                  height={32}
                  className="w-10"
                />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-bold">AI Voice Assistant </h2>
                <p className="text-muted-foreground text-sm">
                  Get instant dental advice through voice calls
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-3 mt-5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>24/7 availability</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Professional dental guidance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Instant pain relief advice</span>
            </div>
          </div>
          <Link
            href="/voice"
            className={buttonVariants({
              variant: "default",
              className:
                "w-full mt-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300",
            })}
          >
            <MessageSquareIcon className="mr-2 h-5 w-5" />
            Start Voice Call
          </Link>
        </CardContent>
      </Card>
      <Card className="border border-accent-foreground/20 hover:shadow-2xl hover:shadow-primary/10 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300">
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="py-1 px-3 bg-primary/10 rounded-md">
                <Image
                  src={"/calendar.png"}
                  alt="Logo"
                  width={32}
                  height={32}
                  className="w-10"
                />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-bold">Book Appointment</h2>
                <p className="text-muted-foreground text-sm">
                  Schedule with verfied dentists in your area
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-3 mt-5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Verfied dental professional</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Flexable scheduling</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Instant confirmation</span>
            </div>
          </div>
          <Link href="/appointments">
            <Button
              variant="outline"
              className="w-full mt-6 border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 font-semibold py-3 rounded-xl transition-all duration-300"
            >
              <CalendarIcon className="mr-2 h-5 w-5" />
              Schedule Now
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

export default MainAction;
