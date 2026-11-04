import { IoSearchOutline } from 'react-icons/io5';
import Logo from '../../../components/Logo/Logo';
import { Link } from 'react-router';
import { LuUserRound } from 'react-icons/lu';
import { BsCart2 } from 'react-icons/bs';

const NavBar = () => {
    return (
        <div className="bg-white py-6">
            <div className="container">
                <div className="flex flex-wrap -mx-3 justify-between items-center">
                    {/* Search Box */}
                    <div className="w-4/12 px-3 hidden md:block">
                        <div className="relative">
                            <input
                                type="text"
                                className="py-3.5 px-6 bg-white border border-dark-03 rounded-xl focus:outline-0 focus:border-theme-primary w-full"
                                placeholder="Search..."
                            />
                            <div className="absolute top-[50%] right-4 translate-[-50%]">
                                <IoSearchOutline className="text-xl" />
                            </div>
                        </div>
                    </div>

                    {/* Logo */}
                    <div className="w-4/12 px-3 flex justify-center">
                        <Logo title="Launch Commerse"></Logo>
                    </div>

                    {/* Card & User */}
                    <div className="w-4/12 px-3">
                        <div className="hidden md:flex space-x-4 justify-end">
                            <Link
                                to="/"
                                className="flex items-center space-x-1 font-medium text-dark-08 hover:text-theme-primary duration-150"
                            >
                                <div>
                                    <LuUserRound className="text-xl" />
                                </div>
                                <span>Login</span>
                            </Link>
                            <Link
                                to="/"
                                className="h-12 w-12 flex justify-center items-center bg-dark-08 text-white rounded-full hover:bg-theme-primary hover:text-white duration-300 relative"
                            >
                                <BsCart2 className="text-xl" />
                                <span className="text-[13px] text-white absolute bg-theme-primary w-4.5 h-4.5 text-center rounded-full font-medium -top-1 right-0">
                                    0
                                </span>
                            </Link>
                        </div>

                        {/* Mobile Search Box */}
                        <div className="hidden justify-end">
                            <div className="flex items-center justify-center w-10 h-10 border border-dark-03 rounded-full4">
                                <IoSearchOutline className="text-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
