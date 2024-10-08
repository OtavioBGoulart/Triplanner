import { useState } from "react";
import { DestinationandDateSteps } from "./steps/destination-and-date-step";
import { InviteGuestsSteps } from "./steps/invite-guests-step";
import { InviteGuestsModal } from "./invite-guest-modal";

export function CreateTripPage() {
    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
    const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);

    function openGuestsInput() {
        setIsGuestsInputOpen(true)
    }

    function openGuestsModal() {
        console.log("aqui")
        setIsGuestsModalOpen(true)
    }

    function closeGuestsInput() {
        setIsGuestsInputOpen(false)
    }

    function closeGuestsModal() {
        setIsGuestsModalOpen(false)
    }

    return (
        <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
            <div className="max-w-3xl w-full px-6 text-center space-y-10">
                <div className="flex flex-col items-center gap-3">
                    <img src="logo.svg" alt="plann.er" />
                    <h1 className="text-zinc-300">Convide seus amigos e planejem sua próxima viagem</h1>
                </div>
                <div className="flex flex-col gap-3">
                    <DestinationandDateSteps isGuestsInputOpen={isGuestsInputOpen} openGuestsInput={openGuestsInput} closeGuestsInput={closeGuestsInput} />
                    {isGuestsInputOpen && <InviteGuestsSteps openGuestsModal={openGuestsModal} />}
                </div>

                <p className="text-zinc-500 text-sm">Ao planejar a viagem pela plann.er você automaticamente concorda<br />
                    com nossos
                    <a href="" className="text-zinc-300 underline"> termos de uso </a>e <a href="" className="text-zinc-300 underline">políticias de privacidade </a>
                </p>
            </div>

            {isGuestsModalOpen && <InviteGuestsModal />}
        </div>
    );
}