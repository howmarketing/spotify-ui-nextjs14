import { Play, Repeat, Shuffle, SkipBack, SkipForward } from 'lucide-react';

export const FooterSection = () => {
    return (
        <div className="col-span-6 flex flex-col items-center justify-center gap-2 overflow-auto">
            <div className="w-full flex flex-row items-center justify-center gap-4">
                <button type="button" title="Shuffle" className="h-7 w-7 flex flex-row">
                    <Shuffle size={28} strokeWidth={2} className="transition-all duration-200 text-zinc-400 hover:text-zinc-200 hover:scale-105" />
                </button>
                <button type="button" title="Previous" className="h-7 w-7 flex flex-row">
                    <SkipBack size={28} strokeWidth={2} className="transition-all duration-200 text-zinc-400 hover:text-zinc-200 hover:scale-105" />
                </button>
                <button type="button" title="Play" className="h-12 w-12 flex flex-row overflow-clip items-center justify-center rounded-full transition-all delay-200 bg-zinc-300 hover:bg-zinc-200 hover:scale-110">
                    <Play size={32} fill="#000000" strokeWidth={1} className="ml-1 text-black" />
                </button>
                <button type="button" title="Previous" className="h-7 w-7 flex flex-row">
                    <SkipForward size={28} strokeWidth={2} className="transition-all duration-200 text-zinc-400 hover:text-zinc-200 hover:scale-105" />
                </button>
                <button type="button" title="Repeat" className="h-7 w-7 flex flex-row">
                    <Repeat size={28} strokeWidth={2} className="transition-all duration-200 text-zinc-400 hover:text-zinc-200 hover:scale-105" />
                </button>
            </div>
            <div className="w-full flex flex-row items-center justify-center gap-4 pt-0 pb-0 pl-8 pr-8">
                <span>1:30</span>
                <div className="h-1 bg-zinc-500 rounded-full flex-1 col-span-12 grid grid-cols-12 items-start justify-start overflow-hidden">
                    <div className="h-2 bg-zinc-200 rounded-full flex col-span-5"></div>
                </div>
                <span>3:12</span>
            </div>
        </div>
    )
}