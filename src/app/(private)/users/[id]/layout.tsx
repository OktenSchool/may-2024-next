import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'UserLayout metadata'
}
type Props = { children: React.ReactNode }
const UserLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default UserLayout;
