export const containsCyrillic = (text: string): boolean => {
    const cyrillicPattern: RegExp = /[\u0400-\u04FF]/;
    return cyrillicPattern.test(text);
}