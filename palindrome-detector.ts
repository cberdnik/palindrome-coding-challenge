import _ from 'lodash';

export class PalindromeDetector {
  private _isPalindrome: boolean = false;
  private _numberString: string;

  private constructor(num: number) {
    this._numberString = Math.floor(num).toString();
  }

  public static PalindromeDescendant(num: number) {
    const palinDromeDetector = new PalindromeDetector(num);
    return palinDromeDetector.isPalindrome();
  }

  private isPalindrome(): boolean {
    this.checkForPalindrome(this._numberString);
    return this._isPalindrome;
  }

  private checkForPalindrome(str: string): void {
    if (!str || str.length == 0 || str.length % 2 > 0) {
      this._isPalindrome = this._isPalindrome || false;
      return;
    }

    if (this.isStringPalindrome(str)) {
      this._isPalindrome = this._isPalindrome || true;
      return;
    }

    const nextChild = this.calculateNextChild(str);

    this.checkForPalindrome(nextChild);
  }

  private isStringPalindrome(str: string): boolean {
    const left = str.slice(0, str.length / 2);
    const right = str.slice(str.length / 2);
    const reversedRight = this.reverse(right);

    return left.indexOf(reversedRight) === 0;
  }

  private reverse(str: string): string {
    return str.split('').reverse().join('');
  }

  private calculateNextChild(str: string): string {
    let nextChild = '';

    if (str.length <= 2) {
      return nextChild;
    }

    for (let i = 0; i < str.length - 1; i += 2) {
      const sum: number = this.sumDigits(str.charAt(i), str.charAt(i + 1));
      nextChild = nextChild.concat(sum.toString());
    }

    return nextChild;
  }

  private sumDigits(digitA: string, digitB: string) {
    const a = Number.parseInt(digitA);
    const b = Number.parseInt(digitB);

    return a + b;
  }
}
