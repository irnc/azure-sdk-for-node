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

const models = require('./index');

/**
 * An error response from the Batch AI service.
 *
 */
class BatchAIError {
  /**
   * Create a BatchAIError.
   * @member {string} [code] An identifier for the error. Codes are invariant
   * and are intended to be consumed programmatically.
   * @member {string} [message] A message describing the error, intended to be
   * suitable for display in a user interface.
   * @member {array} [details] A list of additional details about the error.
   */
  constructor() {
  }

  /**
   * Defines the metadata of BatchAIError
   *
   * @returns {object} metadata of BatchAIError
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BatchAIError',
      type: {
        name: 'Composite',
        className: 'BatchAIError',
        modelProperties: {
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          details: {
            required: false,
            serializedName: 'details',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'NameValuePairElementType',
                  type: {
                    name: 'Composite',
                    className: 'NameValuePair'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = BatchAIError;