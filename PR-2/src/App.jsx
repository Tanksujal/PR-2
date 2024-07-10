import { Component } from "react"
import Counter from "./counter"
import Fun from "./fun";
import './App.css'
class App extends Component {
  constructor()
  {
    super();
    this.state = {
      cnt : 0
    }
  }
  
 render()
 {
  return(
    <>
       
       <Counter  no={this.state.cnt}/>
       <Fun/>
    </>
  )
 }
}
  

export default App