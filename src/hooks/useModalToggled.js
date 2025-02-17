import { useState } from "react";


export default function useModalToggled(initailFromData={}){
    // define the states
    const [open,setOpen] = useState(false);
    const [modalFormData,setModalFormData] = useState(initailFromData);

    // define the own-modal handlers
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // define the modal-form handlers
    const formDataHandler = (event) => {
        setModalFormData((prevState) => ({
            ...prevState,
            [event.target.name] : event.target.value
        }))
    }
    return {
        open,
        handleOpen,
        handleClose,
        modalFormData,
        formDataHandler
    }
}

