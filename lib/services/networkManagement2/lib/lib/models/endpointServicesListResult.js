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
 * Response for the ListAvailableEndpointServices API service call.
 */
class EndpointServicesListResult extends Array {
  /**
   * Create a EndpointServicesListResult.
   * @member {string} [nextLink] The URL to get the next set of results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of EndpointServicesListResult
   *
   * @returns {object} metadata of EndpointServicesListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EndpointServicesListResult',
      type: {
        name: 'Composite',
        className: 'EndpointServicesListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'EndpointServiceResultElementType',
                  type: {
                    name: 'Composite',
                    className: 'EndpointServiceResult'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = EndpointServicesListResult;