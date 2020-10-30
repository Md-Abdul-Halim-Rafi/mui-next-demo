import React, { useState, useEffect, useContext } from "react"

// Components
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import ProfileIcon from "./ProfileIcon"
import GoogleButton from "./GoogleButton"

import { AppContext } from "../states/ContextProvider"
import { userSignIn, isLoggedIn } from "../states/actions/userActions"

const useStyles = makeStyles(theme => ({
  button: {
    color: theme.palette.type === `light` ? `#000` : `#000`,
    backgroundColor: theme.palette.common.white,
    borderRadius: `5px`,
    boxShadow: `0px 8px 18px ${theme.palette.primary.main}50`,
    transition: `all 0.3s ease 0s`,
    cursor: `pointer`,
    outline: `none`,
    fontSize: `small`,
    border: `1px solid #e2edfd`,
    "&:hover": {
      backgroundColor: `#f4f4f4`,
      border: `1px solid #000`,
      color: theme.palette.type === `light` ? `#000` : `#000`,
      transform: `translateY(4px)`,
    },
  },
  signInButton: { padding: "0px", fontSize: "large" },
}))

const ProfileButton = () => {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false)
  const classes = useStyles()
  const { uiDispatch, userDispatch } = useContext(AppContext)

  useEffect(() => {
    setShow(true)
  }, [])

  const handleSignIn = () => {
    userSignIn(document.location.pathname, uiDispatch, userDispatch)
  }

  return (
    <div>
      {isLoggedIn() ? (
        <ProfileIcon />
      ) : (
        <div>
          {show && (
            <Button
            className={classes.signInButton}
            color="primary"
            onClick={handleSignIn}
            size="small"
          >
            login
          </Button>
          )}
        </div>
      )}
    </div>
  )
}

export default ProfileButton
