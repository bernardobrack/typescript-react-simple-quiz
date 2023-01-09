

export default function randomizeArrays<T>(...args:Array<Array<T>>) {
    let newArray: Array<T> = [];
    newArray = args.reduce((prevArray, array) => {
        return [...prevArray, ...array]
    },[])
    return shuffle<T>(newArray);
}

function shuffle<T>(array: Array<T>): Array<T> {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}