import { DestinationandDateSteps } from "./steps/destination-and-date-step";

export function CreateTripPage() {

    return (
        <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
            <div className="max-w-3xl w-full px-6 text-center space-y-10">
                <div className="flex flex-col items-center gap-3">
                    <img src="logo.svg" alt="plann.er" />
                    <h1 className="text-zinc-300">Convide seus amigos e planejem sua próxima viagem</h1>
                </div>
                <DestinationandDateSteps />
                <p className="text-zinc-500 text-sm">Ao planejar a viagem pela plann.er você automaticamente concorda<br />
                    com nossos
                    <a href="" className="text-zinc-300 underline"> termos de uso </a>e <a href="" className="text-zinc-300 underline">políticias de privacidade </a>
                </p>
            </div>
        </div>
    );
}