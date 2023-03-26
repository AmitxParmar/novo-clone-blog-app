import React, { type PropsWithChildren, useState } from 'react'
import { api } from '~/utils/api'
import { useSession } from 'next-auth/react';
import ReactElement from 'react';

const CreateCategory: React.FC<PropsWithChildren> = () => {
    const { data: sessionData } = useSession();
    const [title, setCategory] = useState<string>("");
    const [emoji, setEmoji] = useState<string>("");

    /* Get All categories */
    const { data: categories, refetch: refetchCategories } = api.category.getAll.useQuery(undefined, {
        enabled: sessionData?.user != undefined,
    });

    /* create Category function */
    const createCategory = api.category.create.useMutation({
        onSuccess: () => {
            void refetchCategories()
        }
    });


    const handleSubmit = () => {
        // make
        console.log({ emoji, title });
        createCategory.mutate({
            emoji,
            title,
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='p-7 m-7 grid grid-row-2 '>
                <input className="h-12 w-full text-white tracking-widest bg-black" type="text" placeholder='Enter Emojis' onChange={(e) => setEmoji(e.target.value)} value={emoji} />
                <input className="h-12 w-full" type="text" placeholder='enter community title' onChange={(e) => setCategory(e.target.value)} value={title} />
                <button type="submit" className='bg-light text-black tracking-widest'>
                    Post
                </button>
            </form>

            <div className='bg-black text-white font-bold leading-6 tracking-wider'>
                {categories?.map(({ id, title, emoji }) => (
                    <div key={id} className='items-center grid grid-col-2 justify-center align-middle h-56 w-full bg-black'>
                        <div className='inline-flex'>{emoji}</div>
                        <div className='inline-flex'>{title}</div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CreateCategory;