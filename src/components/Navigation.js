import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBook } from '@fortawesome/free-solid-svg-icons'

function Navigation() {
    return (
        <>
            <div>
                <FontAwesomeIcon icon={faBook} />
                <div>Booki</div> 
            </div>
            <div>
                <div>Login/Sign Up</div>
                <div>Search</div>
            </div>
        </>
    )
}

export default Navigation