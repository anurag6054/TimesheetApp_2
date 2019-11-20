import { WorkId } from "./workId";


export class Usertimesheet {
    constructor(
        public wrkId: WorkId,
        public effort: number,
        public effortType: string,
        public recCategory: string,
        public auditTimestamp: string
    ) { }
}