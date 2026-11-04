import { Link } from 'react-router';

const CategoryNav = () => {
    return (
        <div className="bg-dark-08 text-dark-01">
            <div className="container">
                <ul className="flex items-center justify-center">
                    <li>
                        <Link
                            to="/"
                            className="py-3 px-4.5 inline-block font-medium italic hover:underline underline-offset-4 active:scale-90 active:text-dark-03 duration-150"
                        >
                            Yellow
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className="py-3 px-4.5 inline-block font-medium italic hover:underline underline-offset-4 active:scale-90 active:text-dark-03 duration-150"
                        >
                            Green
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className="py-3 px-4.5 inline-block font-medium italic hover:underline underline-offset-4 active:scale-90 active:text-dark-03 duration-150"
                        >
                            Dark Case
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className="py-3 px-4.5 inline-block font-medium italic hover:underline underline-offset-4 active:scale-90 active:text-dark-03 duration-150"
                        >
                            Combo Offer
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CategoryNav;
