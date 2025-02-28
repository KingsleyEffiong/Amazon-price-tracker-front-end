import React from 'react'
import Navbar from './Navbar'

function UI() {
    return (
        <div className='w-full h-screen px-3 flex flex-col py-4'>
            <Navbar />
            <div className="flex items-center justify-center flex-col h-full">
                <div className="grid grid-cols-3 gap-4 h-full w-full">
                    <div className="bg-[#21222D] p-5 text-white col-span-2">
                        <h1>HOW TO USE THE EXTENSION</h1>
                    </div>
                    <div className="bg-[#21222D] p-5 text-white">CHART OF TRACKED PRODUCT</div>
                    <div className="bg-[#21222D] p-5 text-white">LIST OF TRACKED PRODUCTS</div>
                    <div className="bg-[#21222D] p-5 text-white col-span-2"></div>
                </div>
            </div>
        </div>
    )
}

export default UI