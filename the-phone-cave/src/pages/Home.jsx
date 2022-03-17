import phones from "../data/phones.json"
import { Card } from "react-bootstrap"

const Home = () => {
    return (
        <>
            <h1>My Phones</h1>
            <hr />
            {phones.map(elm => {
                <Card>
                    <Card.Img variant="top" src={elm.imageFileName} />
                    <Card.Body>
                        <Card.Title>{elm.name}</Card.Title>
                    </Card.Body>
                </Card>
            })}
        </>
    )
}

export default Home
