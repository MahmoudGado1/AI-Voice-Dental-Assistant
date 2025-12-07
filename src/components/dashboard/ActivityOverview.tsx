import React from "react";
import DentalHealthOverview from "./DentalHealthOverview";
import NextAppointment from "./NextAppointment";

function ActivityOverview() {
  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-1 max-md:grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-2">
          <DentalHealthOverview />
        </div>

        <div className="col-span-1">
          <NextAppointment />
        </div>
      </div>
    </div>
  );
}

export default ActivityOverview;
