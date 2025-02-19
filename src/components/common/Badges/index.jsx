import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
// import the icons
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded'; // using in send-feedbackComment badge
import SchoolIcon from '@mui/icons-material/School'; // using in go to change user-skil


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

export const GoToChangeSkilBadge = ({handleOpen}) => {
    return (
        <>
            <Badge 
                badgeContent="مهارتم رو میخوام نغییر بدم" 
                // color="primary" 
                onClick={handleOpen}
                sx={(theme) => ({
                    "& > span:nth-child(2)" : {
                        width : "168px",
                        height : "50px",
                        fontSize : "20px",
                        right : "-100%",
                        top : "-10px",
                        bgcolor : theme.organizationalColors.primary.colorBlueLight
                    }
                })}
            >
                <SchoolIcon 
                    sx={(theme) => ({
                        fontSize : "50px",
                        color : theme.organizationalColors.primary.colorPinkStroke
                    })}
                />
            </Badge>
        </>
    )
}