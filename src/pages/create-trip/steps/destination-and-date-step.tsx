import { MapPin, Calendar, Settings2, ArrowRight, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

interface DestinationandDateStepsProps {
    isGuestsInputOpen: boolean,
    openGuestsInput: () => void,
    closeGuestsInput: () => void
}

export function DestinationandDateSteps({ isGuestsInputOpen, openGuestsInput, closeGuestsInput }: DestinationandDateStepsProps) {

    const [isDatePickerIsOpen, setDatePickerIsOpen] = useState(false);
    const [eventStartAndEndDates, setEventStartAndEndDates] = useState<Date[] | undefined>();

    function openModalDatePicker() {
        setDatePickerIsOpen(true)
        console.log("passou aqui")
    }

    function closeModalDatePicker() {
        setDatePickerIsOpen(false)
    }


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

            <button onClick={openModalDatePicker} disabled={isGuestsInputOpen} className="flex items-center gap-2 text-left w-[1git00px]">
                <Calendar className="size-5 text-zinc-400" />
                <span className="text-lg text-zinc-400 w-40 flex-1">
                    Quando?
                </span>
            </button>

            {isDatePickerIsOpen && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
                    <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <h2 className="font-lg font-semibold text-zinc-50">Selecione a data</h2>
                                <button>
                                    <X className="size-5 text-zinc-400" onClick={closeModalDatePicker} />
                                </button>
                            </div>
                        </div>

                        <DayPicker
                            mode="range"
                            modifiersClassNames={{
                                selected: 'bg-lime-300 text-zinc-50', // Estilo para os dias selecionados
                                today: 'border border-lime-950', // Estilo para o dia atual
                                range_start: 'bg-green-500 text-white', // Primeiro dia do intervalo
                                range_end: 'bg-red-400 text-white', // Último dia do intervalo
                            }}
                            className="text-zinc-50" // Estilo de cor global do texto
                            styles={{
                                caption: { color: 'white' }, // Cor do título do mês
                                day: { color: 'white' }, // Cor dos números dos dias
                            }}
                        />


                    </div>
                </div>
            )}


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