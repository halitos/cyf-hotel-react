import React, { useState } from "react";
import SearchTableRow from "./SearchTableRow";
import CustomerProfie from "./CustomerProfie";

const SearchResults = ({ results }) => {
  const [selectedProfile, setSelectedProfile] = useState("");

  const selectId = customerId => {
    setSelectedProfile(customerId);
  };
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">E-mail</th>
            <th scope="col">Room No</th>
            <th scope="col">Check-in Date</th>
            <th scope="col">Check-out Date</th>
            <th scope="col">Numer of Nights</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {results.map((booking, index) => {
            return (
              <SearchTableRow
                booking={booking}
                key={index}
                selectId={selectId}
              />
            );
          })}
        </tbody>
      </table>
      <CustomerProfie id={selectedProfile} />
    </>
  );
};

export default SearchResults;
