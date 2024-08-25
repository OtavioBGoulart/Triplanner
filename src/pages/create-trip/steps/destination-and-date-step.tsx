import { MapPin, Calendar, Settings2, ArrowRight, X } from "lucide-react";

export function DestinationandDateSteps() {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

            <div className="flex items-center gap-2 flex-1">
                <MapPin className="size-5 text-zinc-400" />
                <input
                    type="text"
                    placeholder="Para Onde você vai?"
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
            </div>

            <button className="flex items-center gap-2 text-left w-[100px]">
                <Calendar className="size-5 text-zinc-400" />
                <span className="text-lg text-zinc-400 w-40 flex-1">
                    Quando?
                </span>
            </button>

            <div className="w-px h-6 bg-zinc-800" />

            <button className="flex items-center justify-center px-5 py-2 font-medium gap-2 rounded-lg text-lime-950 bg-lime-300 hover:bg-lime-400">
                Continuar
                <ArrowRight className="size-5" />
            </button>

        </div>
    )
}