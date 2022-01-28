import React from 'react'

// import button action secondary
import { ButtonActionSecondary, ButtonActionDanger } from '../partials/ButtonAction'

const DeleteOption: React.FunctionComponent = () => {
       return (
              <React.Fragment>
                     <div className="darkbox absolute z-20 bg-black bg-opacity-50 top-0 left-0 w-screen h-screen">
                            <div className="w-[360px] bg-white rounded-lg h-auto p-6 absolute z-30 top-[24%] left-[40%]">
                                   <h1 className='text-2xl font-bold'>Hapus</h1>
                                   <p className='text-sm text-gray-600 my-8'>Apakah anda yakin ingin menghapus tagihan ini ?</p>
                                   {/* Button Action */}
                                   <div className="flex justify-between gap-x-4">
                                          <ButtonActionSecondary children="Batalkan" onClickEvent={() => console.log("Successfully Cancelled")
                                          } />
                                          <ButtonActionDanger children="Hapus" onClickEvent={() => console.log("Successfully Deleted")
                                          } />
                                   </div>
                            </div>
                     </div>
              </React.Fragment>
       )
}

export default DeleteOption
