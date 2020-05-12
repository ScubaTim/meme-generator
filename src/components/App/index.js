import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';

class App extends Component {
    state = {
        memeArr: [],
        memeUrl: '',
        memeTitle: ''
    }

    componentDidMount() {
        const getMemes = async () => {
            const response = await fetch('https://api.imgflip.com/get_memes')
            const meme = await response.json();
            this.setState({
                memeArr: meme.data.memes,
            })
        }
        getMemes()
            .catch(error => {
                console.log("Error", error)
            });
    }

    //Fix eet
    handleClick = () => {
        const memeUrl = this.state.memeArr.map(meme => meme.url)
        const memeName = this.state.memeArr.map(meme => meme.name)
        const rand = Math.floor(this.state.memeArr.length * Math.random())
        this.setState({ memeUrl: memeUrl[rand], memeTitle: memeName[rand] })
    }


    render() {
        return (
            <div>
                <div className="container border">
                    <Row>
                        <Col>
                            <img src={this.state.memeUrl} alt="random meme"></img>
                            <h1>{this.state.memeTitle}</h1>
                        </Col>
                    </Row>
                </div>
                <Row className="container">
                    <Col>
                        <Button
                            outline
                            style={{ color: 'white' }}
                            size="lg"
                            onClick={this.handleClick}
                        >Random Meme Me!
                        </Button>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default App;