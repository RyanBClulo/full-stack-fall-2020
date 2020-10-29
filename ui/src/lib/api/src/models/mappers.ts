/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as msRest from "@azure/ms-rest-js";


export const Customer: msRest.CompositeMapper = {
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

export const EmailBlast: msRest.CompositeMapper = {
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

export const EmailRecipient: msRest.CompositeMapper = {
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

export const Template: msRest.CompositeMapper = {
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
