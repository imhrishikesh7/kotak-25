import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FiDownload, FiMenu } from 'react-icons/fi';
import { FiGrid, FiX } from 'react-icons/fi';

const navItems = [
    {
        label: "Home",link:"/"
    },

    {
        label: "Kotak at a Glance",
        submenu: [
            { label: "About Us", link: "/about" },
            // { label: "Board of Directors", link: "/board-of-directors" },
            { label: "Message from Ashok Vaswani", link: "/message-from-ashok-vaswani" },
            { label: "Business Overview", link: "/business-overview" },
            {
                label: "Our Enablers",
                submenu: [
                    { label: "Technology", link: "/our-enablers/technology" },
                    { label: "Digital Powerhouse", link: "/our-enablers/digital-powerhouse" },
                    { label: "Talent", link: "/our-enablers/talent" },

                ]
            },
            { label: "Key Performance Indicators", link: "/our-enablers/key-performance-indicators" },
            { label: "Stakeholder Engagement and Materiality Assessment", link: "/our-enablers/stakeholder-engagement" },
            { label: "Strategy", link: "/strategy" },
            // { label: "Value Creation Model", link: "/value-creation-model" },
            { label: "Awards and Accolades", link: "/awards-and-accolades" }
        ]
    },


    {
        label: "Sustainability at Kotak",
        submenu: [
            // { label: "Sustainability Snapshot", link: "/sustainability/snapshot" },
            {
                label: "Customers",
                submenu: [
                    { label: "Generating Value for Customers", link: "/sustainability/customers" }
                ]
            },
            {
                label: "Company",
                submenu: [
                    { label: "Delivering Excellence in Governance", link: "/sustainability/governance" },
                    { label: "Institutionalising Risk Resilience", link: "/sustainability/risk-resilience" },
                    { label: "Embracing Sustainability", link: "/sustainability/embracing-sustainability" }
                ]
            },
            {
                label: "Colleagues",
                submenu: [
                    { label: "Empowering Colleagues", link: "/sustainability/colleagues" }
                ]
            },
            {
                label: "Community",
                submenu: [
                    { label: "Supporting Communities", link: "/sustainability/community" }
                ]
            }
        ]
    },

    // {
    //     label: "Financial Performance",
    //     submenu: [
    //         {
    //             label: "Financial Highlights",
    //             submenu: [
    //                 { label: "Consolidated and Standalone", link: "/financial/highlights" }
    //             ]
    //         },
    //         {
    //             label: "Financial Statements",
    //             submenu: [
    //                 { label: "Independent Auditor's Report on Consolidated Financial Statements", link: "/financial/auditor-consolidated" },
    //                 { label: "Consolidated Financial Statements", link: "/financial/consolidated" },
    //                 { label: "Financial Information of Subsidiaries and Basel III (Pillar 3) Disclosures", link: "/financial/subsidiaries-basel" },
    //                 { label: "Independent Auditor's Report on Standalone Financial Statements", link: "/financial/auditor-standalone" },
    //                 { label: "Standalone Financial Statements", link: "/financial/standalone" }
    //             ]
    //         },
    //         {
    //             label: "Statutory Reports",
    //             submenu: [
    //                 { label: "Directors' Report and Annexures", link: "/financial/statutory/directors-report" },
    //                 { label: "Report on Corporate Governance", link: "/financial/statutory/governance" },
    //                 { label: "Management's Discussion and Analysis", link: "/financial/statutory/management-analysis" },
    //                 { label: "Business Responsibility and Sustainability Report (BRSR)", link: "/financial/statutory/brsr" }
    //             ]
    //         },
    //         {
    //             label: "Annexures",
    //             submenu: [
    //                 { label: "ESG Data Tables", link: "/financial/annexures/esg" },
    //                 { label: "GRI Content Index", link: "/financial/annexures/gri" },
    //                 { label: "Assurance Statements", link: "/financial/annexures/assurance" }
    //             ]
    //         }
    //     ]
    // }
];

const Navbar = () => {
    const [active, setActive] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobilePanel, setMobilePanel] = useState(null);
    const [mobileBreadcrumb, setMobileBreadcrumb] = useState([]);

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const mobileRef = useRef(null);
    const submenuRef = useRef(null);
    const dropdownContainerRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(
                dropdownRef.current,
                { opacity: 0, y: -10 },
                { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
            );
        } else {
            gsap.to(dropdownRef.current, {
                opacity: 0,
                y: -10,
                duration: 0.2,
                ease: 'power2.in',
            });
        }
    }, [isOpen]);

    const closeMobileMenu = () => {
        if (mobileRef.current) {
            gsap.to(mobileRef.current, {
                x: "100%",
                duration: 0.4,
                ease: "power2.in",
                onComplete: () => {
                    setMobileOpen(false);
                    setMobilePanel(null);
                    setMobileBreadcrumb([]);
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

    const handleMobileSubmenu = (item) => {
        setMobileBreadcrumb(prev => [...prev, mobilePanel]);
        setMobilePanel(item);
    };

    const handleBack = () => {
        if (submenuRef.current) {
            gsap.to(submenuRef.current, {
                x: "100%",
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => {
                    if (mobileBreadcrumb.length > 0) {
                        setMobilePanel(mobileBreadcrumb[mobileBreadcrumb.length - 1]);
                        setMobileBreadcrumb(prev => prev.slice(0, -1));
                    } else {
                        setMobilePanel(null);
                    }
                    gsap.set(submenuRef.current, { clearProps: "all" });
                },
            });
        } else {
            if (mobileBreadcrumb.length > 0) {
                setMobilePanel(mobileBreadcrumb[mobileBreadcrumb.length - 1]);
                setMobileBreadcrumb(prev => prev.slice(0, -1));
            } else {
                setMobilePanel(null);
            }
        }
    };

    // Desktop submenu renderer with nested support and smart positioning
    const renderDesktopSubmenu = (items, level = 0) => {
        const baseClasses = level === 0
            ? 'top-full left-0'
            : 'top-0 left-full submenu-nested';

        return (
            <div className={`absolute ${baseClasses} bg-[#1e293b] mt-2 py-3 px-4 rounded-xl shadow-lg w-64 z-[60]`}>
                {items.map((sub) => (
                    <div key={sub.label} className="relative group">
                        {sub.submenu ? (
                            <div className="py-2 px-2 text-sm hover:text-blue-300 transition cursor-pointer flex items-center justify-between">
                                <span>{sub.label}</span>
                                <FiChevronRight className="text-xs" />
                                <div className="hidden group-hover:block">
                                    {renderDesktopSubmenu(sub.submenu, level + 1)}
                                </div>
                            </div>
                        ) : (
                            <Link
                                to={sub.link}
                                onClick={() => setActive(null)}
                                className="block py-2 cursor-pointer px-2 text-sm hover:text-blue-300 transition"
                            >
                                {sub.label}
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className=" z-50 sticky top-0">
            <style jsx="true">{`
                /* Smart positioning for nested submenus */
                .submenu-nested {
                    left: 100%;
                }
                
                /* Adjust position based on viewport space */
                @media (max-width: 1400px) {
                    .submenu-nested {
                        left: auto;
                        right: 100%;
                    }
                }
                
                /* For right-most menu items, always show nested menus to the left */
                .hidden.md\\:flex > div:nth-last-child(-n+1) .submenu-nested {
                    left: auto;
                    right: 100%;
                }
                
                /* Ensure proper z-index stacking */
                .submenu-nested {
                    z-index: 70;
                }
            `}</style>
            <nav className="bg-[#013367]/90 backdrop-blur-[20px] relative text-white md:px-16 px-6 py-3 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold w-32">
                    <img src="/Kotak-White-Version.webp" alt="Logo" />
                </Link>




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

                            {item.submenu && active === item.label &&
                                renderDesktopSubmenu(item.submenu)
                            }
                        </div>
                    ))}
                </div>

                {/* <div className="text-slate-300 flex justify-center gap-2 py-1 px-3 rounded-xl">
                    <a href="#download-center" className="cursor-pointer text-slate-300 hover:text-white transition-all duration-300">Download Center</a>
                    |
                    <a
                        href="https://www.kotak.com/content/dam/Kotak/investor-relation/Financial-Result/Annual-Reports/FY-2025/kotak-mahindra-bank/Kotak-Mahindra-Bank-Limited-FY25.pdf"
                        target="_blank"
                        className="flex items-center hover:text-white transition-all duration-300 gap-2"
                    >
                        Download Full Report <FiDownload />
                    </a>
                </div> */}
                {/* <div> */}


                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-slate-300 cursor-pointer text-2xl focus:outline-none"
                >
                    {isOpen ? <FiX /> : <FiGrid />}
                </button>

                <div
                    ref={dropdownRef}
                    className={`absolute right-4 top-[60px] w-72 bg-[#1e293b] border border-slate-600 rounded-xl shadow-xl p-4 transition-opacity duration-300 pointer-events-${isOpen ? 'auto' : 'none'} ${isOpen ? 'block' : 'hidden'
                        }`}
                >
                    <div className="flex flex-col gap-3 text-sm">
                        <a
                            href="#download-center"
                            className="text-slate-300 hover:text-white transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Download Center
                        </a>
                        <a
                            href="https://www.kotak.com/content/dam/Kotak/investor-relation/Financial-Result/Annual-Reports/FY-2025/kotak-mahindra-bank/Kotak-Mahindra-Bank-Limited-FY25.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Download Full Report <FiDownload className="text-lg" />
                        </a>
                    </div>
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
                                <Link
                                    to={item.link}
                                    key={item.label}
                                    className="block text-base cursor-pointer py-4 bg-[#111]/30 px-4 rounded hover:bg-[#222] transition"
                                >
                                    {item.label}
                                </Link>
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
                                sub.submenu ? (
                                    <button
                                        key={sub.label}
                                        onClick={() => handleMobileSubmenu(sub)}
                                        className="flex items-center cursor-pointer justify-between w-full py-3 px-4 bg-[#111]/30 rounded hover:bg-[#222] transition"
                                    >
                                        <span>{sub.label}</span>
                                        <FiChevronRight className="text-lg" />
                                    </button>
                                ) : (
                                    <Link
                                        to={sub.link}
                                        key={sub.label}
                                        className="block py-3 px-4 cursor-pointer bg-[#111]/30 rounded hover:bg-[#222] transition"
                                    >
                                        {sub.label}
                                    </Link>
                                )
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;