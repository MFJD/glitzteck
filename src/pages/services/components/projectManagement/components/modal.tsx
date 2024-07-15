'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'

export default function ProjectManagementModal() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button className="mt-4 md:mb-0 mb-5 px-8 py-3 primarybg text-white" onClick={() => setOpen(!open)}>View Technologies used</button>
            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center  text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white   pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-xl   data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div className='text-center w-full py-1 border-b'>
                                <h3 className='text-xl'>Technology Used</h3>
                            </div>

                            <div className='absolute m-5 right-0 top-0'>
                                <i className='ri-close-circle-fill cursor-pointer text-red-400 text-3xl' onClick={() => setOpen(!open)}></i>
                            </div>
                            <div className='mx-5'>
                                <div className='flex flex-col'>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li className='text-xl mt-3 primaryText'>Web services Integration</li>
                                        <li className='text-xl mt-3 primaryText'>Web application development</li>
                                        <li className='text-xl mt-3 primaryText'>Mobile application development uisng different Programing languages</li>
                                        <li className='text-xl mt-3 primaryText'>Web services Integration</li>
                                        <li className='text-xl mt-3 primaryText'>Web application development</li>
                                        <li className='text-xl mt-3 primaryText'>Web services Integration</li>
                                        <li className='text-xl mt-3 primaryText'>Web application development</li>
                                        <li className='text-xl mt-3 primaryText'>Mobile application development uisng different Programing languages</li>
                                    </ul>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
