import { Link } from 'react-router';
import logoDark from '../../assets/main-logo-dark.png';

const Logo = ({ title }) => {
    return (
        <Link to="/" className="hover:opacity-75 duration-150" title={title}>
            <img src={logoDark} alt={title} />
        </Link>
    );
};

export default Logo;
