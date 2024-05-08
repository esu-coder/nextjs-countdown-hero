export function isDateInPast (date: Date) : boolean {
    const now = new Date();
    return date.getTime() < now.getTime();
}