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
 * The parameters for the wait step.
 *
 */
class WaitStepAttributes {
  /**
   * Create a WaitStepAttributes.
   * @member {string} duration The duration in ISO 8601 format of how long the
   * wait should be.
   */
  constructor() {
  }

  /**
   * Defines the metadata of WaitStepAttributes
   *
   * @returns {object} metadata of WaitStepAttributes
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WaitStepAttributes',
      type: {
        name: 'Composite',
        className: 'WaitStepAttributes',
        modelProperties: {
          duration: {
            required: true,
            serializedName: 'duration',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = WaitStepAttributes;