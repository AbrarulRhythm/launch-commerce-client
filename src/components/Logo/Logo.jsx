import { Link } from 'react-router';
import logoDark from '../../assets/main-logo-dark.png';
import logoLight from '../../assets/main-logo-light.png';

const Logo = ({ title, logoType }) => {
    return (
        <Link to="/" className="hover:opacity-75 duration-150" title={title}>
            <img src={logoType === 'light' ? logoLight : logoDark} alt={title} />
        </Link>
    );
};

export default Logo;
