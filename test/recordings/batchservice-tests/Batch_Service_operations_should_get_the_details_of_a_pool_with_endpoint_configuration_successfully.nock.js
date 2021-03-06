// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'lchency4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://lchency4.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ee7eaf5-6a2f-49fd-953f-d760b5ac2e05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .get('/pools/nodesdkinboundendpointpool/nodes?api-version=2018-08-01.7.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-3687402588_1-20180821t201808z\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/pools/nodesdkinboundendpointpool/nodes/tvm-3687402588_1-20180821t201808z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2018-08-21T20:20:05.186449Z\",\"lastBootTime\":\"2018-08-21T20:20:05.045751Z\",\"allocationTime\":\"2018-08-21T20:18:08.3355857Z\",\"ipAddress\":\"10.0.0.4\",\"affinityId\":\"TVM:tvm-3687402588_1-20180821t201808z\",\"vmSize\":\"standard_a1\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0,\"isDedicated\":true,\"endpointConfiguration\":{\r\n        \"inboundEndpoints\":[\r\n          {\r\n            \"name\":\"TestEndpointConfig.0\",\"protocol\":\"udp\",\"publicIPAddress\":\"13.78.128.240\",\"publicFQDN\":\"dns5b4ff48a-d902-4150-8825-baf7617ed29c-azurebatch-cloudservice.westcentralus.cloudapp.azure.com\",\"frontendPort\":60000,\"backendPort\":64444\r\n          },{\r\n            \"name\":\"SSHRule.0\",\"protocol\":\"tcp\",\"publicIPAddress\":\"13.78.128.240\",\"publicFQDN\":\"dns5b4ff48a-d902-4150-8825-baf7617ed29c-azurebatch-cloudservice.westcentralus.cloudapp.azure.com\",\"frontendPort\":50000,\"backendPort\":22\r\n          }\r\n        ]\r\n      },\"nodeAgentInfo\":{\r\n        \"lastUpdateTime\":\"2018-08-21T20:20:05.045751Z\",\"version\":\"1.3.0.8\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '65c94270-05eb-4d2d-9dba-c233920c9ac8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:23:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .get('/pools/nodesdkinboundendpointpool/nodes?api-version=2018-08-01.7.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-3687402588_1-20180821t201808z\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/pools/nodesdkinboundendpointpool/nodes/tvm-3687402588_1-20180821t201808z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2018-08-21T20:20:05.186449Z\",\"lastBootTime\":\"2018-08-21T20:20:05.045751Z\",\"allocationTime\":\"2018-08-21T20:18:08.3355857Z\",\"ipAddress\":\"10.0.0.4\",\"affinityId\":\"TVM:tvm-3687402588_1-20180821t201808z\",\"vmSize\":\"standard_a1\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0,\"isDedicated\":true,\"endpointConfiguration\":{\r\n        \"inboundEndpoints\":[\r\n          {\r\n            \"name\":\"TestEndpointConfig.0\",\"protocol\":\"udp\",\"publicIPAddress\":\"13.78.128.240\",\"publicFQDN\":\"dns5b4ff48a-d902-4150-8825-baf7617ed29c-azurebatch-cloudservice.westcentralus.cloudapp.azure.com\",\"frontendPort\":60000,\"backendPort\":64444\r\n          },{\r\n            \"name\":\"SSHRule.0\",\"protocol\":\"tcp\",\"publicIPAddress\":\"13.78.128.240\",\"publicFQDN\":\"dns5b4ff48a-d902-4150-8825-baf7617ed29c-azurebatch-cloudservice.westcentralus.cloudapp.azure.com\",\"frontendPort\":50000,\"backendPort\":22\r\n          }\r\n        ]\r\n      },\"nodeAgentInfo\":{\r\n        \"lastUpdateTime\":\"2018-08-21T20:20:05.045751Z\",\"version\":\"1.3.0.8\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '65c94270-05eb-4d2d-9dba-c233920c9ac8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:23:08 GMT',
  connection: 'close' });
 return result; }]];