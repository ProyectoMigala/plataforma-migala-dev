export class Utils {
    static toDateTime(secs: number): Date {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        return t;
    }
}