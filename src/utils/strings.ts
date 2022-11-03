export function shortenString(str: string) {
    return str.substring(0, 12) + '...' + str.substring(str.length - 12)
}