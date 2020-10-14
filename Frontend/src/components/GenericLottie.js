import React, { Component } from 'react';
import Lottie from 'react-lottie';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

class GenericLottie extends Component {
  constructor(props) {
    super(props);
    this.player = React.createRef();
    // this.options = {
    //   loop: true,
    //   autoplay: true,
    //   animationData: this.props.name,
    //   rendererSettings: {
    //     preserveAspectRatio: 'xMidYMid slice'
    //   }
    // }
  }

  handleMouseOver = () => {
    this.player.current.play();
  }

  // doSomething = () => {

  // }

  render() {
    return (
      <div onMouseOver={this.handleMouseOver}>
        {/* <lottie-player id="firstLottie" src="https://assets2.lottiefiles.com/private_files/lf30_dERSt0.json" style="width:400px; height: 400px;"/>
          <Lottie options={this.options}
          width="80%" isClickToPauseDisabled={true}
        /> */}
        <Player
          // onEvent={event => {
          //   if (event === 'load') this.doSomething(); // check event type and do something
          // }}
          
          key={this.props.key}
          ref={this.player}
          src={this.props.animData}
          //hover
          style={{ width: '80%' }}
          zIndex={99}
        >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
      </div>
    );
  }
}

export default GenericLottie;
