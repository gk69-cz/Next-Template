import React, { useState } from 'react';
import airportsData from '../../lib/airports.json';
import { Input } from '@/components/ui/input'

interface Airport {
  name: string;
  city: string;
  country: string;
  code: string;
  latitude: number;
  longitude: number;
  altitude: number;
}
interface ComboboxProps {
  title: string;
  onSelect: (selectedValue: Airport) => Airport; // Adjust the return type to Airport
}
const Combobox: React.FC<ComboboxProps> = ({ title, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Airport[]>([]);
  const [selectedAirport, setSelectedAirport] = useState<Airport | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    const filteredResults = airportsData.filter((airport) =>
      airport.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleSelectAirport = (airport: Airport) => {
    setSelectedAirport(airport);
    setSearchTerm(airport.name);
    setSearchResults([]);
    onSelect(airport); // Call onSelect function with selected airport
  };

  return (
    <div className="relative md:m-3">
      <Input
        type="text"
        placeholder={title}
        value={selectedAirport ? selectedAirport?.name : searchTerm}
        onChange={handleChange}
        className="m-2 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 md:m-0 "
      />
      {searchResults.length > 0 && (
        <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg max-h-36 overflow-y-auto">
          <ul className="py-1">
            {searchResults.map((airport) => (
              <li
                key={`${airport.name}-${airport.city}-${airport.longitude}=${airport.longitude}`}
                className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100"
                onClick={() => handleSelectAirport(airport)}
              >
                {airport.name} - {airport.city}, {airport.country}
              </li>
            ))}
          </ul>

        </div>
      )}
    </div>
  );
};

export default Combobox