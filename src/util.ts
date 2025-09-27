export const randomString = (len: number, charSet?: string): string => {
  if (!charSet) {
    charSet = "Aa0!";
  }
  let x = charSet.length;
  let cs = "";
  const specials = "~!@#$%^&*()_-+={}[]:;<>,.?";
  while (x--) {
    if (/^[A-Z]$/.test(charSet[x] as string) && !cs.includes("A")) {
      cs = cs + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (/^[a-z]$/.test(charSet[x] as string) && !cs.includes("a")) {
      cs = cs + "abcdefghijklmnopqrstuvwxyz";
    }
    if (/^[0-9]$/.test(charSet[x] as string) && !cs.includes("0")) {
      cs = cs + "0123456789";
    }
    if (specials.includes(charSet[x] as string) && !cs.includes(specials)) {
      cs = cs + specials;
    }
  }
  let randomString = "";
  for (let i = 0; i < len; i++) {
    randomString += cs.charAt(Math.floor(Math.random() * cs.length));
  }
  return randomString;
};

export const replaceAt = (str: string, index: number, replacer: string): string => {
  if (str.length - 1 < index || index < 0 || replacer.length !== 1) {
    return str;
  }

  return str.substring(0, index) + replacer + str.substring(index + 1);
};
