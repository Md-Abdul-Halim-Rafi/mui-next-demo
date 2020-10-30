import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// Icon
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles({
  menu: {
    marginTop: "20px",
    borderRadius: "7px",
    width: "350px",
  },
  menuItem: {
    padding: "10px",
  },
});

const BadgeNotification = () => {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(null);
  const showBadge = useState(false);
  const notifications = useState(["hello world"]);

  const handleClose = () => {
    setOpenMenu(null);
  };

  const handleClick = (event) => {
    setOpenMenu(event.currentTarget);
  };

  return (
    <div>
      <IconButton
        aria-label="notifications"
        color="inherit"
        onClick={handleClick}
      >
        <Badge variant="dot" invisible={showBadge} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <Menu
        className={classes.menu}
        id="simple-menu"
        anchorEl={openMenu}
        keepMounted
        open={Boolean(openMenu)}
        onClose={handleClose}
      >
        {notifications.length === 0 ? (
          <div style={{ margin: "10px", textAlign: "center" }}>
            কোনও নোটিফিকেশন নেই{" "}
            <span role="img" aria-label="emoji">
              😴
            </span>
          </div>
        ) : (
          <div>
            {notifications.map((noti, index) => {
              return (
                <div key={index}>
                  <MenuItem
                  className={classes.menuItem}
                  >
                    <div
                      style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                    >
                      {noti}
                    </div>
                  </MenuItem>
                </div>
              );
            })}
          </div>
        )}
      </Menu>
    </div>
  );
};

export default BadgeNotification;
