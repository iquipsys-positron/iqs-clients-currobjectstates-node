"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class CurrentObjectStatesNullClientV1 {
    getStates(correlationId, orgId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    getStateById(correlationId, orgId, id, callback) {
        callback(null, null);
    }
    setState(correlationId, orgId, state, callback) {
        state.id = state.id || state.device_id;
        callback(null, state);
    }
    deleteStatesByFilter(correlationId, orgId, filter, callback) {
        if (callback)
            callback(null);
    }
    deleteStateById(correlationId, orgId, id, callback) {
        if (callback)
            callback(null, null);
    }
}
exports.CurrentObjectStatesNullClientV1 = CurrentObjectStatesNullClientV1;
//# sourceMappingURL=CurrentObjectStatesNullClientV1.js.map