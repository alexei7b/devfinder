import React from 'react';
import styles from './UserTitle.module.scss';
import { LocalGithubUser } from 'types/users';

interface UserTitleProps extends Pick<LocalGithubUser,
    'name' | 'login' | 'created'
> { }

const localData = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
});

const UserTitle = ({ created, login, name }: UserTitleProps) => {
    const joinedData = localData.format(new Date(created))
    return (
        <div className={styles.userTitle}>
            <h2>{name}</h2>
            <h3>{login}</h3>
            <span>{joinedData}</span>

        </div>
    )
}

export default UserTitle