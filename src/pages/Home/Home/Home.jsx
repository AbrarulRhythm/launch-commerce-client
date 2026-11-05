import Banner from '../Banner/Banner';
import TopCategories from '../TopCategories/TopCategories';

const Home = () => {
    return (
        <>
            {/* Hero Banner Slider */}
            <Banner></Banner>

            {/* Top Categories */}
            <section className="top-categories pt-10 lg:pt-15 pb-10 lg:pb-15">
                <TopCategories></TopCategories>
            </section>
        </>
    );
};

export default Home;
