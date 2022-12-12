import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {

  const HomeRightBar = () => {
    return(
      <>
      <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdaytext">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  } 

  const ProfileRightbar = () => {
    return(
      <>
      <h4>User Information</h4>
      <div className="rightbarInfo">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoKey">New York</span>
      </div>
      <div className="rightbarInfo">
        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfoKey">Madrid</span>
      </div>
      <div className="rightbarInfo">
        <span className="rightbarInfoKey">Relationsip:</span>
        <span className="rightbarInfoKey">Single</span>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/1.jpeg" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/2.jpeg" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/3.jpeg" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">John Carter</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightBar/>}
      </div>
    </div>
  );
}
