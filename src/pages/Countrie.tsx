import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import countriesData from '../data/CountriesData';
import './Page.scss';

type CountrieType = typeof countriesData[0];

const initialCountrie = {
  title: '',
  imgScr: '',
  text: '',
  id: 0,
};

const Countrie = () => {
  const [countrie, setCountrie] = useState<CountrieType>(initialCountrie);
  const navigate = useNavigate();
  const { id } = useParams<'id'>() as { id: string };

  const { length } = countriesData;

  useEffect(() => {
    if (!id) {
      navigate('../../404');
    }
    const matched = countriesData.find((item) => item.id === parseInt(id, 10));
    if (matched) {
      setCountrie(matched);
      return;
    }

    navigate('../../404');
  }, [id]);

  const { title, imgScr, text } = countrie;

  return (
    <div className="countrie">
      <div className="countrie__item">
        <Link
          className="countrie__link countrie__link--prev"
          to={`/countrie/${+id !== 1 ? +id - 1 : length}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          </svg>
        </Link>
        <div className="item__wrapper">
          <h3 style={{ fontSize: '30px', marginBottom: '20px' }}>{title}</h3>
          <img
            src={imgScr}
            alt={title}
            width="350px"
            height="240px"
            style={{ marginBottom: '15px' }}
          />
          <p
            style={{
              marginBottom: '20px',
              lineHeight: '1.4',
              height: '200px ',
            }}
          >
            {text}
          </p>
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <Link className="countrie__link--back" to="/countries">
              back
            </Link>
          </div>
        </div>

        <Link
          className="countrie__link countrie__link--next"
          to={`/countrie/${+id !== length ? +id + 1 : length - (length - 1)}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Countrie;
