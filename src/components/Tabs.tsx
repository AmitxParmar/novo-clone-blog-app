import React, {type FC, useState } from 'react'
import { Tab } from '@headlessui/react'


const Tabs: FC = () => {
    const [active,setActive] = useState();


    return (
        <Tab.Group>
            <Tab className={`active:font-bold`}>
                All Communities
            </Tab>
            <Tab className={`font-bold`}>
                Your Communities
            </Tab>
            <Tab.Panels>
                
            </Tab.Panels>
        </Tab.Group>
    )
}

export default Tabs;