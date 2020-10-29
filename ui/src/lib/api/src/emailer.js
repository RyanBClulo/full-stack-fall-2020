"use strict";
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailerMappers = exports.EmailerModels = exports.EmailerContext = exports.Emailer = void 0;
var msRest = require("@azure/ms-rest-js");
var Models = require("./models");
exports.EmailerModels = Models;
var Mappers = require("./models/mappers");
exports.EmailerMappers = Mappers;
var Parameters = require("./models/parameters");
var emailerContext_1 = require("./emailerContext");
Object.defineProperty(exports, "EmailerContext", { enumerable: true, get: function () { return emailerContext_1.EmailerContext; } });
var Emailer = /** @class */ (function (_super) {
    __extends(Emailer, _super);
    /**
     * Initializes a new instance of the Emailer class.
     * @param [options] The parameter options
     */
    function Emailer(options) {
        return _super.call(this, options) || this;
    }
    Emailer.prototype.getCustomers = function (options, callback) {
        return this.sendOperationRequest({
            options: options
        }, getCustomersOperationSpec, callback);
    };
    Emailer.prototype.addCustomer = function (options, callback) {
        return this.sendOperationRequest({
            options: options
        }, addCustomerOperationSpec, callback);
    };
    Emailer.prototype.updateCustomer = function (options, callback) {
        return this.sendOperationRequest({
            options: options
        }, updateCustomerOperationSpec, callback);
    };
    Emailer.prototype.deleteCustomer = function (options, callback) {
        return this.sendOperationRequest({
            options: options
        }, deleteCustomerOperationSpec, callback);
    };
    Emailer.prototype.getEmailBlasts = function (options, callback) {
        return this.sendOperationRequest({
            options: options
        }, getEmailBlastsOperationSpec, callback);
    };
    Emailer.prototype.addEmailBlast = function (options, callback) {
        return this.sendOperationRequest({
            options: options
        }, addEmailBlastOperationSpec, callback);
    };
    Emailer.prototype.updateEmailBlast = function (options, callback) {
        return this.sendOperationRequest({
            options: options
        }, updateEmailBlastOperationSpec, callback);
    };
    Emailer.prototype.deleteEmailBlast = function (id, options, callback) {
        return this.sendOperationRequest({
            id: id,
            options: options
        }, deleteEmailBlastOperationSpec, callback);
    };
    Emailer.prototype.getEmailRecipients = function (options, callback) {
        return this.sendOperationRequest({
            options: options
        }, getEmailRecipientsOperationSpec, callback);
    };
    Emailer.prototype.addEmailRecipient = function (options, callback) {
        return this.sendOperationRequest({
            options: options
        }, addEmailRecipientOperationSpec, callback);
    };
    Emailer.prototype.updateEmailRecipient = function (options, callback) {
        return this.sendOperationRequest({
            options: options
        }, updateEmailRecipientOperationSpec, callback);
    };
    Emailer.prototype.deleteEmailRecipient = function (options, callback) {
        return this.sendOperationRequest({
            options: options
        }, deleteEmailRecipientOperationSpec, callback);
    };
    Emailer.prototype.getTemplates = function (options, callback) {
        return this.sendOperationRequest({
            options: options
        }, getTemplatesOperationSpec, callback);
    };
    Emailer.prototype.addTemplate = function (options, callback) {
        return this.sendOperationRequest({
            options: options
        }, addTemplateOperationSpec, callback);
    };
    Emailer.prototype.updateTemplate = function (options, callback) {
        return this.sendOperationRequest({
            options: options
        }, updateTemplateOperationSpec, callback);
    };
    Emailer.prototype.deleteTemplate = function (options, callback) {
        return this.sendOperationRequest({
            options: options
        }, deleteTemplateOperationSpec, callback);
    };
    return Emailer;
}(emailerContext_1.EmailerContext));
exports.Emailer = Emailer;
// Operation Specifications
var serializer = new msRest.Serializer(Mappers);
var getCustomersOperationSpec = {
    httpMethod: "GET",
    path: "customers",
    responses: {
        200: {
            bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Customer"
                        }
                    }
                }
            }
        },
        default: {}
    },
    serializer: serializer
};
var addCustomerOperationSpec = {
    httpMethod: "POST",
    path: "customers",
    requestBody: {
        parameterPath: [
            "options",
            "body"
        ],
        mapper: Mappers.Customer
    },
    responses: {
        200: {
            bodyMapper: Mappers.Customer
        },
        default: {}
    },
    serializer: serializer
};
var updateCustomerOperationSpec = {
    httpMethod: "PUT",
    path: "customers",
    requestBody: {
        parameterPath: [
            "options",
            "body"
        ],
        mapper: Mappers.Customer
    },
    responses: {
        200: {
            bodyMapper: Mappers.Customer
        },
        default: {}
    },
    serializer: serializer
};
var deleteCustomerOperationSpec = {
    httpMethod: "DELETE",
    path: "customers",
    requestBody: {
        parameterPath: [
            "options",
            "body"
        ],
        mapper: Mappers.Customer
    },
    responses: {
        200: {},
        default: {}
    },
    serializer: serializer
};
var getEmailBlastsOperationSpec = {
    httpMethod: "GET",
    path: "emailblasts",
    responses: {
        200: {
            bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "EmailBlast"
                        }
                    }
                }
            }
        },
        default: {}
    },
    serializer: serializer
};
var addEmailBlastOperationSpec = {
    httpMethod: "POST",
    path: "emailblasts",
    requestBody: {
        parameterPath: [
            "options",
            "body"
        ],
        mapper: Mappers.EmailBlast
    },
    responses: {
        200: {
            bodyMapper: Mappers.EmailBlast
        },
        default: {}
    },
    serializer: serializer
};
var updateEmailBlastOperationSpec = {
    httpMethod: "PUT",
    path: "emailblasts",
    requestBody: {
        parameterPath: [
            "options",
            "body"
        ],
        mapper: Mappers.EmailBlast
    },
    responses: {
        200: {
            bodyMapper: Mappers.EmailBlast
        },
        default: {}
    },
    serializer: serializer
};
var deleteEmailBlastOperationSpec = {
    httpMethod: "DELETE",
    path: "emailblasts/{id}",
    urlParameters: [
        Parameters.id0
    ],
    responses: {
        200: {},
        default: {}
    },
    serializer: serializer
};
var getEmailRecipientsOperationSpec = {
    httpMethod: "GET",
    path: "emailrecipients",
    responses: {
        200: {
            bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "EmailRecipient"
                        }
                    }
                }
            }
        },
        default: {}
    },
    serializer: serializer
};
var addEmailRecipientOperationSpec = {
    httpMethod: "POST",
    path: "emailrecipients",
    requestBody: {
        parameterPath: [
            "options",
            "body"
        ],
        mapper: Mappers.EmailRecipient
    },
    responses: {
        200: {
            bodyMapper: Mappers.EmailRecipient
        },
        default: {}
    },
    serializer: serializer
};
var updateEmailRecipientOperationSpec = {
    httpMethod: "PUT",
    path: "emailrecipients",
    requestBody: {
        parameterPath: [
            "options",
            "body"
        ],
        mapper: Mappers.EmailRecipient
    },
    responses: {
        200: {
            bodyMapper: Mappers.EmailRecipient
        },
        default: {}
    },
    serializer: serializer
};
var deleteEmailRecipientOperationSpec = {
    httpMethod: "DELETE",
    path: "emailrecipients",
    requestBody: {
        parameterPath: [
            "options",
            "body"
        ],
        mapper: Mappers.EmailRecipient
    },
    responses: {
        200: {},
        default: {}
    },
    serializer: serializer
};
var getTemplatesOperationSpec = {
    httpMethod: "GET",
    path: "templates",
    responses: {
        200: {
            bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Template"
                        }
                    }
                }
            }
        },
        default: {}
    },
    serializer: serializer
};
var addTemplateOperationSpec = {
    httpMethod: "POST",
    path: "templates",
    requestBody: {
        parameterPath: [
            "options",
            "body"
        ],
        mapper: Mappers.Template
    },
    responses: {
        200: {
            bodyMapper: Mappers.Template
        },
        default: {}
    },
    serializer: serializer
};
var updateTemplateOperationSpec = {
    httpMethod: "PUT",
    path: "templates",
    requestBody: {
        parameterPath: [
            "options",
            "body"
        ],
        mapper: Mappers.Template
    },
    responses: {
        200: {
            bodyMapper: Mappers.Template
        },
        default: {}
    },
    serializer: serializer
};
var deleteTemplateOperationSpec = {
    httpMethod: "DELETE",
    path: "templates",
    queryParameters: [
        Parameters.id1
    ],
    responses: {
        200: {},
        default: {}
    },
    serializer: serializer
};
//# sourceMappingURL=emailer.js.map