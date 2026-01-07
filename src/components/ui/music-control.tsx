import React, { useState, useRef, useEffect } from 'react';
import { Music, VolumeX } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Props {
    visible?: boolean;
}

const MusicControl: React.FC<Props> = ({ visible = true }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const toggleMusic = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play().then(() => {
                setIsPlaying(true);
            }).catch((error) => {
                console.log("Playback failed:", error);
            });
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.4;
        }
    }, []);

    return (
        <div className={`transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <audio ref={audioRef} loop>
                <source src="/bgm.mp3" type="audio/mpeg" />
            </audio>
            <Button
                onClick={toggleMusic}
                variant='ghost'
                className="rounded-full h-12 w-12 shadow-sm opacity-70 hover:opacity-100 items-center transition-opacity duration-300 justify-center"
                aria-label={isPlaying ? "Mute music" : "Play music"}
            >
                {isPlaying ? <Music className="h-6 w-6 animate-pulse text-gray-400" /> : <VolumeX className="h-6 w-6 text-gray-400" />}
            </Button>
        </div>
    );
};

export default MusicControl;
