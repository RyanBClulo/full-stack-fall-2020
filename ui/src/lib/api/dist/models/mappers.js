"use strict";
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = exports.EmailRecipient = exports.EmailBlast = exports.Customer = void 0;
exports.Customer = {
    serializedName: "Customer",
    type: {
        name: "Composite",
        className: "Customer",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            firstName: {
                serializedName: "firstName",
                type: {
                    name: "String"
                }
            },
            lastName: {
                serializedName: "lastName",
                type: {
                    name: "String"
                }
            },
            email: {
                serializedName: "email",
                type: {
                    name: "String"
                }
            }
        }
    }
};
exports.EmailBlast = {
    serializedName: "EmailBlast",
    type: {
        name: "Composite",
        className: "EmailBlast",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            customer: {
                serializedName: "customer",
                type: {
                    name: "String"
                }
            },
            template: {
                serializedName: "template",
                type: {
                    name: "String"
                }
            },
            status: {
                serializedName: "status",
                type: {
                    name: "String"
                }
            },
            emailsDelivered: {
                serializedName: "emailsDelivered",
                type: {
                    name: "Number"
                }
            },
            createdOn: {
                serializedName: "createdOn",
                type: {
                    name: "DateTime"
                }
            },
            statusChangedOn: {
                serializedName: "statusChangedOn",
                type: {
                    name: "DateTime"
                }
            }
        }
    }
};
exports.EmailRecipient = {
    serializedName: "EmailRecipient",
    type: {
        name: "Composite",
        className: "EmailRecipient",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            email: {
                serializedName: "email",
                type: {
                    name: "String"
                }
            },
            customer: {
                serializedName: "customer",
                type: {
                    name: "String"
                }
            }
        }
    }
};
exports.Template = {
    serializedName: "Template",
    type: {
        name: "Composite",
        className: "Template",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            body: {
                serializedName: "body",
                type: {
                    name: "String"
                }
            }
        }
    }
};
//# sourceMappingURL=mappers.js.map