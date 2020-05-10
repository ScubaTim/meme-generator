import React from 'react';
import ImageContainer from '../ImageContainer';
import { Container, Row, Col, Button } from 'reactstrap';
import { getMeme } from '../../api';

class App extends React.Component {
    state = {
        currentUrl: ''
    }

    onClickHandler = () => {
        //Call getMeme function in api to get a meme's url
        console.log(getMeme()); // <--- is wrong and doen't give url for some reason :(
        const url = getMeme()
        //Tell the ImageContainer to display a new meme.
        this.setState({ currentUrl: url })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col className="m-4">
                        <ImageContainer
                            meme={this.state.currentUrl}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="m-4">
                        <Button
                            color="primary"
                            onClick={this.onClickHandler}
                        >Generate Meme
                    </Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App;