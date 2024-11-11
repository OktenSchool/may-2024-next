import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'UsersLayout metadata'
}
type Props = { children: React.ReactNode }
const UsersLayout = ({children}: Props) => {
    return (
        <>
            <div>users layout</div>
            {children}
        </>
    );
};

export default UsersLayout;
