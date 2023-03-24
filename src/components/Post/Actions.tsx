import React from 'react'

const Actions = () => {
    return (
        <div className="mt-4 items-center text-dark text-sm flex justify-between break-words">
            {/* REactions container */}
            <div className="mr-6 flex relative">
                <div className="relative flex flex-end flex-row flex-wrap">
                    <button aria-label="add reaction" className="inline-flex items-center justify-center text-center relative z-[10] min-w-[54px] h-6 mt-0 mx-1 mb-2 p-2 bg-light rounded-2xl text-secondary overflow-visible leading-normal">
                        <span className="text-center text-sm text-secondary break-words">💚</span>
                        <span className="font-semibold uppercase tracking-wider leading-5 text-xs mt-0 ml-2 text-center">1</span>
                    </button>
                </div>
                <div className="relative flex flex-end flex-row flex-wrap">
                    <button aria-label="add reaction" className="inline-flex items-center justify-center text-center relative z-[10] min-w-[54px] h-6 mt-0 mx-1 mb-2 p-2 bg-light rounded-2xl text-secondary overflow-visible leading-normal">
                        <span className="text-center text-sm text-secondary break-words">💚</span>
                        <span className="font-semibold uppercase tracking-wider leading-5 text-xs mt-0 ml-2 text-center">1</span>
                    </button>
                </div>
                <div className="relative flex flex-end flex-row flex-wrap">
                    <button aria-label="add reaction" className="inline-flex items-center justify-center text-center relative z-[10] min-w-[54px] h-6 mt-0 mx-1 mb-2 p-2 bg-light rounded-2xl text-secondary overflow-visible leading-normal">
                        <span className="text-center text-sm text-secondary break-words">💚</span>
                        <span className="font-semibold uppercase tracking-wider leading-5 text-xs mt-0 ml-2 text-center">1</span>
                    </button>
                </div>
            </div>
            <div className="items-center flex">
                <span className="a-icon mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#616161" d="M13.305 22.5L12 21.75l3-5.25h4.5A1.5 1.5 0 0021 15V6a1.5 1.5 0 00-1.5-1.5h-15A1.5 1.5 0 003 6v9a1.5 1.5 0 001.5 1.5h6.75V18H4.5a3 3 0 01-3-3V6a3 3 0 013-3h15a3 3 0 013 3v9a3 3 0 01-3 3h-3.63l-2.565 4.5z"></path></svg>
                </span>
                <span className="a-typography l1 color-gray-70">0</span>
            </div>
        </div>
    )
}

export default Actions;