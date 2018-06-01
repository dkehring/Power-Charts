import { PowerZoneDefinition } from './PowerZoneDefinition';
import { Rider } from './Rider';
import { Utilities } from '../Utilities';

export class PowerZone {
    wattsLow: number;
    wattsMiddle: number;
    wattsHigh: number;
    heartRateLow: number;
    heartRateHigh: number;
    zone: PowerZoneDefinition;

    constructor(rider: Rider, zoneDefinition: PowerZoneDefinition) {
        this.zone = zoneDefinition;
        this.wattsLow = zoneDefinition.wattsLowPercent * rider.ftpWatts;
        this.wattsHigh = zoneDefinition.wattsHighPercent * rider.ftpWatts;
        this.heartRateLow = Utilities.calculateHeartRate(rider.ageYears, rider.restingHeartRate, zoneDefinition.heartRateLowPercent);
        this.heartRateHigh = Utilities.calculateHeartRate(rider.ageYears, rider.restingHeartRate, zoneDefinition.heartRateHighPercent);
    }
}
