import { useState, useEffect } from "react";

export const Offline = () => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  const handleOffline = () => {
    setIsOnline(false);
  };

  const handleOnline = () => {
    setIsOnline(true);
  };

  useEffect(() => {
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  if (isOnline) {
    return <p>Všechno v pořádku</p>;
  }

  return <p>Jste offline!</p>;
};

export default Offline;
