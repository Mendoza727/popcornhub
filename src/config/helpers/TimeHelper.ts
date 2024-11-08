export class TimeConverted {
    public static ConvertTime (value: number): string {
        const hours = Math.floor(value / 60);
        const minutes = value % 60;

        return `${hours}h ${minutes}m`
    }
}