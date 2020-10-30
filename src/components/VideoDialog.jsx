import React, { useState } from "react"
import ModalVideo from "react-modal-video"
import Link from "@material-ui/core/Link"
import "react-modal-video/scss/modal-video.scss"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  heroImage: {
    width: "80%",
    objectFit: "cover",
    display: "block",
    marginLeft: "10%",
    cursor: "pointer",
    boxShadow: `0 0 20px rgba(0,0,0,.05)`,
    borderRadius: `7px`,
    marginBottom: "20px",
    marginTop: "20px",
    border: `1px solid #ccc`,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: "0",
    },
  },
}))

export default function CustomizedDialogs() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Link color="textPrimary" underline="none" onClick={handleClickOpen}>
        <img
          className={classes.heroImage}
          src="/MainlyVideo.svg"
          alt="Mainly Coding Youtube Video"
        />
      </Link>

      <ModalVideo
        channel="youtube"
        isOpen={open}
        videoId="YEYiAK9qmRo"
        onClose={handleClose}
        youtube={{
          autoplay: 1,
          mute: 0,
        }}
      />
    </div>
  )
}
