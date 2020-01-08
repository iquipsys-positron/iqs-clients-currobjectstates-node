"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
class CurrentObjectStatesMemoryClientV1 {
    constructor() {
        this._items = [];
    }
    composeFilter(filter) {
        filter = filter || new pip_services3_commons_node_1.FilterParams();
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
    getStates(correlationId, orgId, filter, paging, callback) {
        let filterCurl = this.composeFilter(filter);
        let states = _.filter(this._items, filterCurl);
        callback(null, new pip_services3_commons_node_2.DataPage(states, states.length));
    }
    getStateById(correlationId, orgId, id, callback) {
        let state = _.find(this._items, (item) => item.id == id);
        callback(null, state);
    }
    setState(correlationId, orgId, state, callback) {
        state.id = state.id || state.device_id;
        _.remove(this._items, (item) => item.id == state.id);
        this._items.push(state);
        callback(null, state);
    }
    deleteStatesByFilter(correlationId, orgId, filter, callback) {
        let filterCurl = this.composeFilter(filter);
        _.remove(this._items, filterCurl);
        callback(null);
    }
    deleteStateById(correlationId, orgId, id, callback) {
        let item = _.find(this._items, (item) => item.id == id);
        _.remove(this._items, (item) => item.id == id);
        if (callback)
            callback(null, item);
    }
}
exports.CurrentObjectStatesMemoryClientV1 = CurrentObjectStatesMemoryClientV1;
//# sourceMappingURL=CurrentObjectStatesMemoryClientV1.js.map