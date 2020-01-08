let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { ClusterV1 } from 'pip-clients-clusters-node';
import { ClustersMemoryClientV1 } from 'pip-clients-clusters-node';

import { CurrentObjectStatesMemoryPersistence } from 'iqs-services-currobjectstates-node';
import { CurrentObjectStatesController } from 'iqs-services-currobjectstates-node';
import { CurrentObjectStatesHttpServiceV1 } from 'iqs-services-currobjectstates-node';
import { ICurrentObjectStatesClientV1 } from '../../src/version1/ICurrentObjectStatesClientV1';
import { CurrentObjectStatesHttpProxyClientV1 } from '../../src/version1/CurrentObjectStatesHttpProxyClientV1';
import { CurrentObjectStatesClientFixtureV1 } from './CurrentObjectStatesClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);
var CLUSTER: ClusterV1 = {
    id: '1',
    name: 'test',
    type: 'organizations',
    active: true,
    api_host: 'localhost',
    service_ports: { 
        'iqs-services-currobjectstates': 3000 
    },
    active_tenants: ['1']
}

suite('CurrentObjectStatesHttpProxyClientV1', ()=> {
    let service: CurrentObjectStatesHttpServiceV1;
    let client: CurrentObjectStatesHttpProxyClientV1;
    let fixture: CurrentObjectStatesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new CurrentObjectStatesMemoryPersistence();
        let controller = new CurrentObjectStatesController();

        let clustersClient = new ClustersMemoryClientV1();
        clustersClient.createCluster(null, CLUSTER, (err, cluster) => {});        

        service = new CurrentObjectStatesHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-clusters', 'client', 'memory', 'default', '1.0'), clustersClient,
            new Descriptor('iqs-services-currobjectstates', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-currobjectstates', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-currobjectstates', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new CurrentObjectStatesHttpProxyClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new CurrentObjectStatesClientFixtureV1(client);

        service.open(null, (err) => {
            done(err);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
