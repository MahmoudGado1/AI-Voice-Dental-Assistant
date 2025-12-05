import { APPOINTMENT_TYPES } from "@/lib/utils";
import React from "react";
import { Button } from "../ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import DoctorInfo from "./DoctorInfo";

interface BookingConfirmationStepProps {
  selectedDentistId: string;
  selectedDate: string;
  selectedTime: string;
  selectedType: string;
  isBooked: boolean;
  onBack: () => void;
  onConfirm: () => void;
  onModify: () => void;
}

function BookingConfirmationStep({
  selectedDentistId,
  selectedDate,
  selectedTime,
  selectedType,
  isBooked,
  onBack,
  onConfirm,
  onModify,
}: BookingConfirmationStepProps) {
  const appointmentType = APPOINTMENT_TYPES.find((t) => t.id === selectedType);
  return (
    <div className="space-y-6">
      <div className="flex items-center mb-6 gap-4">
        <Button onClick={onBack} variant="ghost">
          <ChevronLeftIcon className="w-4 h-4 mr-2" />
          Back
        </Button>
        <h2 className="text-2xl font-semibold">Confirm Your Appointment</h2>
      </div>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Appointment Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <DoctorInfo doctorId={selectedDentistId} />

          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div>
              <p className="text-sm text-muted-foreground">Appointment Type</p>
              <p className="font-medium">{appointmentType?.name}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Duration</p>
              <p className="font-medium">{appointmentType?.duration}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Date</p>
              <p className="font-medium">
                {new Date(selectedDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Time</p>
              <p className="font-medium">{selectedTime}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-medium">Dental Center</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Cost</p>
              <p className="font-medium text-primary">
                {appointmentType?.price}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center gap-4">
        <Button variant={"outline"} onClick={onModify}>
          Modify Appointment
        </Button>
        <Button onClick={onConfirm} className="bg-primary" disabled={isBooked}>
          {isBooked ? "Booking..." : "Confirm Booking"}
        </Button>
      </div>
    </div>
  );
}

export default BookingConfirmationStep;
