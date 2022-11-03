import * as React from "react";
import {styled} from "@mui/system";
import {IconButton} from "@mui/material";
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import {shortenString} from "../../utils";

interface IProps {
    publicKeyHash: string;
    balance: string;
    index: number;
    removeRow: (index: number) => void;
}

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '12px',
    boxSizing: 'border-box',
    '&:not(:last-of-type)': {
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
        borderBottomColor: '#eaeff3',

    },
});

const PublicKeyHash = styled('div')({
    color: '#eaeff3',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
});

const Balance = styled('div')({
    color: '#eaeff3',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
});

const RemoveButton = styled(IconButton)({
    width: '10%',
    color: '#eaeff3',
    borderRadius: '8px',
    '&:hover': {
        borderRadius: '8px',
        color: '#DC1403',
    },
});

export const ListRow: React.FC<IProps> = ({publicKeyHash, balance, index, removeRow}) => {
    return (
        <Container>
            <PublicKeyHash>{shortenString(publicKeyHash)}</PublicKeyHash>
            <Balance>{balance}</Balance>
            <RemoveButton onClick={() => removeRow(index)}>
                <PlaylistRemoveIcon />
            </RemoveButton>
        </Container>
    )
}
