import { Link } from 'react-router';
import Logo from '../../../components/Logo/Logo';
import { SiThreads } from 'react-icons/si';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="py-8 lg:py-0">
                <div className="container">
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-6/12 lg:w-3/12 px-3">
                            <div className="py-4 lg:py-20">
                                <div className="mb-4">
                                    <Logo title="Launch Commerse" logoType="light"></Logo>
                                </div>
                                <p className="text-dark-03 mb-4.5">Enter your brand tag line here.</p>
                                <ul className="text-dark-03 space-y-4.5">
                                    <li className="flex items-center gap-2.5">
                                        <div className="flex justify-center items-center text-xl">
                                            <i className="fi fi-rs-marker"></i>
                                        </div>
                                        <span className="text-sm">Laxmisagar, BBSR, Bhubaneshwar - 751006</span>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <div className="flex justify-center items-center text-xl">
                                            <i className="fi fi-rr-envelope"></i>
                                        </div>
                                        <a href="/" className="text-sm">
                                            web@launchcommerse.com
                                        </a>
                                    </li>
                                </ul>
                                <div className="mt-12 bg-white rounded-md px-9 lg:px-6 w-fit lg:w-full py-5 flex items-center justify-center gap-4">
                                    <div className="text-dark-09 flex items-center justify-center text-[27px]">
                                        <i className="fi fi-rr-phone-call"></i>
                                    </div>
                                    <div>
                                        <span className="text-dark-06 text-sm mb-1.5 block">Call for any inquiries.</span>
                                        <h1 className="text-dark-09 text-2xl font-medium">01234-567810</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-3/12 px-3">
                            <div className="py-4 lg:py-20 lg:ml-20">
                                <h3 className="text-xl font-medium mb-3 lg:mb-6 text-white">Quick Links</h3>
                                <ul className="footer-link">
                                    <li>
                                        <Link to="/">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/">All Products</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Locations Map</Link>
                                    </li>
                                    <li>
                                        <Link to="/">FAQ</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-2/12 px-3">
                            <div className="py-4 lg:py-20">
                                <h3 className="text-xl font-medium mb-3 lg:mb-6 text-white">Our Policies</h3>
                                <ul className="footer-link">
                                    <li>
                                        <Link to="/">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Return Policy</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Exchange Request</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-4/12 px-3">
                            <div className="py-4 lg:py-20 lg:ml-8 2xl:ml-0">
                                <h3 className="text-xl font-medium mb-3 lg:mb-6 text-white">Newsletter</h3>
                                <p className="text-dark-03">Subscribe to our weekly Newsletter and receive updates via email.</p>
                                <form className="mt-6 relative flex items-center">
                                    <input
                                        type="email"
                                        className="w-full bg-white h-14 py-4 px-6 text-dark-06 focus:outline-0 border border-transparent focus:border-theme-primary rounded-l-md"
                                        placeholder="Enter your email"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="bg-theme-primary text-white h-14 flex justify-center items-center rounded-r-md px-6 text-xl"
                                        aria-label="Newsletter update"
                                    >
                                        <i className="fi fi-rs-paper-plane"></i>
                                    </button>
                                </form>
                                <ul className="text-dark-03 mt-6 flex items-center gap-2">
                                    <li>
                                        <a
                                            href="#"
                                            target="_blank"
                                            aria-label="Visit our Facebook page"
                                            className="w-10 h-10 bg-dark-07/12 flex items-center justify-center rounded-sm hover:bg-theme-primary duration-300"
                                        >
                                            <i className="fi fi-brands-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            target="_blank"
                                            aria-label="Visit our Messenger"
                                            className="w-10 h-10 bg-dark-07/12 flex items-center justify-center rounded-sm hover:bg-theme-primary duration-300"
                                        >
                                            <i className="fi fi-brands-facebook-messenger"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            target="_blank"
                                            aria-label="Visit our Inatagram Profile"
                                            className="w-10 h-10 bg-dark-07/12 flex items-center justify-center rounded-sm hover:bg-theme-primary duration-300"
                                        >
                                            <i className="fi fi-brands-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            target="_blank"
                                            aria-label="Visit our Whatsapp"
                                            className="w-10 h-10 bg-dark-07/12 flex items-center justify-center rounded-sm hover:bg-theme-primary duration-300"
                                        >
                                            <i className="fi fi-brands-whatsapp"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            target="_blank"
                                            aria-label="Visit our YouTube Channel"
                                            className="w-10 h-10 bg-dark-07/12 flex items-center justify-center rounded-sm hover:bg-theme-primary duration-300"
                                        >
                                            <i className="fi fi-brands-youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            target="_blank"
                                            aria-label="Visit our Threads Profile"
                                            className="w-10 h-10 bg-dark-07/12 flex items-center justify-center rounded-sm hover:bg-theme-primary duration-300"
                                        >
                                            <SiThreads />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 md:py-6 px-4 border-t border-dark-08 text-center">
                <p className="text-dark-04 text-sm md:text-base">
                    Copyright &copy; 2026{' '}
                    <Link to="/" className="text-white hover:text-theme-primary duration-300">
                        Launch Commercee
                    </Link>
                    . All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
