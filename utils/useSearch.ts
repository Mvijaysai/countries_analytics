import { CountryDetails } from "./useCountryDetails";
import { useState } from "react";

export const useSearch = (originalData: CountryDetails[], setFilteredData: (data: CountryDetails[]) => void) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term: string) => {
    setSearchTerm(term.toLowerCase());

    console.warn({
      setFilteredData
    });
    
    if (term === "") {
      setFilteredData(originalData);
    } else {
      const filtered = originalData.filter(
        (country) =>
          country.name.common.toLowerCase().includes(term) ||
          (country.capital && country.capital[0].toLowerCase().includes(term))
      );
      setFilteredData(filtered);
    }
  };

  return { searchTerm, handleSearch };
};
