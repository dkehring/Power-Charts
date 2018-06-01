import { PowerZone } from './PowerZone';
import { Rider } from './Rider';
import { PowerZoneDefinition } from './PowerZoneDefinition';

export class PowerChart {
    rider: Rider;
    zones: PowerZone[] = [];

    constructor(rider: Rider, zones: PowerZoneDefinition[]) {
        this.rider = rider;
        for (let index = 0; index < zones.length; index++) {
            this.zones.push(new PowerZone(rider, zones[index]));
        }
    }
}
