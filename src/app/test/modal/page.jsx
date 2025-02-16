'use client'
import { useState } from "react";
import Modal from "@/components/common/Modals";



export default function ModalPage(){
    const [isOpen,setIsOpen] = useState(false)
    return (
        <>
            <button type="button" onClick={() => setIsOpen(true)}>
                Open the animate modal
            </button>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    )
}