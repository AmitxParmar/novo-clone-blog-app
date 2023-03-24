import React, { useState } from 'react'
import { api } from '~/utils/api'

const createCategory:React.FC = () => {
    
    const [title, setTitle] = useState<string>("");
    const [emoji, setEmoji] = useState<string>("");

    const handleSubmit = () => { 
        // make
    }

    return (
        <form>
            <input className="h-screen w-full bg-black" type="text" placeholder='enter emoji' onChange={(e) => setEmoji(e.target.value)} value={emoji} />

            <input type="text" placeholder='enter community title' onChange={(e) => setTitle(e.target.value)} value={title} />
            <button type="submit" className=''>Post</button>
        </form>
    )
}

export default createCategory;