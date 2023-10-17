import React, { useState } from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

function Card({ course }) {
    const [liked, setLiked] = useState(false);

    const likeHandle = () => {
        // Toggle the liked state
        setLiked(prevLiked => !prevLiked);

        // Display a toast message based on the like action
        if (!liked){
            toast.success("Liked Successfully");
        }
        else{
            toast.warning("Liked Removed");
        }
    };

    return (
        <div className='bg-slate-800 bg-opacity-80 w-[300px] rounded-md overflow-hidden'>
            <div className='relative '>
                <img src={course.image.url} alt="" />
                <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
                    <button onClick={likeHandle}>
                        {liked ? <FcLike fontSize="1.75rem" /> : <FcLikePlaceholder fontSize="1.75rem" />}
                    </button>
                </div>
            </div>
            <div className='p-4'>
                <p className='text-white text-lg font-semibold leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>{course.description}</p>
            </div>
        </div>
    );
}

export default Card;
