import * as React from "react";
import {styled} from "@mui/system";
import {Button, CircularProgress} from "@mui/material";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

interface IProps {
    isDisabled: boolean;
    isLoading: boolean;
}

const AddButton = styled(Button)({
    height: '54px',
    marginLeft: '16px',
    borderRadius: '8px',
    color: '#eaeff3',
    background: '#3682F4',
    boxShadow: '0px 6px 12px rgba(54, 130, 244, 0.3)',
    '& 	.MuiButton-endIcon': {
        margin: 0,
    },
});

const StyledCircularProgress = styled(CircularProgress)({
    color: '#eaeff3',
});

export const CustomButton: React.FC<IProps> = ({isDisabled, isLoading}) => {
    return (
            <AddButton
                type="submit"
                variant="contained"
                disabled={isDisabled}
                startIcon={!isLoading && <PlaylistAddIcon/>}
                endIcon={isLoading && <StyledCircularProgress size={20} />}
            >
                {!isLoading && 'Add'}
            </AddButton>
    )
}
