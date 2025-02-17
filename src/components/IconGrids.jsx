import { useState } from "react";

const icons = [
    { src: "Vector(2).png", label: "Google Ads" },
    { src: "Vector(3).png", label: "TikTok Ads" },
    { src: "Vector(4).png", label: "Meta Ads" },
    { src: "Vector(5).png", label: "LinkedIn Ads" },
    { src: "Vector(6).png", label: "Amazon Ads" },
    { src: "Vector(7).png", label: "X / Twitter Ads" },
];

export default function IconGrid() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="w-full flex justify-center mt-10">
            <div className="flex gap-[30px] relative">
                {icons.map((icon, index) => (
                    <div
                        key={index}
                        className="w-[112px] h-[107px] bg-[#78819936] rounded-2xl border border-purple-400 border-l-transparent flex flex-col items-center justify-center relative transition-all duration-300"
                        style={{
                            borderImageSource:
                                "linear-gradient(0deg, #000000, #000000), linear-gradient(270deg, #7687B5 0%, #333B4F 100%)",
                            transform: hoveredIndex === index ? "translateY(-20px)" : "none",
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {/* Main icon */}
                        <img src={icon.src} alt={icon.label} className="transition-transform duration-300" />

                        {/* Ellipse (Hidden by default, appears on hover) */}
                        <img
                            src="Ellipse8.png"
                            alt=""
                            className={`absolute transition-opacity duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
                        />

                        {/* Label (Hidden by default, appears on hover) */}
                        <p
                            className={`absolute bottom-[-30px] font-[400] text-white text-sm opacity-0 transition-opacity duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            {icon.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
