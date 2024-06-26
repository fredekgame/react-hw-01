import css from './FriendList.module.css'
import { FriendListItem } from '../FriendListItem/FriendListItem'

export const FriendList = ({friends}) => {
    return(
        <ul className={css.mainUl}>
        {friends.map(friend => (
          <li key={friend.id}>
            <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />
          </li>
            ))}
        </ul>
)
}