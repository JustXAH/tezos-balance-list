import { Sotez } from 'sotez';

const tezos = new Sotez('https://mainnet-node.madfish.solutions');

export const getBalance = async (publicKeyHash: string) => {
    try {
        const balance = await tezos.getBalance(publicKeyHash);

        return `${Number(balance) / 1000000} ꜩ`;
    } catch (e) {
        console.error(e)
        return 'Invalid public key hash';
    }
}