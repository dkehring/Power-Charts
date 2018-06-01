export class Utilities {
    static agePredictedMaxHeartRate(ageYears: number): number {
        return (208 - (.7 * ageYears));
    }

    static calculateHeartRate(ageYears: number, restingHeartRate: number, targetPercent?: number): number {
        if (targetPercent) {
            return ((Utilities.agePredictedMaxHeartRate(ageYears) - restingHeartRate) * targetPercent) + restingHeartRate;
        }
    }
}
