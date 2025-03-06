import React from 'react';
import {LucideIcon} from '@tryghost/shade';

interface DeletedFeedItemProps {
    last?: boolean;
}

const DeletedFeedItem: React.FC<DeletedFeedItemProps> = ({last}) => {
    return (
        <div className='relative py-5'>
            <div className='flex h-10 grow items-center gap-2 rounded-lg border border-gray-200 p-2 px-[10px] text-center text-sm text-gray-600'>
                <LucideIcon.Trash size={16} strokeWidth={1.25} />
                This post has been deleted
            </div>
            {!last && <div className="absolute bottom-0 left-[18px] top-[62px] z-0 mb-[-13px] w-[2px] rounded-sm bg-gray-200"></div>}
        </div>
    );
};

export default DeletedFeedItem;
