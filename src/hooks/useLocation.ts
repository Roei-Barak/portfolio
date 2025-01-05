import { useState, useEffect } from 'react';

export function useLocation() {
  const [location, setLocation] = useState('');

  useEffect(() => {
    const updateLocation = () => {
      setLocation(window.location.hash.slice(1) || '');
    };

    window.addEventListener('hashchange', updateLocation);
    updateLocation();

    return () => window.removeEventListener('hashchange', updateLocation);
  }, []);

  return location;
}