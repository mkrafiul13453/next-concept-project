"use client";
import { Avatar, Card } from '@heroui/react';
import { authClient } from '../lib/auth-client';
import { UpdateUserModal } from '@/components/UpdateUserModal';

const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    console.log(user);
    return (
        <div>
            <Card className='max-w-80 mx-auto items-center'>
                <Avatar size="sm">
                    <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
                    <Avatar.Fallback>JD</Avatar.Fallback>
                </Avatar>
                <p className='text-2xl font-bold'>{user?.name}</p>
                <p className='text-2xl font-bold'>{user?.email}</p>
                <UpdateUserModal></UpdateUserModal>
            </Card>
        </div>
    );
};

export default ProfilePage;