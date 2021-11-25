import { Link } from 'react-router-dom';
import './Page.scss';

const NotFound = () => (
  <div className="notfound">
    <div className="notfound__content">
      <h1 style={{ fontSize: '40px', color: 'white' }}>Oops that page can’t be found</h1>
      <span style={{
        fontSize: '50px', color: 'white', textAlign: 'center', marginBottom: '10px',
      }}
      >
        404 error
      </span>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link className="countrie__link--back" to="/home">
          home
        </Link>
      </div>

    </div>
  </div>
);
export default NotFound;
