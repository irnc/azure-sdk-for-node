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
 * Node Opened Success event.
 *
 * @extends models['NodeEvent']
 */
class NodeOpenedSuccessEvent extends models['NodeEvent'] {
  /**
   * Create a NodeOpenedSuccessEvent.
   * @member {number} nodeInstance Id of Node instance.
   * @member {string} nodeId Id of Node.
   * @member {string} upgradeDomain Upgrade domain of Node.
   * @member {string} faultDomain Fault domain of Node.
   * @member {string} ipAddressOrFQDN IP address or FQDN.
   * @member {string} hostname Name of Host.
   * @member {boolean} isSeedNode Indicates if it is seed node.
   * @member {string} nodeVersion Version of Node.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of NodeOpenedSuccessEvent
   *
   * @returns {object} metadata of NodeOpenedSuccessEvent
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NodeOpenedSuccess',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'Kind',
          clientName: 'kind'
        },
        uberParent: 'FabricEvent',
        className: 'NodeOpenedSuccessEvent',
        modelProperties: {
          eventInstanceId: {
            required: true,
            serializedName: 'EventInstanceId',
            type: {
              name: 'String'
            }
          },
          timeStamp: {
            required: true,
            serializedName: 'TimeStamp',
            type: {
              name: 'DateTime'
            }
          },
          hasCorrelatedEvents: {
            required: false,
            serializedName: 'HasCorrelatedEvents',
            type: {
              name: 'Boolean'
            }
          },
          kind: {
            required: true,
            serializedName: 'Kind',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          nodeName: {
            required: true,
            serializedName: 'NodeName',
            type: {
              name: 'String'
            }
          },
          nodeInstance: {
            required: true,
            serializedName: 'NodeInstance',
            type: {
              name: 'Number'
            }
          },
          nodeId: {
            required: true,
            serializedName: 'NodeId',
            type: {
              name: 'String'
            }
          },
          upgradeDomain: {
            required: true,
            serializedName: 'UpgradeDomain',
            type: {
              name: 'String'
            }
          },
          faultDomain: {
            required: true,
            serializedName: 'FaultDomain',
            type: {
              name: 'String'
            }
          },
          ipAddressOrFQDN: {
            required: true,
            serializedName: 'IpAddressOrFQDN',
            type: {
              name: 'String'
            }
          },
          hostname: {
            required: true,
            serializedName: 'Hostname',
            type: {
              name: 'String'
            }
          },
          isSeedNode: {
            required: true,
            serializedName: 'IsSeedNode',
            type: {
              name: 'Boolean'
            }
          },
          nodeVersion: {
            required: true,
            serializedName: 'NodeVersion',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NodeOpenedSuccessEvent;
