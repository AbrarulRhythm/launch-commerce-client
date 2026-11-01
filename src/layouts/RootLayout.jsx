import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';

const RootLayout = () => {
    return (
        <div className="wrap">
            {/* Header */}
            <header>
                <NavBar></NavBar>
            </header>
            {/* Header End */}

            {/* ========================= Mina ========================= */}
            <main className="site-main">
                <Outlet></Outlet>
            </main>
            {/* ========================= Mina End ========================= */}

            {/* Footer */}
            <footer>
                <Footer></Footer>
            </footer>
            {/* Footer End */}
        </div>
    );
};

export default RootLayout;
