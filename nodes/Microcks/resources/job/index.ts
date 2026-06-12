import type { INodeProperties } from 'n8n-workflow';

export const jobDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					]
				}
			},
			"options": [
				{
					"name": "Upload Artifact",
					"value": "Upload Artifact",
					"action": "Upload an artifact",
					"description": "Uploads an artifact to be imported by Microcks.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/artifact/upload"
						}
					}
				},
				{
					"name": "Get Import Jobs",
					"value": "Get Import Jobs",
					"action": "Get ImportJobs",
					"description": "Retrieve a list of ImportJobs",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/jobs"
						}
					}
				},
				{
					"name": "Create Import Job",
					"value": "Create Import Job",
					"action": "Create ImportJob",
					"description": "Create a new ImportJob",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/jobs"
						}
					}
				},
				{
					"name": "Get Import Job Counter",
					"value": "Get Import Job Counter",
					"action": "Get the ImportJobs counter",
					"description": "Get the ImportJobs counter",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/jobs/count"
						}
					}
				},
				{
					"name": "Delete Import Job",
					"value": "Delete Import Job",
					"action": "Delete ImportJob",
					"description": "Delete an ImportJob",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/jobs/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "GET Jobs",
					"value": "GET Jobs",
					"action": "Get ImportJob",
					"description": "Retrieve an ImportJob using its identifier",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/jobs/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "POST Jobs",
					"value": "POST Jobs",
					"action": "Update ImportJob",
					"description": "Update an ImportJob",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/jobs/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Activate Import Job",
					"value": "Activate Import Job",
					"action": "Activate an ImportJob",
					"description": "Make an ImportJob active, so that it is executed",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/jobs/{{$parameter[\"id\"]}}/activate"
						}
					}
				},
				{
					"name": "Start Import Job",
					"value": "Start Import Job",
					"action": "Start an ImportJob",
					"description": "Starting an ImportJob forces it to immediatly import mock definitions",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/jobs/{{$parameter[\"id\"]}}/start"
						}
					}
				},
				{
					"name": "Stop Import Job",
					"value": "Stop Import Job",
					"action": "Stop an ImportJob",
					"description": "Stopping an ImportJob desactivate it, so that it won't execute at next schedule",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/jobs/{{$parameter[\"id\"]}}/stop"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /artifact/upload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"Upload Artifact"
					]
				}
			}
		},
		{
			"displayName": "Main Artifact",
			"name": "mainArtifact",
			"required": true,
			"description": "Flag telling if this should be considered as primary or secondary artifact. Default to 'true'",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "mainArtifact",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"Upload Artifact"
					]
				}
			}
		},
		{
			"displayName": "POST /artifact/upload<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"Upload Artifact"
					]
				}
			}
		},
		{
			"displayName": "GET /jobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"Get Import Jobs"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Page of ImportJobs to retrieve (starts at and defaults to 0)",
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
						"Job"
					],
					"operation": [
						"Get Import Jobs"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"description": "Size of a page. Maximum number of ImportJobs to include in a response (defaults to 20)",
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
						"Job"
					],
					"operation": [
						"Get Import Jobs"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Name like criterion for query",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"Get Import Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /jobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"Create Import Job"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
			"description": "Whether this ImportJob is active (ie. scheduled for execution)",
			"routing": {
				"send": {
					"property": "active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"Create Import Job"
					]
				}
			}
		},
		{
			"displayName": "Created Date",
			"name": "createdDate",
			"type": "string",
			"default": "",
			"description": "Creation date for this ImportJob",
			"routing": {
				"send": {
					"property": "createdDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"Create Import Job"
					]
				}
			}
		},
		{
			"displayName": "Etag",
			"name": "etag",
			"type": "string",
			"default": "",
			"description": "Etag of repository URL during previous import. Is used for not re-importing if no recent changes",
			"routing": {
				"send": {
					"property": "etag",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"Create Import Job"
					]
				}
			}
		},
		{
			"displayName": "Frequency",
			"name": "frequency",
			"type": "string",
			"default": "",
			"description": "Reserved for future usage",
			"routing": {
				"send": {
					"property": "frequency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"Create Import Job"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "Unique identifier of ImportJob",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"Create Import Job"
					]
				}
			}
		},
		{
			"displayName": "Last Import Date",
			"name": "lastImportDate",
			"type": "string",
			"default": "",
			"description": "Date last import was done",
			"routing": {
				"send": {
					"property": "lastImportDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"Create Import Job"
					]
				}
			}
		},
		{
			"displayName": "Last Import Error",
			"name": "lastImportError",
			"type": "string",
			"default": "",
			"description": "Error message of last import (if any)",
			"routing": {
				"send": {
					"property": "lastImportError",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"Create Import Job"
					]
				}
			}
		},
		{
			"displayName": "Main Artifact",
			"name": "mainArtifact",
			"type": "boolean",
			"default": true,
			"description": "Flag telling if considered as primary or secondary artifact. Default to `true`",
			"routing": {
				"send": {
					"property": "mainArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"Create Import Job"
					]
				}
			}
		},
		{
			"displayName": "Metadata",
			"name": "metadata",
			"type": "json",
			"default": "{}",
			"description": "Commodity object for holding metadata on any entity. This object is inspired by Kubernetes metadata.",
			"routing": {
				"send": {
					"property": "metadata",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"Create Import Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Unique distinct name of this ImportJob",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"Create Import Job"
					]
				}
			}
		},
		{
			"displayName": "Repository Disable SSL Validation",
			"name": "repositoryDisableSSLValidation",
			"type": "boolean",
			"default": true,
			"description": "Whether to disable SSL certificate verification when checking repository",
			"routing": {
				"send": {
					"property": "repositoryDisableSSLValidation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"Create Import Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Repository URL",
			"name": "repositoryUrl",
			"type": "string",
			"default": "",
			"description": "URL of mocks and tests repository artifact",
			"routing": {
				"send": {
					"property": "repositoryUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"Create Import Job"
					]
				}
			}
		},
		{
			"displayName": "Secret Ref",
			"name": "secretRef",
			"type": "string",
			"default": "{\n    \"secretId\": \"5be58fb51ed744d1b87481bd\",\n    \"name\": \"Gogs internal\"\n}",
			"description": "Lightweight reference for an existing Secret",
			"routing": {
				"send": {
					"property": "secretRef",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"Create Import Job"
					]
				}
			}
		},
		{
			"displayName": "Service Refs",
			"name": "serviceRefs",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "References of Services discovered when checking repository",
			"routing": {
				"send": {
					"property": "serviceRefs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"Create Import Job"
					]
				}
			}
		},
		{
			"displayName": "GET /jobs/count",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"Get Import Job Counter"
					]
				}
			}
		},
		{
			"displayName": "DELETE /jobs/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"Delete Import Job"
					]
				}
			}
		},
		{
			"displayName": "GET /jobs/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"GET Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /jobs/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"POST Jobs"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
			"description": "Whether this ImportJob is active (ie. scheduled for execution)",
			"routing": {
				"send": {
					"property": "active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"POST Jobs"
					]
				}
			}
		},
		{
			"displayName": "Created Date",
			"name": "createdDate",
			"type": "string",
			"default": "",
			"description": "Creation date for this ImportJob",
			"routing": {
				"send": {
					"property": "createdDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"POST Jobs"
					]
				}
			}
		},
		{
			"displayName": "Etag",
			"name": "etag",
			"type": "string",
			"default": "",
			"description": "Etag of repository URL during previous import. Is used for not re-importing if no recent changes",
			"routing": {
				"send": {
					"property": "etag",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"POST Jobs"
					]
				}
			}
		},
		{
			"displayName": "Frequency",
			"name": "frequency",
			"type": "string",
			"default": "",
			"description": "Reserved for future usage",
			"routing": {
				"send": {
					"property": "frequency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"POST Jobs"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "Unique identifier of ImportJob",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"POST Jobs"
					]
				}
			}
		},
		{
			"displayName": "Last Import Date",
			"name": "lastImportDate",
			"type": "string",
			"default": "",
			"description": "Date last import was done",
			"routing": {
				"send": {
					"property": "lastImportDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"POST Jobs"
					]
				}
			}
		},
		{
			"displayName": "Last Import Error",
			"name": "lastImportError",
			"type": "string",
			"default": "",
			"description": "Error message of last import (if any)",
			"routing": {
				"send": {
					"property": "lastImportError",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"POST Jobs"
					]
				}
			}
		},
		{
			"displayName": "Main Artifact",
			"name": "mainArtifact",
			"type": "boolean",
			"default": true,
			"description": "Flag telling if considered as primary or secondary artifact. Default to `true`",
			"routing": {
				"send": {
					"property": "mainArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"POST Jobs"
					]
				}
			}
		},
		{
			"displayName": "Metadata",
			"name": "metadata",
			"type": "json",
			"default": "{}",
			"description": "Commodity object for holding metadata on any entity. This object is inspired by Kubernetes metadata.",
			"routing": {
				"send": {
					"property": "metadata",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"POST Jobs"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Unique distinct name of this ImportJob",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"POST Jobs"
					]
				}
			}
		},
		{
			"displayName": "Repository Disable SSL Validation",
			"name": "repositoryDisableSSLValidation",
			"type": "boolean",
			"default": true,
			"description": "Whether to disable SSL certificate verification when checking repository",
			"routing": {
				"send": {
					"property": "repositoryDisableSSLValidation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"POST Jobs"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Repository URL",
			"name": "repositoryUrl",
			"type": "string",
			"default": "",
			"description": "URL of mocks and tests repository artifact",
			"routing": {
				"send": {
					"property": "repositoryUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"POST Jobs"
					]
				}
			}
		},
		{
			"displayName": "Secret Ref",
			"name": "secretRef",
			"type": "string",
			"default": "{\n    \"secretId\": \"5be58fb51ed744d1b87481bd\",\n    \"name\": \"Gogs internal\"\n}",
			"description": "Lightweight reference for an existing Secret",
			"routing": {
				"send": {
					"property": "secretRef",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"POST Jobs"
					]
				}
			}
		},
		{
			"displayName": "Service Refs",
			"name": "serviceRefs",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "References of Services discovered when checking repository",
			"routing": {
				"send": {
					"property": "serviceRefs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"POST Jobs"
					]
				}
			}
		},
		{
			"displayName": "PUT /jobs/{id}/activate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"Activate Import Job"
					]
				}
			}
		},
		{
			"displayName": "PUT /jobs/{id}/start",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"Start Import Job"
					]
				}
			}
		},
		{
			"displayName": "PUT /jobs/{id}/stop",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Job"
					],
					"operation": [
						"Stop Import Job"
					]
				}
			}
		},
];
