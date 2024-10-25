import React from "react";

const Phones = ({ title, data }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {data.map((phone) => (
          <li key={phone.id}>
            {phone.name} - State: {phone.state}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Phones;
