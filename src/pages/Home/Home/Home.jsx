import Banner from '../Banner/Banner';
import OfferBanner from '../Banner/OfferBanner';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import TopCategories from '../TopCategories/TopCategories';

const Home = () => {
    return (
        <>
            {/* Hero Banner Slider */}
            <Banner></Banner>

            {/* Top Categories */}
            <section className="top-categories pt-10 lg:pt-15">
                <TopCategories></TopCategories>
            </section>
            {/* pt-10 lg:pt-15 pb-4 lg:pb-9 */}
            {/* Featured Products */}
            <section className="featured-products pt-10 lg:pt-15">
                <FeaturedProducts></FeaturedProducts>
            </section>

            {/* Offer Banner */}
            <section className="offer-banner pt-10 lg:pt-15">
                <OfferBanner></OfferBanner>
            </section>
        </>
    );
};

export default Home;
