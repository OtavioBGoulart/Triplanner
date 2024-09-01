import { UserRoundPlus, ArrowRight } from "lucide-react";
import { Button } from "../../../components/button";

export function InviteGuestsSteps() {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

            <button className="flex items-center gap-2 flex-1 text-left">
                <UserRoundPlus className="size-5 text-zinc-400" />
                <span className="bg-transparent text-lg text-zinc-400  flex-1">
                    Quem estará na viagem?
                </span>
            </button>

            <Button variant="primary">
                Confirmar viagem
                <ArrowRight className="size-5" />
            </Button>

        </div>
    )
}