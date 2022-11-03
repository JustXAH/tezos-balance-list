import * as React from "react";
import {styled} from "@mui/system";
import {TextField, Typography} from "@mui/material";

interface IProps {
    errorMessage: string;
    setErrorMessage: (value: ((prevState: string) => string) | string) => void;
}

const PublicKeyHashInput = styled(TextField)({
    width: '100%',
    '& .MuiInputBase-root': {
        background: '#232131',
        color: '#eaeff3',
        borderRadius: '8px',
    },
    '& .MuiInputLabel-root': {
        color: '#eaeff3',
        '&.Mui-focused': {
            color: '#eaeff3',
        },
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#3d464f',
        },
        '&:hover fieldset': {
            borderColor: '#1e2327',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#eaeff3',
            color: '#eaeff3',
        },
    },
});

const ErrorMessage = styled(Typography)({
    position: 'absolute',
    top: '57px',
    left: 0,
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '16px',
    letterSpacing: '0em',
    textAlign: 'left',
    color: '#DC1403',
});


export const CustomInput: React.FC<IProps> = ({errorMessage, setErrorMessage}) => {
    return (
        <>
            <PublicKeyHashInput
                id="public-key-hash-input"
                variant="outlined" label="Public key hash"
                placeholder="Enter public key hash"
                error={!!errorMessage}
                onChange={() => setErrorMessage('')}
            />
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </>
    )
}
