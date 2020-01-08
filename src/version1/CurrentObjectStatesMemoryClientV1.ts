let _ = require('lodash');

import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { ICurrentObjectStatesClientV1 } from './ICurrentObjectStatesClientV1';
import { CurrentObjectStateV1 } from './CurrentObjectStateV1';

export class CurrentObjectStatesMemoryClientV1 implements ICurrentObjectStatesClientV1 {
    private _items: CurrentObjectStateV1[] = [];

    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();
        
        let id = filter.getAsNullableString('id');
        let ids = filter.getAsObject('ids');
        let orgId = filter.getAsNullableString('org_id');
        let deviceId = filter.getAsNullableString('device_id');
        let objectId = filter.getAsNullableString('object_id');
        let fromTime = filter.getAsNullableDateTime('from_time');
        let toTime = filter.getAsNullableDateTime('to_time');
                
        // Process ids filter
        if (_.isString(ids))
            ids = ids.split(',');
        if (!_.isArray(ids))
            ids = null;
        
        return (item) => {
            if (id && item.id != id) 
                return false;
            if (ids && _.indexOf(ids, item.id) < 0)
                return false;
            if (orgId && item.org_id != orgId) 
                return false;
            if (deviceId && item.device_id != deviceId) 
                return false;
            if (objectId && item.object_id != objectId) 
                return false;
            if (fromTime && item.time < fromTime) 
                return false;
            if (toTime && item.time >= toTime) 
                return false;
            return true; 
        };
    }
            
    public getStates(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<CurrentObjectStateV1>) => void): void {

        let filterCurl = this.composeFilter(filter);
        let states = _.filter(this._items, filterCurl);

        callback(null, new DataPage<CurrentObjectStateV1>(states, states.length));
    }

    public getStateById(correlationId: string, orgId: string, id: string, 
        callback: (err: any, state: CurrentObjectStateV1) => void): void {

        let state = _.find(this._items, (item) => item.id == id);

        callback(null, state);
    }

    public setState(correlationId: string, orgId: string, state: CurrentObjectStateV1, 
        callback: (err: any, state: CurrentObjectStateV1) => void): void {
        state.id = state.id || state.device_id;

        _.remove(this._items, (item) => item.id == state.id);
        this._items.push(state);

        callback(null, state);
    }

    public deleteStatesByFilter(correlationId: string, orgId: string, filter: FilterParams, 
        callback: (err: any) => void): void {
        let filterCurl = this.composeFilter(filter);

        _.remove(this._items, filterCurl);

        callback(null);
    }

    public deleteStateById(correlationId: string, orgId: string, id: string, 
        callback: (err: any, state: CurrentObjectStateV1) => void): void {

        let item = _.find(this._items, (item) => item.id == id);
        _.remove(this._items, (item) => item.id == id);

        if (callback) callback(null, item);
    }

}