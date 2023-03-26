import React, { type FC } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Tabs: FC = () => {

    return (
        <div className='mb-4 '>
            <div className=''>
                <div className='block'>
                    <nav className='content-[""]  top-full left-0 w-full h-1 bg-[#e0e0e0] rounded'>
                        <Tab.Group>
                            <Tab.List>
                                <Tab>
                                    All Communities
                                </Tab>
                                <Tab className={`font-bold`}>
                                    Your Communities
                                </Tab>
                            </Tab.List>
                            <Tab.Panels>

                            </Tab.Panels>
                        </Tab.Group>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Tabs;