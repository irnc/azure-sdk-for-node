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
 * The service resource properties.
 *
 * @extends models['ServicePropertiesBase']
 */
class ServiceProperties extends models['ServicePropertiesBase'] {
  /**
   * Create a ServiceProperties.
   * @member {string} [provisioningState] The current deployment or
   * provisioning state, which only appears in the response
   * @member {string} [serviceKind] Possible values include: 'Invalid',
   * 'Stateless', 'Stateful'
   * @member {string} [serviceTypeName] The name of the service type
   * @member {object} [partitionDescription]
   * @member {string} [partitionDescription.partitionScheme] Polymorphic
   * Discriminator
   * @member {string} serviceResourceType Polymorphic Discriminator
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ServiceProperties
   *
   * @returns {object} metadata of ServiceProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServiceProperties',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'serviceResourceType',
          clientName: 'serviceResourceType'
        },
        uberParent: 'ServicePropertiesBase',
        className: 'ServiceProperties',
        modelProperties: {
          placementConstraints: {
            required: false,
            serializedName: 'placementConstraints',
            type: {
              name: 'String'
            }
          },
          correlationScheme: {
            required: false,
            serializedName: 'correlationScheme',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ServiceCorrelationDescriptionElementType',
                  type: {
                    name: 'Composite',
                    className: 'ServiceCorrelationDescription'
                  }
              }
            }
          },
          serviceLoadMetrics: {
            required: false,
            serializedName: 'serviceLoadMetrics',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ServiceLoadMetricDescriptionElementType',
                  type: {
                    name: 'Composite',
                    className: 'ServiceLoadMetricDescription'
                  }
              }
            }
          },
          servicePlacementPolicies: {
            required: false,
            serializedName: 'servicePlacementPolicies',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ServicePlacementPolicyDescriptionElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: 'Type',
                      clientName: 'type'
                    },
                    uberParent: 'ServicePlacementPolicyDescription',
                    className: 'ServicePlacementPolicyDescription'
                  }
              }
            }
          },
          defaultMoveCost: {
            required: false,
            serializedName: 'defaultMoveCost',
            type: {
              name: 'String'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'provisioningState',
            type: {
              name: 'String'
            }
          },
          serviceKind: {
            required: false,
            serializedName: 'serviceKind',
            type: {
              name: 'String'
            }
          },
          serviceTypeName: {
            required: false,
            serializedName: 'serviceTypeName',
            type: {
              name: 'String'
            }
          },
          partitionDescription: {
            required: false,
            serializedName: 'partitionDescription',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'PartitionScheme',
                clientName: 'partitionScheme'
              },
              uberParent: 'PartitionSchemeDescription',
              className: 'PartitionSchemeDescription'
            }
          },
          serviceResourceType: {
            required: true,
            serializedName: 'serviceResourceType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ServiceProperties;