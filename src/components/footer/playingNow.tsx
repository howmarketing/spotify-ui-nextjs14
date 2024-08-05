import Image from "next/image";
import { Heart } from 'lucide-react';
import SongFlyer from "@/../public/songs-flyer/rem-losing-my-religion.jpg";

export const PlayingNow = () => {
    return (
        <div className="col-span-2 flex flex-row justify-stretch items-stretch">
            <div className="flex-1 flex flex-row items-center justify-center gap-2">
                <div className="w-20 h-20 border border-white/5 flex items-stretch justify-stretch rounded-lg bg-transparent overflow-hidden">
                    <Image alt="Playing Music banner" width={120} height={120} src={SongFlyer} />
                </div>
                <div className="flex-1 flex flex-row items-stretch justify-stretch">
                    <div className="flex-1 flex flex-col items-start justify-center">
                        <strong className="font-semibold text-sm antialiased">Losing My Religion</strong>
                        <span className="text-xs text-zinc-400">R.E.M. </span>
                    </div>
                    <div className="flex flex-col h-full items-center justify-center">
                        <button type="button" title="Play" className="p-1">
                            <Heart className="text-zinc-200 hover:fill-zinc-200" size={24} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};