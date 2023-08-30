import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBook } from '@fortawesome/free-solid-svg-icons'
  import classes from './Navigation.module.css'

function Navigation() {
    return (
        <div className={classes.header}>
            <div className={classes.logo}>
                <FontAwesomeIcon icon={faBook} />
                <div>Booki</div> 
            </div>
            <div className={classes.nav}>
                <div>Log In</div>
                <div>Sign Up</div>
                <div>Search</div>
            </div>
        </div>
    )
}

export default Navigation