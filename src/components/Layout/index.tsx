import React, { type ReactNode, type FC } from 'react'
import Sidebar from 'src/components/shared/Sidebar'
import Header from 'src/components/shared/Header'

type ILayout = {
    children: ReactNode;
};

const Layout: FC<ILayout> = ({ children }) => {
    return (
        <React.Fragment>
            <div className='m-0 p-0'>
                <Header />
                <Sidebar />
                <div className='pl-16 bg-light'>
                    <div className='lg:px-8 md:px-8'>
                        <div className='m-auto w-full lg:max-w-[1400px]'>
                            <div className='pt-8 lg:px-4 md:pt-8 flex flex-wrap px-[16px] '>
                                {children ?? null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Layout;