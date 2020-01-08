import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { ICurrentObjectStatesClientV1 } from './ICurrentObjectStatesClientV1';
import { CurrentObjectStateV1 } from './CurrentObjectStateV1';

export class CurrentObjectStatesNullClientV1 implements ICurrentObjectStatesClientV1 {
            
    public getStates(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<CurrentObjectStateV1>) => void): void {
        callback(null, new DataPage<CurrentObjectStateV1>([], 0));
    }

    public getStateById(correlationId: string, orgId: string, id: string, 
        callback: (err: any, state: CurrentObjectStateV1) => void): void {
        callback(null, null);
    }

    public setState(correlationId: string, orgId: string, state: CurrentObjectStateV1, 
        callback: (err: any, state: CurrentObjectStateV1) => void): void {
        state.id = state.id || state.device_id;
        callback(null, state);
    }

    public deleteStatesByFilter(correlationId: string, orgId: string, filter: FilterParams, 
        callback: (err: any) => void): void {
        if (callback) callback(null);
    }

    public deleteStateById(correlationId: string, orgId: string, id: string, 
        callback: (err: any, state: CurrentObjectStateV1) => void): void {
        if (callback) callback(null, null);
    }

}