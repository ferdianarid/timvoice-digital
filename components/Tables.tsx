import React from 'react'

// interface Data Invoices
interface InterfaceInvoices {
       id: number,
       created: string,
       client: string,
       project: string,
       country: string,
       amount: number,
       status: string
}

// Data Invoices
const DataInvoices = ( props: InterfaceInvoices ) => {
       const  { id, created, client, project, country, amount, status } = props
       return (
              <tr className="">
                     <th>
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-dark" name="" id="" />
                     </th>
                     <td className="px-4 py-3">{ id }</td>
                     <td className="px-4 py-3">{ created }</td>
                     <td className="px-4 py-3">{ client }</td>
                     <td className="px-4 py-3">{ project }</td>
                     <td className="px-4 py-3">{ country }</td>
                     <td className="px-4 py-3">{ amount }</td>
                     <td className="px-4 py-3">{ status }</td>
                     <td className="px-4 py-3">000</td>
              </tr>
       )
}

const Tables = () => {
       return (
              <React.Fragment>
                     <table className="text-blue-800 m-5 w-full mx-auto">
                            <tr className="text-left border-b-2 border-indigo-300">
                                   <th><input type="checkbox" className="form-checkbox h-5 w-5 text-dark" name="" id="" defaultChecked /></th>
                                   <th className="px-4 py-3">ID</th>
                                   <th className="px-4 py-3">Dibuat</th>
                                   <th className="px-4 py-3">Klien</th>
                                   <th className="px-4 py-3">Project</th>
                                   <th className="px-4 py-3">Negara</th>
                                   <th className="px-4 py-3">Total</th>
                                   <th className="px-4 py-3">Status</th>
                                   <th className="px-4 py-3">Dibayar</th>
                            </tr>
                            <DataInvoices id={335} created='27/12/2021' client='Ferdian Ahmad' project='Kubernetes' country='Singapore' amount={888} status='Dibayar' />
                            <DataInvoices id={379} created='15/11/2021' client='John Smith' project='UI/UX Design' country='America' amount={742} status='Belum Dibayar' />
                            <DataInvoices id={278} created='24/10/2021' client='John Doe' project='Copywriting' country='Malaysia' amount={456} status='Dibayar' />
                            <DataInvoices id={335} created='27/12/2021' client='Ferdian Ahmad' project='Kubernetes' country='Singapore' amount={888} status='Dibayar' />
                            <DataInvoices id={379} created='15/11/2021' client='John Smith' project='UI/UX Design' country='America' amount={742} status='Belum Dibayar' />
                            <DataInvoices id={278} created='24/10/2021' client='John Doe' project='Copywriting' country='Malaysia' amount={456} status='Dibayar' />
                            <DataInvoices id={335} created='27/12/2021' client='Ferdian Ahmad' project='Kubernetes' country='Singapore' amount={888} status='Dibayar' />
                            <DataInvoices id={379} created='15/11/2021' client='John Smith' project='UI/UX Design' country='America' amount={742} status='Belum Dibayar' />
                            <DataInvoices id={278} created='24/10/2021' client='John Doe' project='Copywriting' country='Malaysia' amount={456} status='Dibayar' />
                     </table>
              </React.Fragment>
       )
}

export default Tables
