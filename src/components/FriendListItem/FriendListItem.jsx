import css from './FriendListItem.module.css'
import clsx from "clsx"

export const FriendListItem = ({avatar, name, isOnline}) => {
 return(
    <div>
        <img className={css.avatarImg} src={avatar} alt="Avatar" width="48" />
        <p className={css.statusIs} >{name}</p>
        <p className={clsx(css.status, {
            [css.online]: isOnline, 
            [css.offline]: !isOnline 
        })}>
            {isOnline ? 'Online' : 'Offline'}
    </p>
        </div>
 )
}