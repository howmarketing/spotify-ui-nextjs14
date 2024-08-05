
import { FooterSection } from "./footerSection";
import { Player } from "./player";
import { PlayingNow } from "./playingNow";

export const Footer = () => {
    return (
        <footer className="w-screen bottom-0 pt-3 pb-2 pl-6 pr-6 flex border-t border-zinc-700 bg-zinc-800/70 fixed backdrop-blur-md">
            <div className="w-full grid grid-cols-10">
                <PlayingNow />
                <Player />
                {/* <FooterSection /> */}
            </div>
        </footer>
    );
};