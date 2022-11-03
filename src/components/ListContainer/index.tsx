import * as React from "react";
import {styled} from "@mui/system";
import {ListRow} from "./ListRow";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {removeItemByIndex, selectList} from "./slice";

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: '8px',
    marginTop: '56px',
    background: '#232131',
    overflow: 'auto',

});

export const ListContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const list = useAppSelector(selectList);

    const removeRow = (index: number) => {
        dispatch(removeItemByIndex(index))
    }

    return (
        <Container>
            {list.map((item, index) => (
                <ListRow
                    key={index}
                    publicKeyHash={item.publicKeyHash}
                    balance={item.balance}
                    index={index}
                    removeRow={removeRow}
                />
            ))}
        </Container>
    )
}
