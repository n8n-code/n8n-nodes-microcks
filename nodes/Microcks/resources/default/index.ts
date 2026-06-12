import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Get Resources By Service",
					"value": "Get Resources By Service",
					"action": "Get Resources by Service",
					"description": "Get Resources by Service",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/resources/service/{{$parameter[\"serviceId\"]}}"
						}
					}
				},
				{
					"name": "Get Resource",
					"value": "Get Resource",
					"action": "Get Resource",
					"description": "Get Resource",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/resources/{{$parameter[\"name\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /resources/service/{serviceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Resources By Service"
					]
				}
			}
		},
		{
			"displayName": "GET /resources/{name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Resource"
					]
				}
			}
		},
];
