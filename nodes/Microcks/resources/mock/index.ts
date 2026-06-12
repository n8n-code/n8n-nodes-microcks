import type { INodeProperties } from 'n8n-workflow';

export const mockDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Mock"
					]
				}
			},
			"options": [
				{
					"name": "Export Snapshot",
					"value": "Export Snapshot",
					"action": "Export a snapshot",
					"description": "Export a repostiory snapshot with requested services",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/export"
						}
					}
				},
				{
					"name": "Import Snapshot",
					"value": "Import Snapshot",
					"action": "Import a snapshot",
					"description": "Import a repository snapshot previsouly exported into Microcks",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/import"
						}
					}
				},
				{
					"name": "Get Services",
					"value": "Get Services",
					"action": "Get Services and APIs",
					"description": "Get Services and APIs",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/services"
						}
					}
				},
				{
					"name": "Get Services Counter",
					"value": "Get Services Counter",
					"action": "Get the Services counter",
					"description": "Get the Services counter",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/services/count"
						}
					}
				},
				{
					"name": "Get Services Labels",
					"value": "Get Services Labels",
					"action": "Get the already used labels for Services",
					"description": "Get the already used labels for Services",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/services/labels"
						}
					}
				},
				{
					"name": "Search Services",
					"value": "Search Services",
					"action": "Search for Services and APIs",
					"description": "Search for Services and APIs",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/services/search"
						}
					}
				},
				{
					"name": "Delete Service",
					"value": "Delete Service",
					"action": "Delete Service",
					"description": "Delete a Service",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/services/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Service",
					"value": "Get Service",
					"action": "Get Service",
					"description": "Get Service",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/services/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Service Metadata",
					"value": "Update Service Metadata",
					"action": "Update Service Metadata",
					"description": "Update Service Metadata",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/services/{{$parameter[\"id\"]}}/metadata"
						}
					}
				},
				{
					"name": "Override Service Operation",
					"value": "Override Service Operation",
					"action": "Override Service Operation",
					"description": "Override Service Operation",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/services/{{$parameter[\"id\"]}}/operation"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /export",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mock"
					],
					"operation": [
						"Export Snapshot"
					]
				}
			}
		},
		{
			"displayName": "Service Ids",
			"name": "serviceIds",
			"required": true,
			"description": "List of service identifiers to export",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "serviceIds",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mock"
					],
					"operation": [
						"Export Snapshot"
					]
				}
			}
		},
		{
			"displayName": "POST /import",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mock"
					],
					"operation": [
						"Import Snapshot"
					]
				}
			}
		},
		{
			"displayName": "POST /import<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mock"
					],
					"operation": [
						"Import Snapshot"
					]
				}
			}
		},
		{
			"displayName": "GET /services",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mock"
					],
					"operation": [
						"Get Services"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Page of Services to retrieve (starts at and defaults to 0)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mock"
					],
					"operation": [
						"Get Services"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"description": "Size of a page. Maximum number of Services to include in a response (defaults to 20)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mock"
					],
					"operation": [
						"Get Services"
					]
				}
			}
		},
		{
			"displayName": "GET /services/count",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mock"
					],
					"operation": [
						"Get Services Counter"
					]
				}
			}
		},
		{
			"displayName": "GET /services/labels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mock"
					],
					"operation": [
						"Get Services Labels"
					]
				}
			}
		},
		{
			"displayName": "GET /services/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mock"
					],
					"operation": [
						"Search Services"
					]
				}
			}
		},
		{
			"displayName": "Query Map",
			"name": "queryMap",
			"required": true,
			"description": "Map of criterion. Key can be simply 'name' with value as the searched string. You can also search by label using keys like 'labels.x' where 'x' is the label and value the label value",
			"default": "{}",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "queryMap",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mock"
					],
					"operation": [
						"Search Services"
					]
				}
			}
		},
		{
			"displayName": "DELETE /services/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mock"
					],
					"operation": [
						"Delete Service"
					]
				}
			}
		},
		{
			"displayName": "GET /services/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mock"
					],
					"operation": [
						"Get Service"
					]
				}
			}
		},
		{
			"displayName": "Messages",
			"name": "messages",
			"description": "Whether to include details on services messages into result. Default is false",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "messages",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mock"
					],
					"operation": [
						"Get Service"
					]
				}
			}
		},
		{
			"displayName": "PUT /services/{id}/metadata",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mock"
					],
					"operation": [
						"Update Service Metadata"
					]
				}
			}
		},
		{
			"displayName": "Annotations",
			"name": "annotations",
			"type": "json",
			"default": "{}",
			"description": "Annotations of attached object",
			"routing": {
				"send": {
					"property": "annotations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mock"
					],
					"operation": [
						"Update Service Metadata"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Created On",
			"name": "createdOn",
			"type": "number",
			"default": 0,
			"description": "Creation date of attached object",
			"routing": {
				"send": {
					"property": "createdOn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mock"
					],
					"operation": [
						"Update Service Metadata"
					]
				}
			}
		},
		{
			"displayName": "Labels",
			"name": "labels",
			"type": "json",
			"default": "{}",
			"description": "Labels put on attached object",
			"routing": {
				"send": {
					"property": "labels",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mock"
					],
					"operation": [
						"Update Service Metadata"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Last Update",
			"name": "lastUpdate",
			"type": "number",
			"default": 0,
			"description": "Last update of attached object",
			"routing": {
				"send": {
					"property": "lastUpdate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mock"
					],
					"operation": [
						"Update Service Metadata"
					]
				}
			}
		},
		{
			"displayName": "PUT /services/{id}/operation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mock"
					],
					"operation": [
						"Override Service Operation"
					]
				}
			}
		},
		{
			"displayName": "Operation Name",
			"name": "operationName",
			"required": true,
			"description": "Name of operation to update",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "operationName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mock"
					],
					"operation": [
						"Override Service Operation"
					]
				}
			}
		},
		{
			"displayName": "Default Delay",
			"name": "defaultDelay",
			"type": "number",
			"default": 0,
			"description": "Default delay in milliseconds to apply to mock responses on this operation",
			"routing": {
				"send": {
					"property": "defaultDelay",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mock"
					],
					"operation": [
						"Override Service Operation"
					]
				}
			}
		},
		{
			"displayName": "Dispatcher",
			"name": "dispatcher",
			"type": "string",
			"default": "",
			"description": "Type of dispatcher to apply for this operation",
			"routing": {
				"send": {
					"property": "dispatcher",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mock"
					],
					"operation": [
						"Override Service Operation"
					]
				}
			}
		},
		{
			"displayName": "Dispatcher Rules",
			"name": "dispatcherRules",
			"type": "string",
			"default": "",
			"description": "Rules of dispatcher for this operation",
			"routing": {
				"send": {
					"property": "dispatcherRules",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mock"
					],
					"operation": [
						"Override Service Operation"
					]
				}
			}
		},
		{
			"displayName": "Parameter Constraints",
			"name": "parameterConstraints",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "Constraints that may apply to incoming parameters on this operation",
			"routing": {
				"send": {
					"property": "parameterConstraints",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Mock"
					],
					"operation": [
						"Override Service Operation"
					]
				}
			}
		},
];
