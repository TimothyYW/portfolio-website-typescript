import { FaWhatsapp, FaFacebookF, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact () {
    return (
        <div id="contact" className="bg-[black] text-white mx-auto py-24">
            <div className="container mx-auto py-24 gap-12">
                <p className="text-4xl font-bold">Contact Me</p>
                <ul className="flex items-center gap-6">
                    <li>
                        <a
                            href="https://wa.me/6282245659898"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open WhatsApp chat with 082245659898 in a new tab"
                            title="Chat on WhatsApp"
                            className="inline-flex items-center gap-3"
                        >
                            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white hover:opacity-90 shadow">
                                <FaWhatsapp className="text-2xl" aria-hidden="true" />
                            </span>
                            <span className="text-white font-medium">082245659898</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:timothy.yeremia.wewengkang@gmail.com"
                            aria-label="Send email to timothy.yeremia.wewengkang@gmail.com"
                            title="Send email"
                            className="inline-flex items-center gap-3">
                            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white hover:opacity-90 shadow">
                                <MdEmail className="text-2xl" aria-hidden="true" />
                            </span>
                            <span className="text-white font-medium">timothy.yeremia.wewengkang@gmail.com</span>
                        </a>
                    </li>
                </ul>
                {/* Social Media Icons */}
                <ul className="flex items-center justify-center gap-6 mt-8">
                    <li>
                        <a
                            href="https://www.facebook.com/Storm.starslash"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Facebook profile"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-colors duration-300"
                        >
                            <FaFacebookF className="text-xl" aria-hidden="true" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/timothy-wewengkang-19647735b"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit LinkedIn profile"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors duration-300"
                        >
                            <FaLinkedin className="text-xl" aria-hidden="true" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/TimothyYW"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit GitHub profile"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#24292e] hover:bg-[#24292e] hover:text-white transition-colors duration-300"
                        >
                            <FaGithub className="text-xl" aria-hidden="true" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/timothyywewengkang"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Instagram profile"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition-colors duration-300"
                        >
                            <FaInstagram className="text-xl" aria-hidden="true" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;