"use client";
// import Image from "next/image";
import { useEffect } from "react";

export default function ProofModal({ open, onClose, images }) {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [open]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-base-900 rounded-lg max-w-lg w-full relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white text-2xl"
                >
                    ×
                </button>
                <div className="p-4 max-h-[70vh] overflow-y-auto">
                    {images.map((src, i) => (
                        <img key={i} src={src} alt={`proof-${i}`} className="rounded shadow mb-4" />
                    ))}
                </div>
            </div>
        </div>
    );
}
