import { PsaId } from "./PsaId";

export class Psamapping {
    constructor(

        public psaId: PsaId,
        public psaDesc: string,
        public userId: string,
        public auditTimestamp: string,
    ) { }
}