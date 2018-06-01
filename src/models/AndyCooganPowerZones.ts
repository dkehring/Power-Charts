import { PowerZoneDefinition } from './PowerZoneDefinition';

export class AndyCooganPowerZones {
    zones: PowerZoneDefinition[] = [
        {
            zone: 1,
            description: 'Active Recovery',
            wattsLowPercent: 0,
            wattsHighPercent: 0.55,
            heartRateLowPercent: 0,
            heartRateHighPercent: 0.68,
            rpeLow: 0,
            rpeHigh: 2
        },
        {
            zone: 2,
            description: 'Endurance',
            wattsLowPercent: 0.56,
            wattsHighPercent: 0.75,
            heartRateLowPercent: 0.69,
            heartRateHighPercent: 0.83,
            rpeLow: 2,
            rpeHigh: 3
        },
        {
            zone: 3,
            description: 'Tempo',
            wattsLowPercent: 0.76,
            wattsHighPercent: 0.90,
            heartRateLowPercent: 0.84,
            heartRateHighPercent: 0.94,
            rpeLow: 3,
            rpeHigh: 4
        },
        {
            zone: 4,
            description: 'Lactate Threshold',
            wattsLowPercent: 0.91,
            wattsHighPercent: 1.05,
            heartRateLowPercent: 0.95,
            heartRateHighPercent: 1.05,
            rpeLow: 4,
            rpeHigh: 5
        },
        {
            zone: 5,
            description: 'VO2 Max',
            wattsLowPercent: 1.06,
            wattsHighPercent: 1.20,
            heartRateLowPercent: 1.06,
            heartRateHighPercent: null,
            rpeLow: 6,
            rpeHigh: 7
        },
        {
            zone: 6,
            description: 'Anaerobic Capacity',
            wattsLowPercent: 1.21,
            wattsHighPercent: 1.5,
            heartRateLowPercent: null,
            heartRateHighPercent: null,
            rpeLow: 7,
            rpeHigh: 0
        }
    ];
}
