import { createContext, useContext, useEffect, useState } from "react";

const AppDataContext = createContext();

export function AppDataProvider({ children }) {
  const [timeline, setTimeline] = useState([]);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    // Fetch timeline data
    fetch('/timelineData.json')
      .then(res => res.json())
      .then(setTimeline);

    // Fetch gallery data
    fetch('/gallary.json')
      .then(res => res.json())
      .then(setGallery);
  }, []);

  return (
    <AppDataContext.Provider value={{ timeline, gallery }}>
      {children}
    </AppDataContext.Provider>
  );
}

export function useAppData() {
  return useContext(AppDataContext);
}