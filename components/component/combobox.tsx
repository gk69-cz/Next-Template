import React, { useState } from 'react';
import airportsData from '../../lib/airports.json';

const Combobox = ({ title , onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedAirport, setSelectedAirport] = useState(null);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    if (value.length >= 3) {
        const filteredResults = airportsData.filter((airport) =>
          airport.name.toLowerCase().includes(value.toLowerCase())
        );
        setSearchResults(filteredResults);
      
    } else {
      setSearchResults([]);
    }
  };

  const handleSelectAirport = (airport) => {
    setSelectedAirport(airport);
    setSearchTerm(airport.name);
    setSearchResults([]);
    onSelect(airport); // Call onSelect function with selected airport
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={title}
        value={selectedAirport ? selectedAirport?.name : searchTerm}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
      />
     {searchResults.length > 0 && (
        <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg max-h-36 overflow-y-auto">
          <ul className="py-1">
            {searchResults.map((airport) => (
              <li
                key={airport.code}
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