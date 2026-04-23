import { FaQuoteLeft } from "react-icons/fa";

function Testimonials() {
    return (
        <div id="testimonials" className="section">
            <div className="container mx-auto px-4 py-24 space-y-16">
                <div className="space-y-2">
                    <p className="section-label">&gt; client.feedback</p>
                    <h2 className="section-title">Testimonials</h2>
                    <div className="section-rule" />
                </div>

                <div className="flex justify-center">
                    <div className="card p-12 max-w-2xl w-full flex flex-col items-center gap-4 text-center">
                        <FaQuoteLeft className="text-4xl text-red-600/30" />
                        <p className="font-mono text-gray-600 text-sm">// no testimonials yet</p>
                        <p className="text-gray-500 text-sm">
                            This section will be updated with real client and colleague feedback.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
