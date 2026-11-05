const SectionTitle = ({ title }) => {
    return (
        <div className="text-center mb-12">
            <h2
                className="w-fit mx-auto text-2xl md:text-3xl lg:text-4xl text-dark-08 pb-3 md:pb-3.5 lg:pb-4 relative 
            before:content-[''] before:absolute before:bottom-0 before:w-full before:h-0.5
            before:bg-linear-to-r before:from-theme-primary/0 before:via-theme-primary before:to-theme-primary/0"
            >
                {title}
            </h2>
        </div>
    );
};

export default SectionTitle;
