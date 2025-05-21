import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            current += 2;
            setProgress(current);
            if (current >= 100) {
                clearInterval(interval);
                setTimeout(onComplete, 400); // Small pause at 100%
            }
        }, 30); // Adjust speed here

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#82A7BE] to-[#e0ecf4]">
            <div className="mb-6 text-2xl md:text-3xl font-semibold text-white tracking-wide drop-shadow-lg">
                Loading...
            </div>
            <div className="w-[800px] max-w-[90vw] h-[6px] bg-white/40 rounded-full overflow-hidden shadow-inner">
                <div
                    className="h-full bg-blue-400 rounded-full shadow-[0_0_15px_#60a5fa] transition-all duration-100"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
};