import React from "react"
import MainMenuNavigationTopDesktop from "../src/components/MainMenuNavigationTopDesktop"
import HomePage from "../src/components/HomePage"
import Footer from "../src/components/Footer"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
})

const HomePageLayout = () => {
  const classes = useStyles()
  
  return (
    <div>
      <div className={classes.root}>
        <MainMenuNavigationTopDesktop />
        <HomePage />
        <Footer />
      </div>
    </div>
  )
}

export default HomePageLayout
