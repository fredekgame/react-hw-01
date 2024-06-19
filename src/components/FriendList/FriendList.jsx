import './FriendList.css'
import { FriendListItem } from '../FriendListItem/FriendListItem'

export const FriendList = ({friends}) => {
    return(
        <ul className='mainUl'>
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