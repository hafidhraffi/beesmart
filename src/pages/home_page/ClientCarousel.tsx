/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef } from 'react';
import Client1 from '../../assets/client1.png';
import Client2 from '../../assets/client2.png';
import Client3 from '../../assets/client3.png';

const ClientCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const carouselRef = useRef(null);

    const clients = [Client1, Client2, Client3];

    const handleMouseDown = (e: any) => {
        setIsDragging(true);
        setStartX(e.clientX);
    };

    const handleMouseMove = (e: any) => {
        if (!isDragging) return;

        const deltaX = e.clientX - startX;
        setTranslateX(deltaX);
    };

    const handleMouseUp = () => {
        if (!isDragging) return;

        setIsDragging(false);

        // Determine if we should move to next/prev slide
        const threshold = 50; // minimum drag distance

        if (translateX > threshold && currentIndex > 0) {
            // Dragged right - go to previous (only if not at first slide)
            setCurrentIndex((prev) => prev - 1);
        } else if (translateX < -threshold && currentIndex < clients.length - 1) {
            // Dragged left - go to next (only if not at last slide)
            setCurrentIndex((prev) => prev + 1);
        }

        setTranslateX(0);
    };

    const handleTouchStart = (e: any) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: any) => {
        if (!isDragging) return;

        const deltaX = e.touches[0].clientX - startX;
        setTranslateX(deltaX);
    };

    const handleTouchEnd = () => {
        handleMouseUp();
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setTranslateX(0);
    };

    return (
        <div className="w-full">
            {/* Carousel Container */}
            <div
                ref={carouselRef}
                className="relative overflow-hidden rounded-lg cursor-grab active:cursor-grabbing select-none"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="flex transition-transform duration-300 ease-out"
                    style={{
                        transform: `translateX(calc(-${currentIndex * 100}% + ${isDragging ? translateX : 0}px))`,
                    }}
                >
                    {clients.map((client, index) => (
                        <div key={index} className="w-full flex-shrink-0 flex justify-center">
                            <img
                                src={client}
                                alt={`Client ${index + 1}`}
                                className="max-w-full h-auto object-contain"
                                draggable={false}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
                {clients.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${currentIndex === index
                            ? 'bg-[#017d9e] scale-110'
                            : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ClientCarousel;