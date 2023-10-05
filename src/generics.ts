const Numbers = <Type>(oddNumbers: Type[]): Type[] => {
  return oddNumbers.reverse();
};
const numbers = [1, 3, 5, 7, 9, 11];
const logNumbers = Numbers(numbers);
console.log(logNumbers);

function makePair<key, value>(
  key: key,
  value: value
): { key: key; value: value } {
  return { key, value };
}
const namePair = makePair("name", "sandra");
const agePair = makePair("age", 28);
console.log(namePair);
console.log(agePair);

interface Box<T> {
  item: T;
}

function unBox<T>(box: Box<T>): T {
  return box.item;
}

const stringBox: Box<string> = { item: "Hello, TypeScript!" };
console.log(stringBox);
