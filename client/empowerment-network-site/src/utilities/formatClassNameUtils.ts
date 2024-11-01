export const formatClassName = (name: string): string => {
    return name.toLowerCase().replace(/\s+/g, '-');
};