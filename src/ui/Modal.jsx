import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useProvider } from "../components/PostProvider";
import ChartProduct from "../components/ChartProduct";

export default function Modal() {
    const { chartModal, dispatch } = useProvider()

    return (
        <Transition appear show={chartModal} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => dispatch({ type: 'CHARTMODAL', modal: false })}>
                <div className="fixed inset-0 bg-black opacity-80" />
                <div className="fixed inset-0 flex items-center justify-center">
                    <Dialog.Panel className="bg-transparent p-6 rounded-lg shadow-lg w-96">
                        <Dialog.Title className="text-lg font-bold">Product tracking prices</Dialog.Title>
                        <Dialog.Description className="mt-2 text-gray-600">
                            <ChartProduct />
                        </Dialog.Description>
                        <button
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                            onClose={() => dispatch({ type: 'CHARTMODAL', modal: false })}
                        >
                            Close
                        </button>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </Transition>
    );
}
