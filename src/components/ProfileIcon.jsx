import React, { useState, useEffect, useContext } from "react"
import Link from "@material-ui/core/Link"
import Avatar from "@material-ui/core/Avatar"
import CircularProgress from "@material-ui/core/CircularProgress"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"

// Utils
import {
  isLoggedIn,
  getUser,
  userSignOut,
} from "../states/actions/userActions"
import { AppContext } from "../states/ContextProvider"

const LoginButton = () => {
  const [logged, setLogged] = useState(isLoggedIn())
  const [loading, setLoading] = useState(false)
  const { uiDispatch, userDispatch } = useContext(AppContext)

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      {logged && (
        <div>
          {!loading ? (
            <div>
              <Avatar
                style={{ cursor: "pointer" }}
                src={getUser().photoURL}
                alt={getUser().userName}
                width="30px"
                referrerPolicy="no-referrer"
                onClick={handleClick}
              />

              <Menu
                style={{ marginTop: "40px" }}
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem>
                  <Link
                    href={`/${getUser().userProfile}`}
                    underline="none"
                    color="inherit"
                  >
                    ড্যাশবোর্ড
                  </Link>
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    setLoading(true)
                    setTimeout(() => {
                      userSignOut()
                      setLogged(false)
                      setLoading(false)
                    }, 1000)
                  }}
                >
                  লগ আউট
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <CircularProgress size="30px" />
          )}
        </div>
      )}
    </div>
  )
}

export default LoginButton
