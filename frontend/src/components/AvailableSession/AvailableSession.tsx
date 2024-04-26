import { useEffect, useState } from "react";
import "./index.css";

interface slotDetails {
  day: string;
  date: string;
  fulldate: string;
  slots: number;
  timings: string[];
}

interface AvailableSessionProps {
  data: slotDetails[];
}

export default function AvailableSession({ data }: AvailableSessionProps) {
  const [selectedDateSlot, setSelectedDateSlot] = useState<slotDetails>(
    data && data[0]
  );
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  useEffect(() => {
    console.log(typeof selectedDateSlot);
    console.log(selectedDateSlot.valueOf());
  }, [selectedDateSlot, selectedTimeSlot]);
  return (
    <div className="available-sessions-com">
      <h2 className="available-sessions-heading">Available Sessions</h2>
      <h3 className="available-sessions-sub-heading">
        {"Book 1:1 sessions from the below options"}
      </h3>
      <div className="date-slots">
        {data.map((slot: slotDetails, index: number) => (
          <span
            key={index}
            className="date-slot-item"
            onClick={() => {
              setSelectedDateSlot(slot);
            }}
          >
            <span className="slot-day">{slot?.day}</span>
            <span className="slot-date">{slot?.date}</span>
            <span className="available-slots">{slot?.slots} slots</span>
          </span>
        ))}
      </div>

      <h3 className="available-sessions-sub-heading">
        {"Available time slots"}
      </h3>
      <div className="time-slots">
        {selectedDateSlot.timings.map((timeslot: string, index: number) => (
          <span key={index} className="time-slot-item">
            {timeslot}
          </span>
        ))}
      </div>
      <button className="book-selected-slot-btn">
        Book session for {selectedDateSlot?.date}
      </button>
    </div>
  );
}
