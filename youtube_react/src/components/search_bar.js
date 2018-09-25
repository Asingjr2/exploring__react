import React, { Component } from "react";


class SearchBar extends Component{
    // Class components have states
    constructor(props){
        super(props);

        this.state = { term: ""};
    }

    render(){
        // render methods required for class.  two ways to update class based on event.
        return (
            <div className="search-bar">
                Value of input: { this.state.term }
                <input onChange={ e => this.onInputChange(e.target.value)  }/>
            </div>
        );
    }

    // Used to call parent function passed in call
    onInputChange(term){
        this.setState({ term}) // using shorthand since set value name will equal new value name to set state.  
        this.props.onSearchTermChange(term);
    }
}


// Default component export code
export default SearchBar;
