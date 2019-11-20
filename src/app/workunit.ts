export class Workunit {
    constructor(
        public WORK_UNIT: string,
        public WORK_UNIT_DESC: string,
        public SYSTEM_TYPE: string,
        public SUB_SYSTEM_TYPE: string,
        public REC_TYPE: string,
        public PSA_CODE: string,
        public USER_ID: string,
        public AUDIT_TIMESTAMP: string
    ) { }
}
