import AppImage from '../../../components/AppImage/AppImage';
import offerBanner from '../../../assets/banner/offer-banner-lg.png';
import offerBannerSm from '../../../assets/banner/offer-banner-sm.png';

const OfferBanner = () => {
    return (
        <div className="container">
            <div className="overflow-hidden">
                {/* Banner for desktop */}
                <AppImage src={offerBanner} fallbackSrc={offerBanner} className="w-full hidden md:block rounded-xl" alt="Offer"></AppImage>

                {/* Banner for mobile */}
                <AppImage
                    src={offerBannerSm}
                    fallbackSrc={offerBannerSm}
                    className="w-full block md:hidden rounded-xl"
                    alt="Offer"
                ></AppImage>
            </div>
        </div>
    );
};

export default OfferBanner;
