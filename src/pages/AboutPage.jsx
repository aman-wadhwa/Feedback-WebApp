import Card from "../components/shared/Card"
import { Link } from "react-router-dom"
function AboutPage(){
    return (
        <Card>
            <div className="about">
                <h1>Created from React</h1>
                <p>This application lets you add reviews for product and services</p>
                <p>Version 1.0.0.</p>
                <Link to="/">Back to Homepage</Link>
            </div>
            
        </Card>
    )
}

export default AboutPage