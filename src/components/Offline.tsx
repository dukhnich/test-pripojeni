import { useState } from 'react';

export const Offline = () => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  if (isOnline) {
    return (
      <p>Všechno v pořádku</p>
    )
  }

  return (
    <p>Jste offline!</p>
  );
};

export default Offline;