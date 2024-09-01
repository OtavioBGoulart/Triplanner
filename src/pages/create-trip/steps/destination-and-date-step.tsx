import { MapPin, Calendar, Settings2, ArrowRight, X } from "lucide-react";
import { Button } from "../../../components/button";

interface DestinationandDateStepsProps {
    isGuestsInputOpen: boolean,
    openGuestsInput: () => void,
    closeGuestsInput: () => void
}

export function DestinationandDateSteps({ isGuestsInputOpen, openGuestsInput, closeGuestsInput }: DestinationandDateStepsProps) {
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

            <button className="flex items-center gap-2 text-left w-[1git00px]">
                <Calendar className="size-5 text-zinc-400" />
                <span className="text-lg text-zinc-400 w-40 flex-1">
                    Quando?
                </span>
            </button>

            <div className="w-px h-6 bg-zinc-800" />

            {isGuestsInputOpen ?
                <Button onClick={closeGuestsInput} variant="secondary">
                    Alterar data/local
                    <Settings2 className="size-5" />
                </Button> :
                <Button onClick={openGuestsInput} variant="primary">
                    Continuar
                    <ArrowRight className="size-5" />
                </Button>
            }

        </div>
    )
}