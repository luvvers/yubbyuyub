"use client";

import { CountryContext } from "@/providers/country.provider";
import { useContext } from "react";

export const Country = ({ withCountry }: { withCountry?: boolean }) => {
  let { city, country } = useContext<any>(CountryContext);
  return (
    <>
      {withCountry ? (
        <span>
          {city}, {country}
        </span>
      ) : (
        <span>{city}</span>
      )}
    </>
  );
};
