// Import stylesheets
import { PalindromeDetector } from './palindrome.service';
import './style.css';

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

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
  console.log(`${n} => ${isPalinDrome}`);
});
