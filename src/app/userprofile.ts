export class Userprofile {
    constructor(
        public userId: string,
        public firstName: string,
        public lastName: string,
        public region: string,
        public authCode: string,
        public role: string,
        public auditTimestamp: string
    ) {}
}
