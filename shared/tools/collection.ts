import { getRandomInt } from "./number";

export function getRandomItem(collection: any[]) {
    const index = getRandomInt(collection.length)
    return collection[index]
}