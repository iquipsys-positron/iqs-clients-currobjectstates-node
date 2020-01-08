let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { CurrentObjectStatesMemoryPersistence } from 'iqs-services-currobjectstates-node';
import { CurrentObjectStatesController } from 'iqs-services-currobjectstates-node';
import { CurrentObjectStatesHttpServiceV1 } from 'iqs-services-currobjectstates-node';
import { ICurrentObjectStatesClientV1 } from '../../src/version1/ICurrentObjectStatesClientV1';
import { CurrentObjectStatesHttpClientV1 } from '../../src/version1/CurrentObjectStatesHttpClientV1';
import { CurrentObjectStatesClientFixtureV1 } from './CurrentObjectStatesClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('CurrentObjectStatesHttpClientV1', ()=> {
    let service: CurrentObjectStatesHttpServiceV1;
    let client: CurrentObjectStatesHttpClientV1;
    let fixture: CurrentObjectStatesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new CurrentObjectStatesMemoryPersistence();
        let controller = new CurrentObjectStatesController();

        service = new CurrentObjectStatesHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-currobjectstates', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-currobjectstates', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-currobjectstates', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new CurrentObjectStatesHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new CurrentObjectStatesClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
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
