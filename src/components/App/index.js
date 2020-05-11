import React, { Component } from 'react';

class App extends Component {
    state = { memeArr: '' }

    componentDidMount() {
        const getMemes = async () => {
            const response = await fetch('https://api.imgflip.com/get_memes')
            const meme = await response.json();
            this.setState({ memeArr: meme.data.memes })
        }
        getMemes()
            .then(response => {
                console.log('FUCK YES IT WORKED')
            })
            .catch(error => {
                console.log("Error", error)
            });
    }




    render() {
        return (
            <div>Yeeeeeessssssssssss</div>
        )
    }
}

export default App;