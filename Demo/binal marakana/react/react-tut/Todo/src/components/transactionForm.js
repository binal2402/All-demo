import React, { Component } from 'react'

class TransactionForm extends Component {
    state = {
       ...this.returnStateObject()
    }

    returnStateObject(){
        if(this.props.currentIndex == -1)
            return{
                Name:'',
                Email:''
            }
        else
            return this.props.list[this.props.currentIndex]
    }
    
    componentDidUpdate(prevProps)
    {
        // debugger
        if(prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length)
        this.setState({ ...this.returnStateObject()})
    }

    handleInputChange = (e) =>
    {
        // console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) =>
    {
        e.preventDefault()
        this.props.onAddOrEdit(this.state)
    }
    render() {
        return (
           <form onSubmit={this.handleSubmit}>
               <label htmlFor="AccountNo">Name</label>
               <input name="Name" placeholder="Enter name" value={this.state.Name} onChange={this.handleInputChange}></input><br/>

               <label htmlFor="Email">Email</label>
               <input name="Email" placeholder="Enter Email" value={this.state.Email} onChange={this.handleInputChange}></input><br/>

               <button type="submit">Submit</button>
           </form>
        )
    }
}
export default TransactionForm 