import Link from "next/link";
import Image from "next/image";
import { Home as HomeIcon, Search, Library, Coffee, Target, Rocket, Wallet2, PartyPopper, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Footer } from "@/components/footer/footer";

export default function Home() {
	return (
		<div className="h-screen w-full flex flex-col ">
			<div className="flex flex-1">
				<aside className="bg-zinc-950 w-64 p-6">
					<div className="flex items-center gap-2">
						<div className="cursor-pointer w-3 h-3 bg-red-500 rounded-full" />
						<div className="cursor-pointer w-3 h-3 bg-yellow-500 rounded-full" />
						<div className="cursor-pointer w-3 h-3 bg-green-500 rounded-full" />
					</div>
					<nav className="flex flex-col gap-2 mt-6">
						<Link className="text-white/80 hover:text-zinc-50/95 flex items-center gap-2 text-sm/8" href={'/'}><HomeIcon /> Home</Link>
						<Link className="text-white/80 hover:text-zinc-50/95 flex items-center gap-2 text-sm/8" href={'/search'}><Search /> Search</Link>
						<Link className="text-white/80 hover:text-zinc-50/95 flex items-center gap-2 text-sm/8" href={'/your-library'}><Library /> Your Library</Link>
					</nav>
					<nav className="flex flex-col gap-3 mt-6 border-t border-zinc-700/50 pt-4">
						<Link className="text-white/80 hover:text-zinc-50/95 flex items-center gap-2 text-xs/6" href={'/playlist/some'}><Target size={20} strokeWidth={1.5} />Psicologia na prática</Link>
						<Link className="text-white/80 hover:text-zinc-50/95 flex items-center gap-2 text-xs/6" href={'/playlist/some'}><Rocket size={20} strokeWidth={1.5} />JJota Podcast (Joel Jota)</Link>
						<Link className="text-white/80 hover:text-zinc-50/95 flex items-center gap-2 text-xs/6" href={'/playlist/some'}><Coffee size={20} strokeWidth={1.5} />Café com destino</Link>
						<Link className="text-white/80 hover:text-zinc-50/95 flex items-center gap-2 text-xs/6" href={'/playlist/some'}><PartyPopper size={20} strokeWidth={1.5} />Niver Gabs Ariza</Link>
						<Link className="text-white/80 hover:text-zinc-50/95 flex items-center gap-2 text-xs/6" href={'/playlist/some'}><Wallet2 size={20} strokeWidth={1.5} />Wallet</Link>
					</nav>
				</aside>
				<main className="flex-1 p-6">
					<div className="flex items-center gap-3">
						<button type="button" title="Back" className="h-7 w-7 flex flex-row overflow-clip items-center justify-center rounded-full bg-black/40 hover:bg-black/90">
							<ChevronLeft size={18} strokeWidth={2} className="mr-1" />
						</button>
						<button type="button" title="Next" className="h-7 w-7 flex flex-row overflow-clip items-center justify-center rounded-full bg-black/40 hover:bg-black/90">
							<ChevronRight size={18} strokeWidth={2} className="ml-1" />
						</button>
					</div>
					<section title="Good Afternoon playlist section" className="flex flex-col gap-2 mt-10 p-0 ">
						<h1 className="font-semibold text-3xl">Good Afternoon</h1>
						<div className="grid grid-cols-3 gap-4 mt-4">
							{Array(6).fill(null).map((_, i) => (
								<div key={i} className="group bg-zinc-800 hover:bg-white/10 cursor-pointer p-0 rounded-md flex flex-row gap-1">
									<div className="w-24 h-20 min-h-20 min-w-24 flex items-stretch justify-stretch rounded-tl-md rounded-bl-md overflow-hidden relative">
										<Image className="absolute" alt="alt" width={120} height={120} src={`https://picsum.photos/${200 + i}/${200 + i}`} />
									</div>
									<div className="flex flex-row w-full">
										<div className="flex flex-1 flex-col items-start justify-center p-2 overflow-clip">
											<strong className="font-semibold">Daily Mix 1</strong>
										</div>
										<div className="min-w-20 flex flex-col items-center justify-center p-2 overflow-clip">
											<button type="button" title="Play" className="invisible group-hover:visible h-10 w-10 pl-0.5 flex flex-row overflow-clip items-center justify-center rounded-full bg-green-400 hover:bg-green-300">
												<Play className="text-black" fill="#000000" size={24} strokeWidth={1.5} />
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
					</section>
					<section title="Made For Made For Gabriel Ariza" className="flex flex-col gap-2 mt-16 p-0 ">
						<h2 className="font-semibold text-2xl">Made For Gabriel Ariza</h2>
						<div className="grid grid-cols-5 gap-4 mt-8">
							{Array(20).fill(null).map((_, i) => (
								<div key={i} className="group bg-white/5 hover:bg-white/10 cursor-pointer p-3 rounded-md flex flex-col gap-1 transition-all duration-300 hover:shadow-2xl hover:shadow-black/90 hover:scale-105">
									<div className="w-full min-h-56 flex items-stretch justify-stretch rounded-md overflow-hidden relative shadow-lg shadow-black/30 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-black/80">
										<Image className="absolute" alt="Playlist image" width={500} height={650 + i} src={`https://picsum.photos/500/${650 + i}`} />
									</div>
									<div className="flex flex-row w-full mt-4">
										<div className="flex flex-1 flex-col gap-1 items-start justify-center p-2 overflow-clip">
											<strong className="font-semibold">Daily Mix {i + 1}</strong>
											<span className="text-sm text-zinc-400">Wallows COIN, girl in read more</span>
										</div>
										<div className="min-w-10 flex flex-col items-center justify-center p-2 overflow-clip">
											<button type="button" title="Play" className="invisible group-hover:visible h-10 w-10 pl-0.5 flex flex-row overflow-clip items-center justify-center rounded-full bg-green-400 hover:bg-green-300">
												<Play className="text-black" fill="#000000" size={24} strokeWidth={1.5} />
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
					</section>
				</main>
			</div>
			<Footer />
		</div>
	);
}
