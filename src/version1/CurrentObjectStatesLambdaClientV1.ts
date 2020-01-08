let _ = require('lodash');

import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';

import { CurrentObjectStateV1 } from './CurrentObjectStateV1';
import { ICurrentObjectStatesClientV1 } from './ICurrentObjectStatesClientV1';

export class CurrentObjectStatesLambdaClientV1 extends CommandableLambdaClient implements ICurrentObjectStatesClientV1 {       

    constructor(config?: any) {
        super('curr_object_states');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getStates(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<CurrentObjectStateV1>) => void): void {
        this.callCommand( 
            'get_states', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getStateById(correlationId: string, orgId: string, id: string, 
        callback: (err: any, state: CurrentObjectStateV1) => void): void {
        this.callCommand(
            'get_state_by_id', 
            correlationId,
            {
                state_id: id
            }, 
            callback
        );
    }

    public setState(correlationId: string, orgId: string, state: CurrentObjectStateV1, 
        callback: (err: any, state: CurrentObjectStateV1) => void): void {
        this.callCommand(
            'set_state', 
            correlationId,
            {
                state: state
            }, 
            callback
        );
    }

    public deleteStatesByFilter(correlationId: string, orgId: string, filter: FilterParams, 
        callback: (err: any) => void): void {
        this.callCommand(
            'delete_states_by_filter', 
            correlationId,
            {
                filter: filter
            }, 
            callback
        );
    }

    public deleteStateById(correlationId: string, orgId: string, id: string, 
        callback: (err: any, state: CurrentObjectStateV1) => void): void {
        this.callCommand(
            'delete_state_by_id', 
            correlationId,
            {
                state_id: id
            }, 
            callback
        );
    }

}
