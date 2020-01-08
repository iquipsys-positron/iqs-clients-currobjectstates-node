import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { CurrentObjectStatesNullClientV1 } from '../version1/CurrentObjectStatesNullClientV1';
import { CurrentObjectStatesMemoryClientV1 } from '../version1/CurrentObjectStatesMemoryClientV1';
import { CurrentObjectStatesDirectClientV1 } from '../version1/CurrentObjectStatesDirectClientV1';
import { CurrentObjectStatesHttpClientV1 } from '../version1/CurrentObjectStatesHttpClientV1';
import { CurrentObjectStatesLambdaClientV1 } from '../version1/CurrentObjectStatesLambdaClientV1';
import { CurrentObjectStatesHttpProxyClientV1 } from '../version1/CurrentObjectStatesHttpProxyClientV1';

export class CurrentObjectStatesClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('iqs-services-currobjectstates', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('iqs-services-currobjectstates', 'client', 'null', 'default', '1.0');
	public static MemoryClientV1Descriptor = new Descriptor('iqs-services-currobjectstates', 'client', 'memory', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('iqs-services-currobjectstates', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('iqs-services-currobjectstates', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('iqs-services-currobjectstates', 'client', 'lambda', 'default', '1.0');
	public static HttpProxyClientV1Descriptor = new Descriptor('iqs-services-currobjectstates', 'client', 'http-proxy', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(CurrentObjectStatesClientFactory.NullClientV1Descriptor, CurrentObjectStatesNullClientV1);
		this.registerAsType(CurrentObjectStatesClientFactory.MemoryClientV1Descriptor, CurrentObjectStatesMemoryClientV1);
		this.registerAsType(CurrentObjectStatesClientFactory.DirectClientV1Descriptor, CurrentObjectStatesDirectClientV1);
		this.registerAsType(CurrentObjectStatesClientFactory.HttpClientV1Descriptor, CurrentObjectStatesHttpClientV1);
		this.registerAsType(CurrentObjectStatesClientFactory.LambdaClientV1Descriptor, CurrentObjectStatesLambdaClientV1);
		this.registerAsType(CurrentObjectStatesClientFactory.HttpProxyClientV1Descriptor, CurrentObjectStatesHttpProxyClientV1);
	}
	
}
