"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class CurrentObjectStatesDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("iqs-services-currobjectstates", "controller", "*", "*", "*"));
    }
    getStates(correlationId, orgId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'states.get_states');
        this._controller.getStates(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getStateById(correlationId, orgId, id, callback) {
        let timing = this.instrument(correlationId, 'states.get_state_by_id');
        this._controller.getStateById(correlationId, id, (err, state) => {
            timing.endTiming();
            callback(err, state);
        });
    }
    setState(correlationId, orgId, state, callback) {
        let timing = this.instrument(correlationId, 'states.set_state');
        this._controller.setState(correlationId, state, (err, state) => {
            timing.endTiming();
            callback(err, state);
        });
    }
    deleteStatesByFilter(correlationId, orgId, filter, callback) {
        let timing = this.instrument(correlationId, 'states.delete_states_by_filter');
        this._controller.deleteStatesByFilter(correlationId, filter, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
    deleteStateById(correlationId, orgId, id, callback) {
        let timing = this.instrument(correlationId, 'states.delete_state_by_id');
        this._controller.deleteStateById(correlationId, id, (err, state) => {
            timing.endTiming();
            callback(err, state);
        });
    }
}
exports.CurrentObjectStatesDirectClientV1 = CurrentObjectStatesDirectClientV1;
//# sourceMappingURL=CurrentObjectStatesDirectClientV1.js.map