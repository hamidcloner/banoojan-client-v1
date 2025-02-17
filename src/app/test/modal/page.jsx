'use client'
import { useState } from "react";
import TransitionsModal from "@/components/common/Modals";




export default function ModalPage(){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="page-wrapper">
            <button type="button" onClick={handleOpen}>
                Open the animate modal
            </button>
            <TransitionsModal handleOpen={handleOpen} open={open} handleClose={handleClose} />
        </div>
    )
}