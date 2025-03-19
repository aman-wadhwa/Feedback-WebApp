import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
function Header({text='FeedBack UI', bgColor='rgba(6, 6, 6, 0.4)', color='#ff6a95'}){
    const headerStyles = {
       backgroundColor : bgColor,
       color: color,
    }

    return (
        <header style = {headerStyles}>
            <div className="container">
                <h2><Link className="headerLink" to="/">{text}</Link></h2>
            </div>
        </header>
    )
}

// Header.defaultProps = {
//     text: 'Feedback UI',
//     bgColor : 'red',
//     color: 'white',
// }


// Header.propTypes = {
//     text: PropTypes.string,
// }


export default Header

