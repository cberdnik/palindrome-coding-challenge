import _ from 'lodash';

export class PalindromeDetector {
  private _isPalindrome: boolean = false;

  private constructor(private _number: number) {}

  public static PalindromeDescendant(num: number): boolean {
    const palinDromeDetector = new PalindromeDetector(num);

    return palinDromeDetector.isPalindrome();
  }

  private isPalindrome(): boolean {
    if (
      this._number == null ||
      Number.isNaN(this._number) ||
      !Number.isFinite(this._number)
    ) {
      return false;
    }
    const num = Math.abs(this._number);

    this.checkForPalindrome(num.toString());
    return this._isPalindrome;
  }

  private checkForPalindrome(str: string): void {
    if (str.length === 0) {
      this._isPalindrome = false;
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
    const reversed = this.reverse(str);

    return str.indexOf(reversed) === 0;
  }

  private reverse(str: string): string {
    return str.split('').reverse().join('');
  }

  private calculateNextChild(str: string): string {
    console.log(`str: ${str}`);
    let nextChild = '';

    if (str.length <= 2) {
      return nextChild;
    }

    for (let i = 0; i < str.length - 1; i += 2) {
      const sum: number = this.sumDigits(str.charAt(i), str.charAt(i + 1));
      nextChild = nextChild.concat(sum.toString());
      console.log(`sum: ${sum}`);
    }

    console.log(`nextChild: ${nextChild}`);
    return nextChild;
  }

  private sumDigits(digitA: string, digitB: string) {
    const a = Number.parseInt(digitA);
    const b = Number.parseInt(digitB);

    return a + b;
  }
}
