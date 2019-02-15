export class BaseDefinitions {
  constructor(schemaName, body) {
    this.addTaskRequest = {
      description: `create ${schemaName} request`,
      properties: body,
    }

    this.batchAddTaskRequest = {
      description: 'batch add request',
      type: 'array',
      items: this.addTaskRequest,
    }

    this.updateTaskRequest = {
      description: `update ${schemaName} request`,
      properties: body,
    }

    this.batchUpdateTaskRequest = {
      description: 'batch update request',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          data: this.updateTaskRequest,
          pkeyValue: {
            description: 'id',
            type: 'integer',
            format: 'int64',
          },
        },
      },
    }

    this.batchDeleteTaskRequest = {
      description: 'batch delete request',
      type: 'array',
      items: {
        description: 'id',
        type: 'integer',
        format: 'int64',
      },
    }
  }
}
