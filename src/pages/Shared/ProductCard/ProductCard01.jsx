import { Link } from 'react-router';
import AppImage from '../../../components/AppImage/AppImage';
import { BsBag } from 'react-icons/bs';
import { IoMdHeartEmpty } from 'react-icons/io';

const ProductCard01 = () => {
    return (
        <div className="bg-white border border-dark-03 rounded-xl p-2.5 ">
            {/* Product Image */}
            <div className="border border-dark-03 overflow-hidden rounded-xl relative mb-3.5">
                <Link to="/">
                    <AppImage className="w-full"></AppImage>
                </Link>

                <div className="flex justify-end items-end gap-2 absolute top-2 right-2">
                    <span className="w-fit block py-0.5 px-1.5 rounded-sm text-[10px] text-white bg-amber-400">New Arrival</span>
                    {/* <span className="w-fit block py-0.5 px-1.5 rounded-sm text-[10px] text-white bg-green-600">Save 10%</span> */}
                </div>

                <button
                    className="w-7 h-7 bg-white border border-dark-03 flex justify-center items-center rounded-full 
                absolute bottom-2 right-2 cursor-pointer 
                text-red-400 hover:bg-red-500 hover:border-red-500 hover:text-white duration-200 active:scale-80"
                >
                    <IoMdHeartEmpty />
                </button>
            </div>

            {/* Product Desc */}
            <div>
                <h4 className="mb-1.5">
                    <Link to="/" className="text-dark-08 hover:text-theme-primary duration-200">
                        Rose Fairy Light
                    </Link>
                </h4>

                <div className="flex items-center gap-2.5 mb-4">
                    <span className="text-dark-07 line-through text-[13px]">1400 TK</span>
                    <span className="text-theme-primary font-semibold">790 TK</span>
                </div>

                <button className="w-full px-3 py-2 flex items-center justify-center gap-2.5 bg-dark-02 text-dark-08 rounded-lg text-sm cursor-pointer hover:bg-dark-08 hover:text-white active:scale-95 duration-200">
                    <BsBag className="text-[15px]" /> Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard01;
