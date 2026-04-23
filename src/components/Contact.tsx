import { FaWhatsapp, FaFacebookF, FaLinkedin, FaGithub, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

function Contact() {
    return (
        <div id="contact" className="section">
            <div className="container mx-auto px-4 py-24 space-y-16">
                <div className="space-y-2">
                    <p className="section-label">&gt; get.in.touch</p>
                    <h2 className="section-title">Contact Me</h2>
                    <div className="section-rule" />
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Direct contact */}
                    <div className="space-y-8">
                        <p className="text-gray-400 leading-relaxed">
                            Feel free to reach out — I&apos;m open to project discussions,
                            collaborations, or just a chat about web development.
                        </p>

                        <div className="space-y-4">
                            <a
                                href="tel:+61438116380"
                                aria-label="Call 0438 116 380"
                                className="flex items-center gap-4 group"
                            >
                                <span className="contact-icon text-red-500 group-hover:border-red-500">
                                    <MdPhone className="text-xl" />
                                </span>
                                <div>
                                    <p className="font-mono text-xs text-gray-500">Phone (AU)</p>
                                    <p className="text-white group-hover:text-red-400 transition-colors duration-200">
                                        0438 116 380
                                    </p>
                                </div>
                            </a>

                            <a
                                href="https://wa.me/61438116380"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Open WhatsApp chat"
                                className="flex items-center gap-4 group"
                            >
                                <span className="contact-icon text-emerald-500 group-hover:border-emerald-500">
                                    <FaWhatsapp className="text-xl" />
                                </span>
                                <div>
                                    <p className="font-mono text-xs text-gray-500">WhatsApp</p>
                                    <p className="text-white group-hover:text-red-400 transition-colors duration-200">
                                        +61 438 116 380
                                    </p>
                                </div>
                            </a>

                            <a
                                href="mailto:timothy.yeremia.wewengkang@gmail.com"
                                aria-label="Send email"
                                className="flex items-center gap-4 group"
                            >
                                <span className="contact-icon text-red-500 group-hover:border-red-500">
                                    <MdEmail className="text-xl" />
                                </span>
                                <div>
                                    <p className="font-mono text-xs text-gray-500">Email</p>
                                    <p className="text-white group-hover:text-red-400 transition-colors duration-200 text-sm">
                                        timothy.yeremia.wewengkang@gmail.com
                                    </p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4">
                                <span className="contact-icon text-gray-500">
                                    <FaMapMarkerAlt className="text-xl" />
                                </span>
                                <div>
                                    <p className="font-mono text-xs text-gray-500">Address</p>
                                    <p className="text-white text-sm">
                                        65 Mary Street, Brisbane QLD 4000, Australia
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social media */}
                    <div className="space-y-6">
                        <p className="font-mono text-sm text-gray-500">// social profiles</p>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { icon: <FaFacebookF />,  href: "https://www.facebook.com/Storm.starslash",                   label: "Facebook" },
                                { icon: <FaLinkedin />,   href: "https://www.linkedin.com/in/timothy-wewengkang-19647735b",  label: "LinkedIn" },
                                { icon: <FaGithub />,     href: "https://github.com/TimothyYW",                               label: "GitHub"   },
                                { icon: <FaInstagram />,  href: "https://www.instagram.com/timothyywewengkang",               label: "Instagram"},
                            ].map(({ icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visit ${label} profile`}
                                    className="social-btn"
                                >
                                    <span className="text-lg">{icon}</span>
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="pt-12 border-t border-[#1f1f1f] text-center font-mono text-xs text-gray-600">
                    <p>© {new Date().getFullYear()} Timothy Y Wewengkang — Built with Next.js & Tailwind CSS</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
