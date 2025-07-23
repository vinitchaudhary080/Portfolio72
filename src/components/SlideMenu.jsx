// src/components/SideMenu.jsx
import React, { useEffect } from "react";

export default function SideMenu({ isOpen, onClose }) {
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (e.target.id === "overlay") onClose();
        };

        if (isOpen) document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, onClose]);

    return (
        <>
            {/* Overlay Background */}
            <div
                id="overlay"
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            />

            {/* Side Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-72 sm:w-96 bg-[#141414] text-white z-50 transform transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-6 flex flex-col h-full justify-between">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Menu</h3>
                        <ul className="space-y-4 text-sm font-medium">
                            <li className="cursor-pointer hover:text-gray-400">Home</li>
                            <li className="cursor-pointer hover:text-gray-400">About</li>
                            <li className="cursor-pointer hover:text-gray-400">Work</li>
                            <li className="cursor-pointer hover:text-gray-400">Contact</li>
                        </ul>
                    </div>
                    <button
                        onClick={onClose}
                        className="mt-10 text-sm text-gray-400 hover:text-white transition"
                    >
                        Close
                    </button>
                </div>
            </div>
        </>
    );
}
