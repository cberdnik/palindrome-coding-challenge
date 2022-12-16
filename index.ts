// Import stylesheets
import { PalindromeDetector } from './palindrome-detector';
import './style.css';

const numbers = [
  // 123312,
  // 11211230,
  // 13001120,
  // 23336014,
  999911,
  // -23336014,
  // 11,
  // 1,
  // null,
  // undefined,
  // 113311.2,
  // Number.MAX_SAFE_INTEGER,
  // Number.MAX_VALUE,
  // Number.POSITIVE_INFINITY,
  // Number.NEGATIVE_INFINITY,
];

numbers.forEach((n) => {
  const isPalinDrome = PalindromeDetector.PalindromeDescendant(n);
  const textnode = document.createTextNode(`${n} => ${isPalinDrome}`);
  const node = document.createElement('li');

  node.appendChild(textnode);
  document.getElementById('output').appendChild(node);
});
