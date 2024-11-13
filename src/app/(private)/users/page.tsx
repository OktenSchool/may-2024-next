import React from 'react';
import UsersComponent from "@/app/components/users/UsersComponent";

const UsersPage = async () => {

    const users = await fetch('https://jsonplaceholder.typicode.com/users', {
        // cache: 'no-cache',// SSR
        // cache: 'force-cache', // SSR
        next: {revalidate: 60}
    })
        .then(value => value.json());

// 00 00 00
    // 00 00 55 - cache
    // 00 01 01 - revalidate
    // 00 XX XX - revalidate
    return (
        <div>
            <UsersComponent users={users}/>
        </div>
    );
};

export default UsersPage;
