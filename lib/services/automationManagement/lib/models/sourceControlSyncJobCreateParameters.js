/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * The parameters supplied to the create source control sync job operation.
 *
 */
class SourceControlSyncJobCreateParameters {
  /**
   * Create a SourceControlSyncJobCreateParameters.
   * @member {string} [commitId] Sets the commit id of the source control sync
   * job.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SourceControlSyncJobCreateParameters
   *
   * @returns {object} metadata of SourceControlSyncJobCreateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SourceControlSyncJobCreateParameters',
      type: {
        name: 'Composite',
        className: 'SourceControlSyncJobCreateParameters',
        modelProperties: {
          commitId: {
            required: false,
            serializedName: 'properties.commitId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SourceControlSyncJobCreateParameters;