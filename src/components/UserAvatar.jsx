import React from 'react';
import {Avatar, Tooltip} from "@mui/material";
import {useSelector} from "react-redux";
import ProfileMenu from "./ProfileMenu";

const UserAvatar = () => {
  const profile = useSelector((state) => state.profile)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Tooltip title="Аккаунт">
        <Avatar
          sx={{
            height: {md: "50px", sm: "40px", xs: "30px"},
            width: {md: "50px", sm: "40px", xs: "30px"},
            cursor: "pointer",
            "&:hover": {
              boxShadow: "0 0 10px black"
            }
          }}

          src={profile.imageURL ? profile.imageURL : ""}
          onClick={handleClick}

        >
        </Avatar>
      </Tooltip>
      <ProfileMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl}/>
    </>
  );
};

export default UserAvatar;
