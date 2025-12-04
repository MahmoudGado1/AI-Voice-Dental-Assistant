import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { BrainIcon, MessageSquareIcon } from "lucide-react";
import { getUserAppointmentStats } from "@/lib/actions/appointments";

import Link from "next/link";
import { Button } from "../ui/button";
import { format } from "date-fns";

async function DentalHealthOverview() {
  const appointmentStats = await getUserAppointmentStats();
  const user = await currentUser();

  return (
    // keep the card full width of its column
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BrainIcon className="size-5 text-primary" />
          Your Dental Health
        </CardTitle>
        <CardDescription>Keep track of your dental care journey</CardDescription>
      </CardHeader>

      <CardContent>
        {/* stats grid (stays responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-muted/30 rounded-xl">
            <div className="text-2xl mb-1 font-bold text-primary">
              {appointmentStats.completedAppointments}
            </div>
            <div className="text-sm text-muted-foreground">Completed Visits</div>
          </div>

          <div className="text-center p-4 bg-muted/30 rounded-xl">
            <div className="text-2xl mb-1 font-bold text-primary">
              {appointmentStats.totalAppointments}
            </div>
            <div className="text-sm text-muted-foreground">Total Appointments</div>
          </div>

          <div className="text-center p-4 bg-muted/30 rounded-xl">
            <div className="text-2xl mb-1 font-bold text-primary">
              {format(new Date(user?.createdAt!), "MMM yyyy")}
            </div>
            <div className="text-sm text-muted-foreground">Member Since</div>
          </div>
        </div>

        {/* CTA box */}
        <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="size-10 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
              <MessageSquareIcon className="size-5 text-primary" />
            </div>

            <div className="flex-1">
              <h4 className="font-semibold text-primary mb-1">Ready to get started?</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Book your first appointment or try our AI voice assistant for instant dental advice.
              </p>

              {/* buttons: stacked on mobile, inline on sm+ */}
              <div className="flex flex-col sm:flex-row gap-2">
                <Link href="/voice">
                  <Button size="sm" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                    Try AI Assistant
                  </Button>
                </Link>

                <Link href="/appointments">
                  <Button size="sm" variant="outline" className="w-full sm:w-auto">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default DentalHealthOverview;
