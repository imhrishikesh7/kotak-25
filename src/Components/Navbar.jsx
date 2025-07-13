import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const navItems = [
    { label: "Home", link: "/" },
    { label: "Company", link: "/company" },
    {
        label: "Analytics",
        submenu: [
            { label: "Overview", link: "/analytics/overview" },
            { label: "Transactions", link: "/analytics/transactions" },
            { label: "Reports", link: "/analytics/reports" },
        ],
    },
    {
        label: "Users",
        submenu: [
            { label: "All Users", link: "/users/all" },
            { label: "Management", link: "/users/management" },
            { label: "Permissions", link: "/users/permissions" },
        ],
    },
    { label: "Contact", link: "/contact" },
];

const Navbar = () => {
    const [active, setActive] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobilePanel, setMobilePanel] = useState(null);

    const mobileRef = useRef(null);
    const submenuRef = useRef(null);
    const dropdownContainerRef = useRef(null); // renamed

    const closeMobileMenu = () => {
        if (mobileRef.current) {
            gsap.to(mobileRef.current, {
                x: "100%",
                duration: 0.4,
                ease: "power2.in",
                onComplete: () => {
                    setMobileOpen(false);
                    setMobilePanel(null);
                },
            });
        }
    };

    useEffect(() => {
        if (mobileOpen && mobileRef.current) {
            gsap.fromTo(
                mobileRef.current,
                { x: "100%" },
                { x: "0%", duration: 0.4, ease: "power2.out" }
            );
        }
    }, [mobileOpen]);

    useEffect(() => {
        if (mobilePanel && submenuRef.current) {
            gsap.set(submenuRef.current, { x: "100%" });
            gsap.to(submenuRef.current, {
                x: "0%",
                duration: 0.4,
                ease: "power2.out",
            });
        }
    }, [mobilePanel]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                dropdownContainerRef.current &&
                !dropdownContainerRef.current.contains(e.target)
            ) {
                setActive(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleBack = () => {
        if (submenuRef.current) {
            gsap.to(submenuRef.current, {
                x: "100%",
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => {
                    setMobilePanel(null);
                    gsap.set(submenuRef.current, { clearProps: "all" });
                },
            });
        } else {
            setMobilePanel(null);
        }
    };

    return (
        <div className=" z-50 sticky top-0">
            <nav className="bg-[#013367]/90 backdrop-blur-[20px] relative text-white md:px-16 px-6 py-6 flex justify-between items-center">
                <a href="https://www.kotak.com/en/home.html" target="_blank" className="text-xl font-bold w-32">
                    <img src="./home/Kotak-White-Version.png" alt="Logo" />
                </a>

                {/* Desktop Nav */}
                <div
                    ref={dropdownContainerRef}
                    className="hidden md:flex space-x-10 text-base"
                >
                    {navItems.map((item) => (
                        <div key={item.label} className="relative">
                            <Link
                                to={item.link}
                                className="hover:text-[#ed1c25] transition-all duration-300 cursor-pointer flex items-center gap-1"
                                onClick={() =>
                                    setActive((prev) => (prev === item.label ? null : item.label))
                                }
                            >
                                {item.label}
                                {item.submenu && (
                                    <FiChevronDown
                                        className={`transition-transform duration-300 ${active === item.label ? "rotate-180" : ""
                                            }`}
                                    />
                                )}
                            </Link>

                            {item.submenu && active === item.label && (
                                <div className="absolute top-full left-0 bg-[#222] mt-2 py-3 px-4 rounded shadow-lg w-48">
                                    {item.submenu.map((sub) => (
                                        <a
                                            href={sub.link}
                                            key={sub.label}
                                            onClick={() => setActive(null)}
                                            className="block py-2 cursor-pointer px-2 text-sm hover:text-blue-300 transition"
                                        >
                                            {sub.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Hamburger */}
                <div className="md:hidden flex items-center justify-center">
                    <button
                        onClick={() => setMobileOpen(true)}
                        className="text-4xl text-white cursor-pointer"
                    >
                        <RxHamburgerMenu />
                    </button>
                </div>
            </nav>

            <div
                ref={mobileRef}
                className={`fixed top-0 right-0 w-full h-screen bg-[#013367] text-white p-6 md:hidden overflow-hidden ${mobileOpen ? "" : "hidden"
                    }`}
            >
                <button className="mb-6 text-xl cursor-pointer" onClick={closeMobileMenu}>
                    ✕ Close
                </button>

                {!mobilePanel ? (
                    <div className="space-y-4 text-lg max-h-[calc(100vh-100px)] overflow-y-auto pr-1">
                        {navItems.map((item) =>
                            item.submenu ? (
                                <button
                                    key={item.label}
                                    onClick={() => setMobilePanel(item)}
                                    className="flex items-center cursor-pointer justify-between w-full bg-[#111]/30 text-left text-base py-4 px-4 rounded hover:bg-[#222] transition"
                                >
                                    <span>{item.label}</span>
                                    <FiChevronRight className="text-xl" />
                                </button>
                            ) : (
                                <a
                                    href={item.link}
                                    key={item.label}
                                    className="block text-base cursor-pointer py-4 bg-[#111]/30 px-4 rounded hover:bg-[#222] transition"
                                >
                                    {item.label}
                                </a>
                            )
                        )}
                    </div>
                ) : (
                    <div
                        ref={submenuRef}
                        className="absolute top-0 left-0 w-full h-full bg-[#013367] p-6 overflow-hidden"
                    >
                        <button
                            onClick={handleBack}
                            className="mb-4 text-sm cursor-pointer text-gray-400"
                        >
                            ← Back
                        </button>
                        <h2 className="text-xl font-semibold mb-4">
                            {mobilePanel.label}
                        </h2>
                        <div className="space-y-3 text-base max-h-[calc(100vh-150px)] overflow-y-auto pr-1">
                            {mobilePanel.submenu.map((sub) => (
                                <a
                                    href={sub.link}
                                    key={sub.label}
                                    className="block py-3 px-4 cursor-pointer bg-[#111]/30 rounded hover:bg-[#222] transition"
                                >
                                    {sub.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
