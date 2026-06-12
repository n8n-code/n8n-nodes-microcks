import type { INodeProperties } from 'n8n-workflow';

export const testDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Test"
					]
				}
			},
			"options": [
				{
					"name": "Create Test",
					"value": "Create Test",
					"action": "Create a new Test",
					"description": "Create a new Test",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tests"
						}
					}
				},
				{
					"name": "Get Test Results By Service",
					"value": "Get Test Results By Service",
					"action": "Get TestResults by Service",
					"description": "Get TestResults by Service",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tests/service/{{$parameter[\"serviceId\"]}}"
						}
					}
				},
				{
					"name": "Get Test Results By Service Counter",
					"value": "Get Test Results By Service Counter",
					"action": "Get the TestResults for Service counter",
					"description": "Get the TestResults for Service counter",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tests/service/{{$parameter[\"serviceId\"]}}/count"
						}
					}
				},
				{
					"name": "Get Test Result",
					"value": "Get Test Result",
					"action": "Get TestResult",
					"description": "Get TestResult",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tests/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Events By Test Case",
					"value": "Get Events By Test Case",
					"action": "Get events for TestCase",
					"description": "Get events for TestCase",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tests/{{$parameter[\"id\"]}}/events/{{$parameter[\"testCaseId\"]}}"
						}
					}
				},
				{
					"name": "Get Messages By Test Case",
					"value": "Get Messages By Test Case",
					"action": "Get messages for TestCase",
					"description": "Get messages for TestCase",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tests/{{$parameter[\"id\"]}}/messages/{{$parameter[\"testCaseId\"]}}"
						}
					}
				},
				{
					"name": "Report Test Case Result",
					"value": "Report Test Case Result",
					"action": "Report and create a new TestCaseResult",
					"description": "Report a TestCaseResult (typically used by a Test runner)",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tests/{{$parameter[\"id\"]}}/testCaseResult"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /tests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Test"
					],
					"operation": [
						"Create Test"
					]
				}
			}
		},
		{
			"displayName": "Filtered Operations",
			"name": "filteredOperations",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A restriction on service operations to test",
			"routing": {
				"send": {
					"property": "filteredOperations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Test"
					],
					"operation": [
						"Create Test"
					]
				}
			}
		},
		{
			"displayName": "Operation Headers",
			"name": "operationHeaders",
			"type": "json",
			"default": "{}",
			"description": "Specification of additional headers for a Service/API operations. Keys are operation name or \"globals\" (if header applies to all), values are Header objects DTO.",
			"routing": {
				"send": {
					"property": "operationHeaders",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Test"
					],
					"operation": [
						"Create Test"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Runner Type",
			"name": "runnerType",
			"type": "options",
			"default": "HTTP",
			"description": "Type of test strategy (different strategies are implemented by different runners)",
			"options": [
				{
					"name": "HTTP",
					"value": "HTTP"
				},
				{
					"name": "SOAP HTTP",
					"value": "SOAP_HTTP"
				},
				{
					"name": "SOAP UI",
					"value": "SOAP_UI"
				},
				{
					"name": "POSTMAN",
					"value": "POSTMAN"
				},
				{
					"name": "OPEN API SCHEMA",
					"value": "OPEN_API_SCHEMA"
				},
				{
					"name": "ASYNC API SCHEMA",
					"value": "ASYNC_API_SCHEMA"
				},
				{
					"name": "GRPC PROTOBUF",
					"value": "GRPC_PROTOBUF"
				},
				{
					"name": "GRAPHQL SCHEMA",
					"value": "GRAPHQL_SCHEMA"
				}
			],
			"routing": {
				"send": {
					"property": "runnerType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Test"
					],
					"operation": [
						"Create Test"
					]
				}
			}
		},
		{
			"displayName": "Secret Name",
			"name": "secretName",
			"type": "string",
			"default": "",
			"description": "The name of Secret to use for connecting the test endpoint",
			"routing": {
				"send": {
					"property": "secretName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Test"
					],
					"operation": [
						"Create Test"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Service ID",
			"name": "serviceId",
			"type": "string",
			"default": "",
			"description": "Unique identifier of service to test",
			"routing": {
				"send": {
					"property": "serviceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Test"
					],
					"operation": [
						"Create Test"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Test Endpoint",
			"name": "testEndpoint",
			"type": "string",
			"default": "",
			"description": "Endpoint to test for this service",
			"routing": {
				"send": {
					"property": "testEndpoint",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Test"
					],
					"operation": [
						"Create Test"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Timeout",
			"name": "timeout",
			"type": "number",
			"default": 0,
			"description": "The maximum time (in milliseconds) to wait for this test ends",
			"routing": {
				"send": {
					"property": "timeout",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Test"
					],
					"operation": [
						"Create Test"
					]
				}
			}
		},
		{
			"displayName": "GET /tests/service/{serviceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Test"
					],
					"operation": [
						"Get Test Results By Service"
					]
				}
			}
		},
		{
			"displayName": "GET /tests/service/{serviceId}/count",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Test"
					],
					"operation": [
						"Get Test Results By Service Counter"
					]
				}
			}
		},
		{
			"displayName": "GET /tests/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Test"
					],
					"operation": [
						"Get Test Result"
					]
				}
			}
		},
		{
			"displayName": "GET /tests/{id}/events/{testCaseId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Test"
					],
					"operation": [
						"Get Events By Test Case"
					]
				}
			}
		},
		{
			"displayName": "GET /tests/{id}/messages/{testCaseId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Test"
					],
					"operation": [
						"Get Messages By Test Case"
					]
				}
			}
		},
		{
			"displayName": "POST /tests/{id}/testCaseResult",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Test"
					],
					"operation": [
						"Report Test Case Result"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Operation Name",
			"name": "operationName",
			"type": "string",
			"default": "",
			"description": "Name of related operation for this TestCase",
			"routing": {
				"send": {
					"property": "operationName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Test"
					],
					"operation": [
						"Report Test Case Result"
					]
				}
			}
		},
];
