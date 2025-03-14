"use client"
import { styled, TextField } from '@mui/material';


// define custom-RTL-input widget
const RtlTextField = styled(TextField)(({ theme }) => ({
    width : "200px",
    "& input" : {
        fontFamily : "VazirRegular",
        paddingLeft : "10px !important",
        paddingTop : "20px !important",
        paddingBottom : "20px !important",
        direction : "ltr !important"
    },
    
  '& label:not(.Mui-focused)': {
    direction: 'rtl',
    textAlign: 'right',
    transformOrigin: 'top right', 
    right: 30, // You might adjust it per case
    left: 'unset',
    // top : "-66%"
    top : "-7px"
  },
  '& lablel.Mui-focused' : {
    top : "-5px"
  },
  '& label.MuiInputLabel-shrink': {
    direction: 'rtl',
    backgroundColor: 'transparent',
    // textAlign: 'right',
    right: 16,
    left: 'unset',
    transformOrigin: 'top right', 
  },
  '& .MuiOutlinedInput-root': {
    direction: 'rtl',
    '& input': {
    //   textAlign: 'right',
      direction: 'rtl',
    },
    '&::placeholder': {
      textAlign: 'right', 
      direction: 'rtl',
    },
  },
  '& .MuiOutlinedInput-input': {
    // textAlign: 'right', 
    direction: 'rtl',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    textAlign: 'right',
    direction: 'rtl',
  },
}));


export default function TextInput({labelText,changeHandler}){

    return (
        <RtlTextField
          dir="rtl"
          size='normal'
          variant="outlined"
          label={labelText}
          onChange={changeHandler}
      />
    )
}