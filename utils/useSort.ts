import { CountryDetails } from "./useCountryDetails";

export const useSort = (filteredData: CountryDetails[], setFilteredData: (data: CountryDetails[]) => void) => {
  const handleSort = (order: string) => {
    if (order === "asc") {
      const sorted = [...filteredData].sort((a, b) => a.population - b.population);
      setFilteredData(sorted);
    } else if (order === "desc") {
      const sorted = [...filteredData].sort((a, b) => b.population - a.population);
      setFilteredData(sorted);
    } else {
      setFilteredData(filteredData);
    }
  };

  return { handleSort };
};
