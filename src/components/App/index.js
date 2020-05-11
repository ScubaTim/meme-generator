import React, { Component } from 'react';

class App extends Component {
    state = { memeArr: [] }

    componentDidMount() {
        const getMemes = async () => {
            const response = await fetch('https://api.imgflip.com/get_memes')
            const meme = await response.json();
            this.setState({ memeArr: meme.data.memes })
            console.log(this.state.memeArr[0])
        }
        getMemes()
            .catch(error => {
                console.log("Error", error)
            });
    }

    getMeme() {
        const memeUrls = this.state.memeArr.map(meme => meme.url)
        const memeLink = <img src={memeUrls[0]} alt="A meme" width="800px" height="auto"></img>
        return memeLink;
    }


    render() {
        return (
            <div className="container">
                {this.getMeme()}
                <h1 className="mt-4">OH LOOK A MEME</h1>
            </div>
        )
    }
}

export default App;