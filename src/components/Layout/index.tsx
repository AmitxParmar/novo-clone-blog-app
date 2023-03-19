import React, { type ReactNode, type FC } from 'react'
import Sidebar from 'src/components/shared/Sidebar'
import Header from 'src/components/shared/Header'

type ILayout = {
    children: ReactNode;
};

const Layout: FC<ILayout> = ({ children }) => {
    return (
        <React.Fragment>
            <div>
                <Header />
                <Sidebar />
                <div className='pl-16 h-screen bg-light'>
                    <div className='lg:px-[72px] md:px-8'>
                        {children ?? null}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Layout;