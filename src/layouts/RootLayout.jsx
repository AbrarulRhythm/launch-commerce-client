import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';

const RootLayout = () => {
    return (
        <div className="wrap">
            {/* Header */}
            <header>
                <Header></Header>
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
