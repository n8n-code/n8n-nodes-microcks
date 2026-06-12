import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { mockDescription } from './resources/mock';
import { testDescription } from './resources/test';
import { jobDescription } from './resources/job';
import { configDescription } from './resources/config';
import { metricsDescription } from './resources/metrics';
import { defaultDescription } from './resources/default';

export class Microcks implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Microcks',
                name: 'N8nDevMicrocks',
                icon: { light: 'file:./microcks.png', dark: 'file:./microcks.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Microcks Kubernetes-native API mocking and testing tool API.',
                defaults: { name: 'Microcks' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevMicrocksApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Mock",
					"value": "Mock",
					"description": "Operations related to API and Services mocks"
				},
				{
					"name": "Test",
					"value": "Test",
					"description": "Operations related to API and Services tests"
				},
				{
					"name": "Job",
					"value": "Job",
					"description": "Operations related to Jobs for discovering mocks and tests"
				},
				{
					"name": "Config",
					"value": "Config",
					"description": "Operations related to configuration"
				},
				{
					"name": "Metrics",
					"value": "Metrics",
					"description": "Operations related to metrics"
				},
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...mockDescription,
		...testDescription,
		...jobDescription,
		...configDescription,
		...metricsDescription,
		...defaultDescription
                ],
        };
}
