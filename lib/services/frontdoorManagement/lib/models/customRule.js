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
 * Defines contents of a web application rule
 *
 */
class CustomRule {
  /**
   * Create a CustomRule.
   * @member {string} [name] Gets name of the resource that is unique within a
   * policy. This name can be used to access the resource.
   * @member {string} [etag] Gets a unique read-only string that changes
   * whenever the resource is updated.
   * @member {number} priority Describes priority of the rule. Rules with a
   * lower value will be evaluated before rules with a higher value
   * @member {string} ruleType Describes type of rule. Possible values include:
   * 'MatchRule', 'RateLimitRule'
   * @member {number} [rateLimitDurationInMinutes] Defines rate limit duration.
   * Default - 1 minute
   * @member {number} [rateLimitThreshold] Defines rate limit thresold
   * @member {array} matchConditions List of match conditions
   * @member {string} action Type of Actions. Possible values include: 'Allow',
   * 'Block', 'Log'
   * @member {array} [transforms] List of transforms
   */
  constructor() {
  }

  /**
   * Defines the metadata of CustomRule
   *
   * @returns {object} metadata of CustomRule
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CustomRule',
      type: {
        name: 'Composite',
        className: 'CustomRule',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            constraints: {
              MaxLength: 128
            },
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            readOnly: true,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          },
          priority: {
            required: true,
            serializedName: 'priority',
            type: {
              name: 'Number'
            }
          },
          ruleType: {
            required: true,
            serializedName: 'ruleType',
            type: {
              name: 'String'
            }
          },
          rateLimitDurationInMinutes: {
            required: false,
            serializedName: 'rateLimitDurationInMinutes',
            type: {
              name: 'Number'
            }
          },
          rateLimitThreshold: {
            required: false,
            serializedName: 'rateLimitThreshold',
            type: {
              name: 'Number'
            }
          },
          matchConditions: {
            required: true,
            serializedName: 'matchConditions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MatchCondition1ElementType',
                  type: {
                    name: 'Composite',
                    className: 'MatchCondition1'
                  }
              }
            }
          },
          action: {
            required: true,
            serializedName: 'action',
            type: {
              name: 'String'
            }
          },
          transforms: {
            required: false,
            serializedName: 'transforms',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TransformElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CustomRule;