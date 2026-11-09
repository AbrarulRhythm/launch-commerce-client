import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ProductCard01 from '../../Shared/ProductCard/ProductCard01';

const FeaturedProducts = () => {
    return (
        <div className="container">
            <SectionTitle title="Featured Products"></SectionTitle>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 lg:gap-5">
                <ProductCard01></ProductCard01>
                <ProductCard01></ProductCard01>
                <ProductCard01></ProductCard01>
                <ProductCard01></ProductCard01>
                <ProductCard01></ProductCard01>
                <ProductCard01></ProductCard01>
            </div>
        </div>
    );
};

export default FeaturedProducts;
