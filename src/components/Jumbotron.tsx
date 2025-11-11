function Jumbotron(){
    return(
    <div id="home" className="bg-[black] text-white ">
        <div className="container mx-auto py-24 gap-12">
            <div className="grid grid-cols-2">
                {/* Left */}
                <div className="flex flex-col justify-center space-y-4">
                    <p className="text-xl font-bold">Hey, my name is Timothy Y Wewengkang</p>
                    <h1 className="text-4xl">I am a <span className="text-[red]">Web Development student</span></h1>
                    <p className="text-xl">I am studying fronted end and backend development</p>

                    <a
                        href="#contact"
                        aria-label="Go to contact section"
                        className="inline-block border border-white text-white px-8 py-4 rounded-lg w-fit transition transform hover:scale-105 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                        Get In Touch
                    </a>
                </div>
                {/* Right */}
                <div>
                    <img className="justify-center"src="/thumbnail.png" alt="thumbnail" />
                </div>
            </div>
        </div>
    </div>
    );
}

export default Jumbotron