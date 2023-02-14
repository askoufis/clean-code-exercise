export const transform = (strs: string[]): string[] =>
  strs.map((s) => {
    // Get the length of the input
    const len = s.length;
    // Find the most popular letter
    const poplrLtr = findPoplrLtr(s);
    // Re-assign the output to a variable to avoid mutating the input argument
    let outputString = s;
    // Loop executes N times, where n is the length of s (the word)
    for (let i = 0; i < len; i++) {
      outputString = `${poplrLtr}${outputString}${poplrLtr}`;
    }
    // Loop executes N times, where n is the length of s (the word)
    for (let i = 0; i < len; i++) {
      outputString = `${len}${outputString}${len}`;
    }
    return outputString;
  });

export const findPoplrLtr = (s: string): string => {
  const ltrCount: Record<string, number> = {};
  s.split("").forEach((c) => {
    if (c in ltrCount) {
      ltrCount[c] += 1;
    } else {
      ltrCount[c] = 0;
    }
  });
  return (
    Object.entries(ltrCount).sort(
      ([_char1, count1], [_char2, count2]) => count2 - count1
    )?.[0]?.[0] || ""
  );
};
