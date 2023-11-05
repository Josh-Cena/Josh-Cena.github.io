import { useEffect, useRef } from "react";
import { useLocation, type Location } from "react-router-dom";

export default function RouteListener(): null {
  const location = useLocation();
  const prevLocation = useRef<Location | null>(null);
  useEffect(() => {
    if (prevLocation.current?.pathname === location.pathname) return;
    prevLocation.current = location;
    if (location.hash) {
      setTimeout(() => {
        document
          .getElementById(decodeURIComponent(location.hash.substring(1)))
          ?.scrollIntoView();
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return null;
}
