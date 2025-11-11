function Navbar () {
    return (
        <div className="container mx-auto flex justify-between items-center py-2">
            <img src="/logo.png" alt="logo"height="40px" width="106px" />
            
            <div className="flex gap-4 items-center">
                <a href="#home" className="hover:underline">Home</a>
                <a href="#about" className="hover:underline">About me</a>
                <a href="#skills" className="hover:underline">Skills</a>
                <a href="#portfolio" className="hover:underline">Portfolio</a>
            </div>

            <button className="border border-[#000000] px-8 py-4 text-[#ff0303] rounded-md">
                Contact Me
            </button>
        </div>
    );
}

export default Navbar