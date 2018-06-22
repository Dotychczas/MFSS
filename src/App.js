import React, {Component} from 'react';
import AnimateCss from 'animate.css'
// import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.checkKey();
        this.state = {
            falconPosition: 0,
            laserPosition: 0,
            display: 'none'
        };

    }

    checkKey = () => {
        document.addEventListener('keydown', (e) => {

            if (e.key === 'ArrowLeft' || 'ArrowRight') {
                this.move(e)

            }
            if (e.key === ' ' || e.key === 'ArrowUp') {

                this.fire(e)
            }
        })

    };


    move = (e) => {
        if (e.key === 'ArrowLeft' && this.state.falconPosition > -1400) {
            console.log("left");
            this.setState({
                falconPosition: this.state.falconPosition - 100
            })

        }
        if (e.key === 'ArrowRight' && this.state.falconPosition < 1400) {
            console.log('right');
            this.setState({
                falconPosition: this.state.falconPosition + 100
            })
        }
    }

    fire = (e) => {

        let intervalId = setInterval(() => {
            this.setState({
                laserPosition: this.state.laserPosition - 10

            })
        }, 25);

        this.setState({
            display: 'block',
            laserPositionX: this.state.falconPosition * 0.5
        });


    }



    render() {
        return (
            <div className="App" onKeyDown={this.checkKey}>


                <div className="title-wrapper">
                    <div className="title animated fadeInDownBig">Star Invaders</div>
                </div>
                <div className="score-wrapper">
                    <div className="score animated fadeInLeftBig">Score:</div>
                    <div className="lifes animated fadeInRightBig">
                        <div className="life1"></div>
                        <div className="life2"></div>
                        <div className="life3"></div>
                    </div>
                </div>
                <hr/>
                <hr/>
                <div className="board">

                    <div className="falcon animated fadeIn" style={{marginLeft: this.state.falconPosition}}></div>
                    <div className="laser" style={{
                        marginLeft: this.state.laserPositionX,
                        marginTop: this.state.laserPosition,
                        display: this.state.display
                    }}></div>

                </div>


            </div>
        );
    }
}

export default App;
