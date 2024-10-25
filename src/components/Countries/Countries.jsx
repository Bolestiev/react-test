const Countries = ({ title, data }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {data.map((country) => (
          <li key={country.id}>
            {country.name} - Capital: {country.capital}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
