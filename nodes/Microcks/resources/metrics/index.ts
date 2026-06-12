import type { INodeProperties } from 'n8n-workflow';

export const metricsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Metrics"
					]
				}
			},
			"options": [
				{
					"name": "Get Conformance Metrics Aggregation",
					"value": "Get Conformance Metrics Aggregation",
					"action": "Get aggregation of conformance metrics",
					"description": "Get aggregation of conformance metrics",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/metrics/conformance/aggregate"
						}
					}
				},
				{
					"name": "Get Service Test Conformance Metric",
					"value": "Get Service Test Conformance Metric",
					"action": "Get conformance metrics for a Service",
					"description": "Get conformance metrics for a Service",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/metrics/conformance/service/{{$parameter[\"serviceId\"]}}"
						}
					}
				},
				{
					"name": "Get Aggregated Invocations Stats",
					"value": "Get Aggregated Invocations Stats",
					"action": "Get aggregated invocation statistics for a day",
					"description": "Get aggregated invocation statistics for a day",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/metrics/invocations/global"
						}
					}
				},
				{
					"name": "Get Latest Aggregated Invocations Stats",
					"value": "Get Latest Aggregated Invocations Stats",
					"action": "Get aggregated invocations statistics for latest days",
					"description": "Get aggregated invocations statistics for latest days",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/metrics/invocations/global/latest"
						}
					}
				},
				{
					"name": "Get Top Ivnocations Stats By Day",
					"value": "Get Top Ivnocations Stats By Day",
					"action": "Get top invocation statistics for a day",
					"description": "Get top invocation statistics for a day",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/metrics/invocations/top"
						}
					}
				},
				{
					"name": "Get Invocation Stats By Service",
					"value": "Get Invocation Stats By Service",
					"action": "Get invocation statistics for Service",
					"description": "Get invocation statistics for Service",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/metrics/invocations/{{$parameter[\"serviceName\"]}}/{{$parameter[\"serviceVersion\"]}}"
						}
					}
				},
				{
					"name": "Get Latest Test Results",
					"value": "Get Latest Test Results",
					"action": "Get latest tests results",
					"description": "Get latest tests results",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/metrics/tests/latest"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /metrics/conformance/aggregate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Metrics"
					],
					"operation": [
						"Get Conformance Metrics Aggregation"
					]
				}
			}
		},
		{
			"displayName": "GET /metrics/conformance/service/{serviceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Metrics"
					],
					"operation": [
						"Get Service Test Conformance Metric"
					]
				}
			}
		},
		{
			"displayName": "GET /metrics/invocations/global",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Metrics"
					],
					"operation": [
						"Get Aggregated Invocations Stats"
					]
				}
			}
		},
		{
			"displayName": "Day",
			"name": "day",
			"description": "The day to get statistics for (formatted with yyyyMMdd pattern). Default to today if not provided.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "day",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Metrics"
					],
					"operation": [
						"Get Aggregated Invocations Stats"
					]
				}
			}
		},
		{
			"displayName": "GET /metrics/invocations/global/latest",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Metrics"
					],
					"operation": [
						"Get Latest Aggregated Invocations Stats"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Number of days to get back in time. Default is 20.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Metrics"
					],
					"operation": [
						"Get Latest Aggregated Invocations Stats"
					]
				}
			}
		},
		{
			"displayName": "GET /metrics/invocations/top",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Metrics"
					],
					"operation": [
						"Get Top Ivnocations Stats By Day"
					]
				}
			}
		},
		{
			"displayName": "Day",
			"name": "day",
			"description": "The day to get statistics for (formatted with yyyyMMdd pattern). Default to today if not provided.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "day",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Metrics"
					],
					"operation": [
						"Get Top Ivnocations Stats By Day"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The number of top invoked mocks to return",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Metrics"
					],
					"operation": [
						"Get Top Ivnocations Stats By Day"
					]
				}
			}
		},
		{
			"displayName": "GET /metrics/invocations/{serviceName}/{serviceVersion}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Metrics"
					],
					"operation": [
						"Get Invocation Stats By Service"
					]
				}
			}
		},
		{
			"displayName": "Day",
			"name": "day",
			"description": "The day to get statistics for (formatted with yyyyMMdd pattern). Default to today if not provided.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "day",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Metrics"
					],
					"operation": [
						"Get Invocation Stats By Service"
					]
				}
			}
		},
		{
			"displayName": "GET /metrics/tests/latest",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Metrics"
					],
					"operation": [
						"Get Latest Test Results"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Number of days to consider for test results to return. Default is 7 (one week)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Metrics"
					],
					"operation": [
						"Get Latest Test Results"
					]
				}
			}
		},
];
