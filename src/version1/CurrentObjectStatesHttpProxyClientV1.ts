import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { ClustersProxyHttpClientV1 } from 'pip-clients-clusters-node';

import { CurrentObjectStateV1 } from './CurrentObjectStateV1';
import { ICurrentObjectStatesClientV1 } from './ICurrentObjectStatesClientV1';
import { CurrentObjectStatesHttpClientV1 } from './CurrentObjectStatesHttpClientV1';

export class CurrentObjectStatesHttpProxyClientV1 extends ClustersProxyHttpClientV1<ICurrentObjectStatesClientV1>
    implements ICurrentObjectStatesClientV1 {       
    
    constructor(config?: any) {
        super(CurrentObjectStatesHttpClientV1, 'iqs-services-currobjectstates', 30020);

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getStates(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<CurrentObjectStateV1>) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.getStates(correlationId, orgId, filter, paging, callback);
        });
    }

    public getStateById(correlationId: string, orgId: string, id: string, 
        callback: (err: any, state: CurrentObjectStateV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.getStateById(correlationId, orgId, id, callback);
        });
    }

    public setState(correlationId: string, orgId: string, state: CurrentObjectStateV1, 
        callback: (err: any, state: CurrentObjectStateV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.setState(correlationId, orgId, state, callback);
        });
    }

    public deleteStatesByFilter(correlationId: string, orgId: string, filter: FilterParams, 
        callback: (err: any) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }

            client.deleteStatesByFilter(correlationId, orgId, filter, callback);
        });
    }

    public deleteStateById(correlationId: string, orgId: string, id: string, 
        callback: (err: any, state: CurrentObjectStateV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.deleteStateById(correlationId, orgId, id, callback);
        });
    }

}
