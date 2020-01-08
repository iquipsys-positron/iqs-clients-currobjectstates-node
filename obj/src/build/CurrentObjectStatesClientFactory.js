"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const CurrentObjectStatesNullClientV1_1 = require("../version1/CurrentObjectStatesNullClientV1");
const CurrentObjectStatesMemoryClientV1_1 = require("../version1/CurrentObjectStatesMemoryClientV1");
const CurrentObjectStatesDirectClientV1_1 = require("../version1/CurrentObjectStatesDirectClientV1");
const CurrentObjectStatesHttpClientV1_1 = require("../version1/CurrentObjectStatesHttpClientV1");
const CurrentObjectStatesLambdaClientV1_1 = require("../version1/CurrentObjectStatesLambdaClientV1");
const CurrentObjectStatesHttpProxyClientV1_1 = require("../version1/CurrentObjectStatesHttpProxyClientV1");
class CurrentObjectStatesClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(CurrentObjectStatesClientFactory.NullClientV1Descriptor, CurrentObjectStatesNullClientV1_1.CurrentObjectStatesNullClientV1);
        this.registerAsType(CurrentObjectStatesClientFactory.MemoryClientV1Descriptor, CurrentObjectStatesMemoryClientV1_1.CurrentObjectStatesMemoryClientV1);
        this.registerAsType(CurrentObjectStatesClientFactory.DirectClientV1Descriptor, CurrentObjectStatesDirectClientV1_1.CurrentObjectStatesDirectClientV1);
        this.registerAsType(CurrentObjectStatesClientFactory.HttpClientV1Descriptor, CurrentObjectStatesHttpClientV1_1.CurrentObjectStatesHttpClientV1);
        this.registerAsType(CurrentObjectStatesClientFactory.LambdaClientV1Descriptor, CurrentObjectStatesLambdaClientV1_1.CurrentObjectStatesLambdaClientV1);
        this.registerAsType(CurrentObjectStatesClientFactory.HttpProxyClientV1Descriptor, CurrentObjectStatesHttpProxyClientV1_1.CurrentObjectStatesHttpProxyClientV1);
    }
}
exports.CurrentObjectStatesClientFactory = CurrentObjectStatesClientFactory;
CurrentObjectStatesClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-currobjectstates', 'factory', 'default', 'default', '1.0');
CurrentObjectStatesClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-currobjectstates', 'client', 'null', 'default', '1.0');
CurrentObjectStatesClientFactory.MemoryClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-currobjectstates', 'client', 'memory', 'default', '1.0');
CurrentObjectStatesClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-currobjectstates', 'client', 'direct', 'default', '1.0');
CurrentObjectStatesClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-currobjectstates', 'client', 'http', 'default', '1.0');
CurrentObjectStatesClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-currobjectstates', 'client', 'lambda', 'default', '1.0');
CurrentObjectStatesClientFactory.HttpProxyClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-currobjectstates', 'client', 'http-proxy', 'default', '1.0');
//# sourceMappingURL=CurrentObjectStatesClientFactory.js.map