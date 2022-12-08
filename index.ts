// Import stylesheets
import { PalindromeDetector } from './palindrome-detector';
import './style.css';

const numbers = [
  11211230,
  13001120,
  23336014,
  11,
  1,
  null,
  undefined,
  113311.2,
];

numbers.forEach((n) => {
  const isPalinDrome = PalindromeDetector.PalindromeDescendant(n);
  const textnode = document.createTextNode(`${n} => ${isPalinDrome}`);
  const node = document.createElement('li');

  node.appendChild(textnode);
  document.getElementById('output').appendChild(node);
});
