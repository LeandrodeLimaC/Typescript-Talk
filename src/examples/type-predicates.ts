type FinalInvoice = {
  __typename: "FinalInvoice";
  insertedAt: string;
  invoiceNumber: string;
  customerId: number;
  approvedBy: number;
  lineItems: unknown[];
};

type DraftInvoice = {
  __typename: "DraftInvoice";
  insertedAt: string;
  invoiceNumber?: string;
  customerId?: number;
  approvedBy?: number;
  lineItems: unknown[];
};

type Invoice = FinalInvoice | DraftInvoice;

export const isFinalInvoice = (invoice: Invoice): invoice is FinalInvoice => {
  return invoice.__typename === "FinalInvoice";
};

export const isDraftInvoice = (invoice: Invoice): invoice is DraftInvoice => {
  return invoice.__typename === "DraftInvoice";
};
