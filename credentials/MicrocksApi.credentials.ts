import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class MicrocksApi implements ICredentialType {
        name = 'N8nDevMicrocksApi';

        displayName = 'Microcks API';

        icon: Icon = { light: 'file:../nodes/Microcks/microcks.png', dark: 'file:../nodes/Microcks/microcks.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'http://microcks.local',
                        required: true,
                        placeholder: 'http://microcks.local',
                        description: 'The base URL of your Microcks API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
