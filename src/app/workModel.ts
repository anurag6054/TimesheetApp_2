import { UnitModel } from './unitModel';

export class WorkUnit {
    constructor(
        public unitId: UnitModel,
        public psaCode: string,
        public userId: string,
        public workUnitDesc: string,
        public auditTimestamp: string
    ) { }
}