import "./EditProfile.css";
import Navbar from "../Navbar/Navbar";
import userBanner from "../../Assets/userBanner.png";
import person2 from "../../Assets/person2.png";
import { useEditProfile } from "../../hooks/useEditProfile";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

export default function EditProfile({user, handleOnLogout}) {
  const {
    isProcessing,
    form,
    errors,
    handleOnSubmit,
    handleOnInputChange,
  } = useEditProfile({user})
  return (
    <div className="user">
      <Navbar user={user} handleOnLogout={handleOnLogout}/>
      {errors.form && <span className="error">{errors.form}</span>}
        <br />
      <div className="userInfo">
        {/* Change this to image comp */}
        <div className="profilePic">
          <img className="bannerImg" src={person2} alt="user profile picture" />
        </div>

        <div className="nameInfo">
          <div className="name">
          <label htmlFor="name">Name </label>
              <input
                type="text"
                name="name"
                placeholder="Jane Doe"
                value={form.name}
                onChange={handleOnInputChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            <div className="username">
              <p>John_S23</p>
            </div>
          </div>
        </div>

        <div className="socialMediaEdit">
          <div className="media">
            <div className="Instagram">
              <InstagramIcon />
            </div>
            <div className="Facebook">
              <FacebookIcon />
            </div>
            <div className="Twitter">
              <TwitterIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="uploadButn">
        <button>Upload</button>
      </div>

      <div className="description">
        <h3>Bibliography</h3>
      </div>

      <div className="textSpace">
        <textarea id="w3review" name="w3review" rows="4" cols="120"></textarea>
      </div>
      <div className="submitButn">
        <input type="submit" value="Submit" />
      </div>
      <div className="banner">
        <p>Banner Image: </p>
        <img
          className="bannerImg"
          src={userBanner}
          alt="people standing on a mountain"
        />
      </div>

      <div className="uploadButn2">
        <button>Upload</button>
      </div>

      <div className="SaveCancel">
        <div className="cancelButn">
          <button>Cancel</button>
        </div>
        <div className="saveButn">
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}
