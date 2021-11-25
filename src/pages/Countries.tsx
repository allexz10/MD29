import { Link } from 'react-router-dom';
import countriesData from '../data/CountriesData';

const Countries = () => (
  <div className="countries">
    {countriesData.map(({ title, id }) => (
      <div className="countries__button" key={id}>
        <Link className="countries__link" to={`/countrie/${id}`}>{title}</Link>
      </div>
    ))}
  </div>
);

export default Countries;
