import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
// import local component 
import ButtonCTA from '../FormWidgets/ButtonCTA';




export function TransitionsModal({handleOpen,open,handleClose}) {

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 1000,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={(theme) => ({
              position: 'absolute',
              textAlign : "center",
              borderRadius : theme.shape.borderRadius * .5,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: "70%",
              [theme.breakpoints.up("md")] : {
                width : "500px"
              },
              bgcolor: theme.organizationalColors.primary.colorTextDark,
              border: '2px solid #000',
              boxShadow: 24,
              p: "10px !important",        
          })}>
            <Typography 
                id="transition-modal-title" 
                component="h2"
                sx={(theme) => ({
                      fontSize : "15px !important",
                      color : theme.organizationalColors.primary.colorTextLight,
                      marginTop : "12px !important"
                })} 
            >
                اگر ایرادی دیدی یا نظری داشتی،خوشحال میشیم بهمون بگی
            </Typography>
            <form className='mt-3'>
                <textarea rows="6" name="feedbackComment" className='textarea-modal__user-comment dark:bg-gray-700 outline-none resize-none w-full' placeholder='یه چی بنویس....'></textarea>
                <ButtonCTA 
                  btnType="submit"
                  btnTextDisable="هر موقع نوشتی بزن رو من"
                  btnTextEnable="ارسال نظر"
                />
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}




