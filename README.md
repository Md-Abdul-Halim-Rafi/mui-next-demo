## Project structure

  |- pages
  
  |- public
  
  |- src
  
    |- assets
    
    |- components
    
      |- BadgeNotification.jsx   <--- Problem is in this component
      
    |- firebase
    
    |- states
    
  |- styles
  
    |- theme.js

### Problematic component

In `BadgeNotification.jsx` If I use `makeStyles` with any styles the problem arises, otherwise it is okay.

```
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
```
