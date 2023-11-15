"use client";

import { createContext, useEffect, useState } from "react";

export const CountryContext = createContext({});

export default function CountryProvider({ children }: any) {
  const [city, setCity] = useState<string>();
  const [country, setCountry] = useState<string>();
  useEffect(() => {
    fetch(
      "https://ipgeolocation.abstractapi.com/v1/?api_key=" +
        process.env.IP_GEOLOCATION_API_KEY
    )
      .then((response) => response.json())
      .then((data) => {
        setCity(data?.city);
        setCountry(data?.country);
      });
  }, []);
  return (
    <CountryContext.Provider value={{ city, country }}>
      {children}
    </CountryContext.Provider>
  );
}
