let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { CurrentObjectStatesMemoryPersistence } from 'iqs-services-currobjectstates-node';
import { CurrentObjectStatesController } from 'iqs-services-currobjectstates-node';
import { ICurrentObjectStatesClientV1 } from '../../src/version1/ICurrentObjectStatesClientV1';
import { CurrentObjectStatesDirectClientV1 } from '../../src/version1/CurrentObjectStatesDirectClientV1';
import { CurrentObjectStatesClientFixtureV1 } from './CurrentObjectStatesClientFixtureV1';

suite('CurrentObjectStatesDirectClientV1', ()=> {
    let client: CurrentObjectStatesDirectClientV1;
    let fixture: CurrentObjectStatesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new CurrentObjectStatesMemoryPersistence();
        let controller = new CurrentObjectStatesController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-currobjectstates', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-currobjectstates', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new CurrentObjectStatesDirectClientV1();
        client.setReferences(references);

        fixture = new CurrentObjectStatesClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
