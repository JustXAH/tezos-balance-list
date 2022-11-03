import { ListItem } from "./index";

export function getListFromLocalStorage(): ListItem[] {
    const list = localStorage.getItem('list')

    return list ? JSON.parse(list) : [];
}

export function setListToLocalStorage(list: ListItem[]) {
    localStorage.setItem("list", JSON.stringify(list));
}