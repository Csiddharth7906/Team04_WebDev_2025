import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

function TimelineDetails() {
   const [timeline, setTimeline] = useState([]);
 

  useEffect(() => {
    // Fetch timeline data
    fetch('/timelineData.json')
      .then(res => res.json())
      .then(setTimeline);

  }, []);
  const { id } = useParams();
  const year = timeline.find((item) => item.id === id);

  if (!year) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-gray-500">Timeline not found</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen p-4 md:p-6 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 text-center"> &nbsp;</h1>

      {/* Year and Subtitle */}
      <div className="mb-10 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-wide text-zinc-700 mb-2">{year.title}</h2>
        <p className="text-zinc-500 text-2xl font-medium">{year.subtitle}</p>
      </div>

      {/* Events list - Full width */}
      <div className="w-[150vh] space-y-6">
        {year.events.map((event, idx) => (
          <div key={idx} className={`flex items-start gap-4 ${
            idx % 2 === 1 ? 'flex-row-reverse' : ''
          }`}>
            {/* Content */}
            <div className="flex-1 py-8 px-4">
              <h3 className="text-2xl  font-semibold mb-1">{event.title}</h3>
              <p className="text-sm text-gray-500 mb-3 font-medium">{event.date}</p>
              <p className="text-gray-800 text-lg leading-relaxed">{event.description}</p>
            </div>

            {/* Image - Much bigger */}
            {event.image && (
              <div className="flex-shrink-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimelineDetails;