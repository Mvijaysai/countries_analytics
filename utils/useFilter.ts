
import { CountryDetails } from "./useCountryDetails";

export const useFilter = (originalData: CountryDetails[], setFilteredData: (data: CountryDetails[]) => void) => {
  const handleRegionFilter = (selectedRegion: string) => {
    if (selectedRegion === "") {
      setFilteredData(originalData);
    } else {
      const filtered = originalData.filter((country) => country.region === selectedRegion);
      setFilteredData(filtered);
    }
  };
  return { handleRegionFilter };
};
