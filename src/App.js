import React,{Component} from "react";
import Cards from "./Cards";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import Footer from "./Footer";
class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users=>this.setState({robots: users}))
    }

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(  robots=>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase())}  )
    
          return(
                <div className="w-full h-screen">
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <Cards robots={filteredRobots}/>
                    </Scroll>
                    <Footer/>
                </div>
        );
    }
}
export default App;