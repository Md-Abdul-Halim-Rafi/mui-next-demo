import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Link from "./Link"
import Grid from "@material-ui/core/Grid"
import ListItemText from "@material-ui/core/ListItemText"
import List from "@material-ui/core/List"


//Icons
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import YouTubeIcon from "@material-ui/icons/YouTube"
import TwitterIcon from "@material-ui/icons/Twitter"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    zIndex: 3,
  },
  footer: {
    padding: "80px 30px 100px 30px",
    marginTop: "220px",
    backgroundColor: "#000",
    [theme.breakpoints.down("xs")]: {
      padding: "20px 10px"
    }
  },
  title: {
    fontWeight: "bold",
    color: "#fff"
  },
  textStyle: {
    color: "#fff",
    padding: "8px"
  },
  iconStyle: {
    marginRight: '20px',
    color: "#fff",
  }
}))

export default function Footer() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="md">
          <Grid container justify="center" spacing={1}>
            <Grid item md={4} sm={4} xs={12}>
              <Typography className={classes.title}>
                গুরুত্বপূর্ণ লিংকসমূহ
              </Typography>
              <List>
                <ListItemText
                  className={classes.textStyle}
                  primary={
                    <Link
                      href="/ebooks"
                      rel="dofollow"
                      variant="body2"
                      color="inherit"
                    >
                      {"প্রোগ্রামিং ইবুক"}
                    </Link>
                  }
                />

                <ListItemText
                  className={classes.textStyle}
                  primary={
                    <Link
                      href="/blogs"
                      rel="dofollow"
                      variant="body2"
                      color="inherit"
                    >
                      {"ব্লগ টিউটোরিয়াল "}
                    </Link>
                  }
                />
                <ListItemText
                  className={classes.textStyle}
                  primary={
                    <Link
                      href="https://www.facebook.com/groups/mainlycoding"
                      variant="body2"
                      color="inherit"
                      target="_blank"
                      rel="nofollow"
                    >
                      {"ফেসবুক গ্রুপ "}
                    </Link>
                  }
                />
                <ListItemText
                  className={classes.textStyle}
                  primary={
                    <Link href="/about-us" variant="body2" color="inherit">
                      {"আমাদের সম্পর্কে "}
                    </Link>
                  }
                />
                <ListItemText
                  className={classes.textStyle}
                  primary={
                    <Link href="/contact" variant="body2" color="inherit">
                      {"যোগাযোগ করুন "}
                    </Link>
                  }
                />
              </List>
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
              <Typography className={classes.title}>যোগাযোগ করুন</Typography>
              <List>
                <ListItemText
                  className={classes.textStyle}
                  primary={
                    <Link
                      href="/publish-your-article"
                      variant="body2"
                      color="inherit"
                    >
                      {"লেখক হিসেবে জয়েন করুন"}
                    </Link>
                  }
                />

                <ListItemText
                  className={classes.textStyle}
                  primary={
                    <Link
                      href="mailto:hello@mainlycoding.com"
                      variant="body2"
                      color="inherit"
                      rel="nofollow"
                    >
                      Email: hello@mainlycoding.com
                    </Link>
                  }
                />
                <div style={{ display: "inline-flex", marginRight: "10px" }}>
                  <ListItemText
                    primary={
                      <a
                        href="https://facebook.com/mainlycoding"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className={classes.iconStyle}
                      >
                        <FacebookIcon aria-label="Facebook" />
                      </a>
                    }
                  />
                  <ListItemText
                    primary={
                      <a
                        href="https://www.linkedin.com/company/mainlycoding"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className={classes.iconStyle}
                      >
                        <LinkedInIcon aria-label="Linkedin" />
                      </a>
                    }
                  />
                  <ListItemText
                    primary={
                      <a
                        href="https://instagram.com/mainly_coding"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className={classes.iconStyle}
                      >
                        <InstagramIcon aria-label="Instagram" />
                      </a>
                    }
                  />
                  <ListItemText
                    primary={
                      <a
                        href="https://www.youtube.com/channel/UCdLXB3F6H8Y5zmhdA9e3bmg?sub_confirmation=1"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className={classes.iconStyle}
                      >
                        <YouTubeIcon aria-label="YouTube" />
                      </a>
                    }
                  />
                  <ListItemText
                    primary={
                      <a
                        href="https://twitter.com/mainlycoding"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className={classes.iconStyle}
                      >
                        <TwitterIcon aria-label="Twitter" />
                      </a>
                    }
                  />
                </div>
              </List>
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
              <Typography className={classes.title}>
                বাংলায় প্রোগ্রামিং শিখুন
              </Typography>
              <List>
                <ListItemText
                  className={classes.textStyle}
                  primary={
                    <Link
                      href="/terms-and-conditions"
                      variant="body2"
                      color="inherit"
                    >
                      {"Terms & Conditions"}
                    </Link>
                  }
                />

                <ListItemText
                  className={classes.textStyle}
                  primary={
                    <Link
                      href="/privacy-policy"
                      variant="body2"
                      color="inherit"
                    >
                      {"Privacy Policy"}
                    </Link>
                  }
                />

                {/* <ListItemText
                  className={classes.textStyle}
                  primary={
                    <Link
                      href="/sitemap.xml"
                      rel="dofollow"
                      variant="body2"
                      color="inherit"
                    >
                      {"Sitemap"}
                    </Link>
                  }
                /> */}
              </List>
            </Grid>
          </Grid>

          <Typography variant="body2" align="center" color="secondary">
            © সকল কন্টেন্ট বাংলাদেশ কপিরাইট আইন, 2000 অনুযায়ী সংরক্ষিত |
            বিনানুমতিতে এই সাইটের অন্তর্ভুক্ত কোন কন্টেন্ট নিয়ে অন্য কোথাও
            পাবলিশ করা আইনত দণ্ডনীয়।
          </Typography>
          <Typography
            className={classes.textStyle}
            variant="body2"
            align="center"
          >
            Copyright ©{" "}
            <Link
              href="https://mainly.technology"
              variant="body2"
              color="inherit"
              rel="noopener noreferer dofollow"
            >
              {"Mainly Technology USA"}
            </Link>
          </Typography>
        </Container>
      </footer>
    </div>
  )
}
