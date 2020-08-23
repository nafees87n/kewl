import React,{Component} from 'react';
import './two.css';
import Cardlist from './Cardlist.js';
import SearchBox from './SearchBox.js';
import cardsinput from './cardsinput.js';
import 'tachyons';

class Two extends Component{

  constructor(){
    super()
    this.state = {
      cardsinput : cardsinput,
      searchfeild : ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfeild: event.target.value})      
  }

  render () {
    const filteredCards = this.state.cardsinput.filter(cardsinput => {
      return cardsinput.headline.toLowerCase().includes(this.state.searchfeild.toLowerCase)
    })


    return (
    <div className='tc'>
      <SearchBox searchChange={this.onSearchChange}/>
     <Cardlist cardsinput = {this.state.cardsinput}/>
  </div>
  )
  }
}

export default Two;