import IconButton from '@mui/material/IconButton';
// import the icons
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';


export const CallUsBadge = ({handleOpen}) => {
    return (
        <>
            <IconButton size="large" onClick={handleOpen}>
                <PhoneForwardedIcon 
                    sx={(theme) => ({
                        fontSize : "50px",
                        color : theme.organizationalColors.primary.colorPinkStroke
                    })}
                />
            </IconButton>
        </>
    )
}