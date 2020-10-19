import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// The new freshness -> after refactoring
// Numbers Collection
const numbersCollection = new NumbersCollection([20, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

// Characters Collection
const charactersCollection = new CharactersCollection("Hello World");
charactersCollection.sort();
console.log(charactersCollection.data);

// Linked List
const linkedList = new LinkedList();
linkedList.add(30);
linkedList.add(-999);
linkedList.add(0);
linkedList.add(-10);
linkedList.add(50);
linkedList.sort();
linkedList.print();

// // The old fashioned way
// // Number sorting
// const numbersCollection = new NumbersCollection([20, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);

// sorter.sort();
// console.log(numbersCollection.data);

// // Character sorting
// const charactersCollection = new CharactersCollection("Hello World!");
// const sorter = new Sorter(charactersCollection);

// sorter.sort();
// console.log(charactersCollection.data);

// // Linked List sorting
// const linkedList = new LinkedList();
// linkedList.add(500);
// linkedList.add(-10);
// linkedList.add(-3);
// linkedList.add(4);

// const sorter = new Sorter(linkedList);
// sorter.sort();
// linkedList.print();
