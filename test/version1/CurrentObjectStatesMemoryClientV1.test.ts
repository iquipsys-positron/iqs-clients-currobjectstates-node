let assert = require('chai').assert;
let async = require('async');

import { ICurrentObjectStatesClientV1 } from '../../src/version1/ICurrentObjectStatesClientV1';
import { CurrentObjectStatesMemoryClientV1 } from '../../src/version1/CurrentObjectStatesMemoryClientV1';
import { CurrentObjectStatesClientFixtureV1 } from './CurrentObjectStatesClientFixtureV1';

suite('CurrentObjectStatesMemoryClientV1', ()=> {
    let client: CurrentObjectStatesMemoryClientV1;
    let fixture: CurrentObjectStatesClientFixtureV1;

    setup(() => {
        client = new CurrentObjectStatesMemoryClientV1();
        fixture = new CurrentObjectStatesClientFixtureV1(client);
    });
    
    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
