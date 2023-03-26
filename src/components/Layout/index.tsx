import React, { type FC, type PropsWithChildren } from 'react'
import Sidebar from 'src/components/shared/Sidebar'
import Header from '~/components/shared/Header/Header'

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <React.Fragment>
            <div className='m-0 p-0'>
                <Header />
                <Sidebar />
                <div className='xl:pl-16 sm:p-0 md:p-0 bg-light'>
                    <div className='lg:px-8 md:px-8 '>
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