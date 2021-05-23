import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import img1 from '../src/imgs/i1.JPG';
import img2 from '../src/imgs/i2.JPG';
import img3 from '../src/imgs/i4.JPG';
import img4 from '../src/imgs/i4.JPG';
class Component1 extends React.Component {
	constructor(props) {
  	super(props)
    this.backgrounds = [img1,img2,img3,img4]
    this.state = { backgroundIndex: 0 }
    
    this.changeBackground = this.changeBackground.bind(this)
  }
  
  componentDidMount () {
    this.timeout = setTimeout(
      this.changeBackground,
      this.props.animDuration * 100
    )
  }
  
  componentWillUnmount() {
  	if (this.timeout) clearTimeout(this.timeout)
  }

  changeBackground () {
    this.setState(function ({ backgroundIndex }) {
      const nextBackgroundIndex = ++backgroundIndex % this.backgrounds.length

      return { backgroundIndex: nextBackgroundIndex }
    }, function () {
      this.timeout = setTimeout(
        this.changeBackground,
        this.props.animDuration * 100
      )
    })
  }

  render () {
    return (
      <div>
        <img src={ this.backgrounds[this.state.backgroundIndex] } alt="images" />
      </div>
    )
  }
}

ReactDOM.render(
  <Component1 animDuration={1} />,
  document.getElementById('ani')
);
