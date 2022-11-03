import * as React from "react";
import {styled} from "@mui/system";
import {CustomInput} from "./CustomInput";
import {CustomButton} from "./CustomButton";
import {getBalance} from "../../utils";
import {useAppDispatch} from "../../app/hooks";
import {addItem} from "../ListContainer/slice";
import {useState} from "react";

const Container = styled('div')({
    width: '100%',
});

const StyledForm = styled('form')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
});

export const InputContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);
        setErrorMessage('');

        const inputValue = Object.values(event.target).reduce((acc, currentValue) => {
            if (currentValue.localName === 'input') {
                acc.push(currentValue.value);
            }
            return acc;
        }, [])[0];

        if (inputValue) {
            getBalance(inputValue)
                .then((balance) => {
                    if (balance === 'Invalid public key hash') {
                        setErrorMessage(balance);
                    } else {
                        dispatch(addItem({
                            publicKeyHash: inputValue,
                            balance: balance,
                        }))
                    }
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } else {
            setErrorMessage('Empty public key hash field');
            setIsLoading(false);
        }
    };

    return (
        <Container>
            <StyledForm onSubmit={handleSubmit}>
                <CustomInput errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
                <CustomButton isDisabled={!!errorMessage} isLoading={isLoading} />
            </StyledForm>
        </Container>
    )
}
