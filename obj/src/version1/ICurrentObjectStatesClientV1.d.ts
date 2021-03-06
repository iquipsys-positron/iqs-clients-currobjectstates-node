import { DataPage } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { CurrentObjectStateV1 } from './CurrentObjectStateV1';
export interface ICurrentObjectStatesClientV1 {
    getStates(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<CurrentObjectStateV1>) => void): void;
    getStateById(correlationId: string, orgId: string, id: string, callback: (err: any, state: CurrentObjectStateV1) => void): void;
    setState(correlationId: string, orgId: string, state: CurrentObjectStateV1, callback: (err: any, state: CurrentObjectStateV1) => void): void;
    deleteStatesByFilter(correlationId: string, orgId: string, filter: FilterParams, callback: (err: any) => void): void;
    deleteStateById(correlationId: string, orgId: string, id: string, callback: (err: any, state: CurrentObjectStateV1) => void): void;
}
