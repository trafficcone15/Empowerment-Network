export const addBreaksToText = (str: string): string[] => {
    return str.split(/\.(?![^\s])/).map(sentence => sentence.trim().replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/__(.*?)__/g, "<u>$1</u>"));
};
