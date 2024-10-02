import { X, AtSign, Plus } from "lucide-react"
import { FormEvent } from "react";
import { Button } from "../../components/button";


export function InviteGuestsModal() {

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[640px] h-32 rounded-lx py-5 px-6 space-y-5 bg-zinc-900">
                <div className="flex ">
                    <p className="text-zinc-50 text-lg">Selecionar convidados</p>
                    <X className="size-5" />
                </div>
            </div>
        </div>
    )
}