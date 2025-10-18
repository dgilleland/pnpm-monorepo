import { ToWords } from "to-words";

const toWords = new ToWords();

export const countUp = function(max:number = 10):string[] {
    let words = [];
    for(let count = 1; count <= max; count++) {
        words.push(toWords.convert(count));
    }
    return words;
}
