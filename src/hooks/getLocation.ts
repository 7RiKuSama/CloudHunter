import { useState, useEffect } from "react";

const getLocation = (): Promise<{ longitude: number; latitude: number }> => {
  const options: PositionOptions = {
    timeout: 25000,
    maximumAge: 30000,
    enableHighAccuracy: true,
  };

  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          resolve({ longitude, latitude });
        },
        () => {
          reject("Unable to retrieve your location");
        },
        options
      );
    }
  });
};

const useLocation = () => {
  const [location, setLocation] = useState<{
    longitude: number | null;
    latitude: number | null;
    error: string | null;
  }>({ longitude: null, latitude: null, error: null });

  const fetchLocation = async () => {
    try {
      const { longitude, latitude } = await getLocation();
      setLocation({ longitude, latitude, error: null });
    } catch (error) {
      const errorString = typeof error === "string" ? error : "Unknown error";
      setLocation({ longitude: null, latitude: null, error: errorString });
    }
  };

  // Automatically fetch location when the hook is used
  useEffect(() => {
    fetchLocation().catch((error) => console.error("Error fetching location:", error));
  }, []);

  return { location, fetchLocation };
};

export default useLocation;