import React, { ReactNode } from 'react'
import { DraftStatus, UnpaidStatus, PaidStatus, OverdueStatus, PartStatus } from "../components/partials/StateStatus"
import Ellipsis from './partials/Ellipsis'

// interface Data Invoices
interface InterfaceInvoices {
       id: number,
       created: string,
       client: string,
       project: string,
       country: string,
       amount: number,
       paids: string,
       status: ReactNode
}

// Data Invoices
const DataInvoices = ( props: InterfaceInvoices ) => {
       const  { id, created, client, project, country, amount, status, paids } = props
       return (
              <tr className="">
                     <th>
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-dark" name="" id="" />
                     </th>
                     <td className="text-[16px] px-2 py-3">{ id }</td>
                     <td className="text-[16px] px-2 py-3">{ created }</td>
                     <td className="text-[16px] px-2 py-3">{ client }</td>
                     <td className="text-[16px] px-2 py-3">{ project }</td>
                     <td className="text-[16px] px-2 py-3">{ country }</td>
                     <td className="text-[16px] px-2 py-3">{ amount }</td>
                     <td className="text-[16px] px-2 py-3">{ status }</td>
                     <td className="text-[16px] px-2 py-3">{ paids }</td>
                     <td className="text-[16px] px-2 py-3"><Ellipsis /></td>
              </tr>
       )
}

const Tables = () => {
       return (
              <React.Fragment>
                     <table className="text-blue-800 m-5 w-full mx-auto">
                            <tr className="text-left border-b-2 border-indigo-300">
                                   <th><input type="checkbox" className="form-checkbox h-5 w-5 text-dark" name="" id="" defaultChecked /></th>
                                   <th className="text-[16px] px-2 py-3">ID</th>
                                   <th className="text-[16px] px-2 py-3">Dibuat</th>
                                   <th className="text-[16px] px-2 py-3">Klien</th>
                                   <th className="text-[16px] px-2 py-3">Project</th>
                                   <th className="text-[16px] px-2 py-3">Negara</th>
                                   <th className="text-[16px] px-2 py-3">Total</th>
                                   <th className="text-[16px] px-2 py-3">Status</th>
                                   <th className="text-[16px] px-2 py-3">Dibayar</th>
                            </tr>
                            <DataInvoices id={335} created='27/12/2021' client='Ferdian Ahmad' project='Kubernetes' country='Singapore' amount={888} status={<DraftStatus />} paids="$225 dari $589" />
                            <DataInvoices id={379} created='15/11/2021' client='John Smith' project='UI/UX Design' country='America' amount={742} status={<DraftStatus />} paids="SGD 220 dari SGD 2355" />
                            <DataInvoices id={278} created='24/10/2021' client='John Doe' project='Copywriting' country='Malaysia' amount={456} status={<PaidStatus />} paids="IDR 225000 dari IDR 885000" />
                            <DataInvoices id={335} created='27/12/2021' client='Ferdian Ahmad' project='Kubernetes' country='Singapore' amount={888} status={<OverdueStatus />} paids="$2255 dari $8833" />
                            <DataInvoices id={379} created='15/11/2021' client='John Smith' project='UI/UX Design' country='America' amount={742} status={<PaidStatus />} paids="$2488 dari $4588" />
                            <DataInvoices id={278} created='24/10/2021' client='John Doe' project='Copywriting' country='Malaysia' amount={456} status={<DraftStatus />} paids="$2248 dari $8882" />
                            <DataInvoices id={335} created='27/12/2021' client='Ferdian Ahmad' project='Kubernetes' country='Singapore' amount={888} status={<PaidStatus />} paids="IDR 559334 dari IDR 665222" />
                            <DataInvoices id={379} created='15/11/2021' client='John Smith' project='UI/UX Design' country='America' amount={742} status={<DraftStatus />} paids="$334 dari $8844" />
                            <DataInvoices id={278} created='24/10/2021' client='John Doe' project='Copywriting' country='Malaysia' amount={456} status={<DraftStatus />} paids="$2244 dari $7654" />
                     </table>
              </React.Fragment>
       )
}

export default Tables
