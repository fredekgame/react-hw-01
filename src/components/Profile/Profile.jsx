import css from './Profile.module.css'

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
<div className={css.mainDiv}>
 <div className={css.profileDiv}>
   <img className={css.profileImg} src={image} alt="User avatar"/>
   <p className={css.profileName}>{name}</p>
   <p className={css.profileTag}>@{tag}</p>
   <p className={css.profileLocation}>{location}</p>
 </div>
 
 <ul className={css.mainUi}>
   <li className={css.border}>
     <span className={css.spanName}>Followers</span>
     <span className={css.spanInfo}>{stats.followers}</span>
   </li>
   <li className={css.border}>
     <span className={css.spanName}>Views</span>
     <span className={css.spanInfo}>{stats.views}</span>
   </li>
   <li>
     <span className={css.spanName}>Likes</span>
     <span className={css.spanInfo}>{stats.likes}</span>
   </li>
 </ul>
</div>
  ) 
}