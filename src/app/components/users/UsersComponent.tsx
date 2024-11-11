import React, {FC} from 'react';
import Link from "next/link";

type Props = {
    users: { id: number, name: string } []
}
const UsersComponent: FC<Props> = ({users}) => {
    return (
        <div>
            {
                users.map(({id, name}) => (<div key={id}>
                    <Link href={'/users/' + id}>{name}</Link>

                </div>))
            }
        </div>
    );
};

export default UsersComponent;
