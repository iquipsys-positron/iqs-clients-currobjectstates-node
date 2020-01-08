import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { ICurrentObjectStatesClientV1 } from './ICurrentObjectStatesClientV1';
//import { ICurrentObjectStatesController } from 'iqs-services-currobjectstates-node';
import { CurrentObjectStateV1 } from './CurrentObjectStateV1';

export class CurrentObjectStatesDirectClientV1 extends DirectClient<any> implements ICurrentObjectStatesClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("iqs-services-currobjectstates", "controller", "*", "*", "*"))
    }

    public getStates(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<CurrentObjectStateV1>) => void): void {
        let timing = this.instrument(correlationId, 'states.get_states');
        this._controller.getStates(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getStateById(correlationId: string, orgId: string, id: string, 
        callback: (err: any, state: CurrentObjectStateV1) => void): void {
        let timing = this.instrument(correlationId, 'states.get_state_by_id');
        this._controller.getStateById(correlationId, id, (err, state) => {
            timing.endTiming();
            callback(err, state);
        });
    }

    public setState(correlationId: string, orgId: string, state: CurrentObjectStateV1, 
        callback: (err: any, state: CurrentObjectStateV1) => void): void {
        let timing = this.instrument(correlationId, 'states.set_state');
        this._controller.setState(correlationId, state, (err, state) => {
            timing.endTiming();
            callback(err, state);
        });
    }

    public deleteStatesByFilter(correlationId: string, orgId: string, filter: FilterParams, 
        callback: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'states.delete_states_by_filter');
        this._controller.deleteStatesByFilter(correlationId, filter, (err) => {
            timing.endTiming();
            callback(err);
        });
    }

    public deleteStateById(correlationId: string, orgId: string, id: string, 
        callback: (err: any, state: CurrentObjectStateV1) => void): void {
        let timing = this.instrument(correlationId, 'states.delete_state_by_id');
        this._controller.deleteStateById(correlationId, id, (err, state) => {
            timing.endTiming();
            callback(err, state);
        });
    }

}