import type { INodeProperties } from 'n8n-workflow';

export const configDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Config"
					]
				}
			},
			"options": [
				{
					"name": "Get Features Configuration",
					"value": "Get Features Configuration",
					"action": "Get features configuration",
					"description": "Get features configuration",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/features/config"
						}
					}
				},
				{
					"name": "Get Keycloak Config",
					"value": "Get Keycloak Config",
					"action": "Get authentification configuration",
					"description": "Get authentification configuration",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/keycloak/config"
						}
					}
				},
				{
					"name": "Get Secrets",
					"value": "Get Secrets",
					"action": "Get Secrets",
					"description": "Get Secrets",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/secrets"
						}
					}
				},
				{
					"name": "Create Secret",
					"value": "Create Secret",
					"action": "Create a new Secret",
					"description": "Create a new Secret",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/secrets"
						}
					}
				},
				{
					"name": "Get Secrets Counter",
					"value": "Get Secrets Counter",
					"action": "Get the Secrets counter",
					"description": "Get the Secrets counter",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/secrets/count"
						}
					}
				},
				{
					"name": "Delete Secret",
					"value": "Delete Secret",
					"action": "Delete Secret",
					"description": "Delete a Secret",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/secrets/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Secret",
					"value": "Get Secret",
					"action": "Get Secret",
					"description": "Retrieve a Secret",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/secrets/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Secret",
					"value": "Update Secret",
					"action": "Update Secret",
					"description": "Update a Secret",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/secrets/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /features/config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Config"
					],
					"operation": [
						"Get Features Configuration"
					]
				}
			}
		},
		{
			"displayName": "GET /keycloak/config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Config"
					],
					"operation": [
						"Get Keycloak Config"
					]
				}
			}
		},
		{
			"displayName": "GET /secrets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Config"
					],
					"operation": [
						"Get Secrets"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Page of Secrets to retrieve (starts at and defaults to 0)",
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
						"Config"
					],
					"operation": [
						"Get Secrets"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"description": "Size of a page. Maximum number of Secrets to include in a response (defaults to 20)",
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
						"Config"
					],
					"operation": [
						"Get Secrets"
					]
				}
			}
		},
		{
			"displayName": "POST /secrets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Config"
					],
					"operation": [
						"Create Secret"
					]
				}
			}
		},
		{
			"displayName": "Ca Cert Pem",
			"name": "caCertPem",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "caCertPem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Config"
					],
					"operation": [
						"Create Secret"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Description of this Secret",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Config"
					],
					"operation": [
						"Create Secret"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "Unique identifier of Secret",
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
						"Config"
					],
					"operation": [
						"Create Secret"
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
			"description": "Unique distinct name of Secret",
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
						"Config"
					],
					"operation": [
						"Create Secret"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Config"
					],
					"operation": [
						"Create Secret"
					]
				}
			}
		},
		{
			"displayName": "Token",
			"name": "token",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "token",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Config"
					],
					"operation": [
						"Create Secret"
					]
				}
			}
		},
		{
			"displayName": "Token Header",
			"name": "tokenHeader",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "tokenHeader",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Config"
					],
					"operation": [
						"Create Secret"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Config"
					],
					"operation": [
						"Create Secret"
					]
				}
			}
		},
		{
			"displayName": "GET /secrets/count",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Config"
					],
					"operation": [
						"Get Secrets Counter"
					]
				}
			}
		},
		{
			"displayName": "DELETE /secrets/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Config"
					],
					"operation": [
						"Delete Secret"
					]
				}
			}
		},
		{
			"displayName": "GET /secrets/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Config"
					],
					"operation": [
						"Get Secret"
					]
				}
			}
		},
		{
			"displayName": "PUT /secrets/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Config"
					],
					"operation": [
						"Update Secret"
					]
				}
			}
		},
];
