import { useState } from "react";


export default function useModalToggled(){
    const [open,setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return {
        open,
        setOpen,
        handleOpen,
        handleClose
    }
}

