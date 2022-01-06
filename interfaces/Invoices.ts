import { ReactNode } from "react";

export interface InterfaceInvoices {
       id: number,
       created: string,
       client: string,
       project: string,
       country: string,
       amount: number,
       paids: string,
       status: ReactNode
}