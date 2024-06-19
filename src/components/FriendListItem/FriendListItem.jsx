
export const FriendListItem = ({avatar, name, isOnline}) => {
 return(
    <div>
        <img className="avatarImg" src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
        <p className={`status ${isOnline ? 'online' : 'offline'}`}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>
 )
}