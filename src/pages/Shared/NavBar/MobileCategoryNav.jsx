import { useState } from 'react';
import { HiOutlineBars2 } from 'react-icons/hi2';
import { RiCloseLargeLine } from 'react-icons/ri';
import { Link } from 'react-router';

const MobileCategoryNav = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="bg-dark-08 text-dark-01 relative">
            <div className="container">
                <div onClick={() => setToggle(!toggle)} className="flex justify-center items-center w-11 h-11 mx-auto">
                    {toggle ? <RiCloseLargeLine className="text-xl" /> : <HiOutlineBars2 className="text-3xl" />}
                </div>
            </div>

            {/* Category Menu */}
            <div>
                <div
                    onClick={() => setToggle(false)}
                    className={`${toggle ? 'visible opacity-100' : ' invisible opacity-0'} w-full h-screen bg-black/20 z-10 absolute top-full duration-200`}
                ></div>
                <div className={`${toggle ? 'left-0' : '-left-62.5'} w-62.5 bg-dark-08 h-screen absolute top-full z-20 duration-300`}>
                    <ul className="flex flex-col space-y-3.5 p-4">
                        <li>
                            <Link to="/">Yellow</Link>
                        </li>
                        <li>
                            <Link to="/">Green</Link>
                        </li>
                        <li>
                            <Link to="/">Dark Case</Link>
                        </li>
                        <li>
                            <Link to="/">Combo Offer</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MobileCategoryNav;
