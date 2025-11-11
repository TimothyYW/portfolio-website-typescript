

function Testimonials() {
    const testimonial = {
        name: "Sarah Mitchell",
        role: "CEO, TechStart Inc.",
        image: "https://ui-avatars.com/api/?name=Sarah+Mitchell&background=3b82f6&color=fff&size=128",
        quote: "Working with this developer was an absolute pleasure. The project was delivered on time, exceeded our expectations, and the code quality was exceptional. Highly recommended for any web development project!"
    };

    return (
        <div id="testimonials" className="bg-[black] text-white">
            <div className="container mx-auto px-4 py-24 space-y-12">
                
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">Testimonials</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Don't just take my word for it. Here's what clients and colleagues have to say about working together.
                    </p>
                </div>

                
                <div className="flex justify-center mt-12">
                    <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 flex flex-col max-w-2xl w-full">
                        
                        <div className="text-blue-500 mb-4">
                            <svg
                                className="w-8 h-8"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                            </svg>
                        </div>

                        
                        <p className="text-gray-300 mb-6 grow leading-relaxed text-lg">
                            "{testimonial.quote}"
                        </p>

                        
                        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-800">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="font-semibold text-white">
                                    {testimonial.name}
                                </h3>
                                <p className="text-sm text-gray-400">
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="text-center mt-12 pt-8 border-t border-gray-800">
                    <div className="flex justify-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                className="w-6 h-6 text-yellow-400 fill-current"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                        ))}
                    </div>
                    <p className="text-gray-400">
                        Rated 5.0/5.0 based on client feedback
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;