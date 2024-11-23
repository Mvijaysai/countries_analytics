import React from "react";

interface SearchCountryByNameProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}

const SearchCountryByName: React.FC<SearchCountryByNameProps> = ({ searchTerm, onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div>
      <label>Search by Country/Capital : </label>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Country or capital" />
    </div>
  );
};

export default SearchCountryByName;
