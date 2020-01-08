"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_clients_clusters_node_1 = require("pip-clients-clusters-node");
const CurrentObjectStatesHttpClientV1_1 = require("./CurrentObjectStatesHttpClientV1");
class CurrentObjectStatesHttpProxyClientV1 extends pip_clients_clusters_node_1.ClustersProxyHttpClientV1 {
    constructor(config) {
        super(CurrentObjectStatesHttpClientV1_1.CurrentObjectStatesHttpClientV1, 'iqs-services-currobjectstates', 30020);
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getStates(correlationId, orgId, filter, paging, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.getStates(correlationId, orgId, filter, paging, callback);
        });
    }
    getStateById(correlationId, orgId, id, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.getStateById(correlationId, orgId, id, callback);
        });
    }
    setState(correlationId, orgId, state, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.setState(correlationId, orgId, state, callback);
        });
    }
    deleteStatesByFilter(correlationId, orgId, filter, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }
            client.deleteStatesByFilter(correlationId, orgId, filter, callback);
        });
    }
    deleteStateById(correlationId, orgId, id, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.deleteStateById(correlationId, orgId, id, callback);
        });
    }
}
exports.CurrentObjectStatesHttpProxyClientV1 = CurrentObjectStatesHttpProxyClientV1;
//# sourceMappingURL=CurrentObjectStatesHttpProxyClientV1.js.map