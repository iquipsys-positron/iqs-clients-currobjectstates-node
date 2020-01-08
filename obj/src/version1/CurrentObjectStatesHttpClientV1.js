"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class CurrentObjectStatesHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor(config) {
        super('v1/curr_object_states');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getStates(correlationId, orgId, filter, paging, callback) {
        this.callCommand('get_states', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getStateById(correlationId, orgId, id, callback) {
        this.callCommand('get_state_by_id', correlationId, {
            state_id: id
        }, callback);
    }
    setState(correlationId, orgId, state, callback) {
        this.callCommand('set_state', correlationId, {
            state: state
        }, callback);
    }
    deleteStatesByFilter(correlationId, orgId, filter, callback) {
        this.callCommand('delete_states_by_filter', correlationId, {
            filter: filter
        }, callback);
    }
    deleteStateById(correlationId, orgId, id, callback) {
        this.callCommand('delete_state_by_id', correlationId, {
            state_id: id
        }, callback);
    }
}
exports.CurrentObjectStatesHttpClientV1 = CurrentObjectStatesHttpClientV1;
//# sourceMappingURL=CurrentObjectStatesHttpClientV1.js.map