export class Rider {
    name: string;
    weightKg: number;
    restingHeartRate: number;
    ageYears: number;
    ftpWatts: number;

    wattsPerKg(): number {
        if (this.weightKg && this.weightKg !== 0) {
            return this.ftpWatts / this.weightKg;
        }
        return 0;
    }
}
