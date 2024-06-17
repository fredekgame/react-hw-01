import './Profile.css'

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
<div className="mainDiv">
 <div className="profileDiv">
   <img className='profileImg' src={image} alt="User avatar"/>
   <p className='profileName'>{name}</p>
   <p className='profileTag'>@{tag}</p>
   <p className='profileLocation'>{location}</p>
 </div>
 
 <ul className='mainUi'>
   <li className='border'>
     <span className='spanName'>Followers</span>
     <span className='spanInfo'>{stats.followers}</span>
   </li>
   <li className='border'>
     <span className='spanName'>Views</span>
     <span className='spanInfo'>{stats.views}</span>
   </li>
   <li>
     <span className='spanName'>Likes</span>
     <span className='spanInfo'>{stats.likes}</span>
   </li>
 </ul>
</div>
  ) 
}