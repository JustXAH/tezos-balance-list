import { Sotez } from 'sotez';

const tezos = new Sotez(process.env.REACT_APP_RPC_URL);

export const getBalance = async (publicKeyHash: string) => {
    try {
        const balance = await tezos.getBalance(publicKeyHash);

        return `${Number(balance) / 1000000} ꜩ`;
    } catch (e) {
        console.error(e)
        return 'Invalid public key hash';
    }
}