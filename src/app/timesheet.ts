import { WorkId } from './workId1';
import { Moment } from 'moment';


export interface Timesheet {

    wrkId: WorkId,
    effort: number,
    auditTimestamp: string

}