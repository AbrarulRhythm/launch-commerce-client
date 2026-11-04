import CategoryNav from '../NavBar/CategoryNav';
import MobileCategoryNav from '../NavBar/MobileCategoryNav';
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return (
        <div className="header-wrap">
            {/* Top Nav */}
            <NavBar></NavBar>

            {/* Category Nav */}
            <div className="hidden lg:block">
                <CategoryNav></CategoryNav>
            </div>

            {/* Mobile Category Nav */}
            <div className="block lg:hidden">
                <MobileCategoryNav></MobileCategoryNav>
            </div>
        </div>
    );
};

export default Header;
