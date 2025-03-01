import React from 'react'
import Navbar from './Navbar'
import ChartProduct from './ChartProduct'
import ListOfProducts from './ListOfProducts'

function UI() {
    return (
        <div className='w-full h-screen px-3 flex flex-col py-4 overflow-auto'>
            <Navbar />
            <div className="flex items-center justify-center flex-col h-full">
                <div className="grid grid-cols-3 gap-4 h-full w-full">
                    <div className="bg-[#21222D] p-1 text-white col-span-2 h-[520px]">
                    </div>
                    <div className="bg-[#21222D] p-5 text-white h-[520px] overflow-auto">
                        {/* <ChartProduct /> */}
                        <ListOfProducts />
                    </div>
                    {/* <div className="bg-[#21222D] p-5 text-white">LIST OF TRACKED PRODUCTS</div>
                    <div className="bg-[#21222D] p-5 text-white col-span-2"></div> */}
                </div>
            </div>
        </div>
    )
}

export default UI