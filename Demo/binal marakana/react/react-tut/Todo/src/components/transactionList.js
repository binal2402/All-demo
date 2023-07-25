import React, { Component } from 'react'
import TransactionForm from './transactionForm'

class TransactionList extends Component {
    state = {
        currentIndex: -1,
        list:this.returnList()
    }

    returnList(){
        if(localStorage.getItem('transactions')==null)
            localStorage.setItem('transactions',JSON.stringify([]))
        return JSON.parse(localStorage.getItem('transactions'))
    }

    onAddOrEdit = (data) =>{
        var list = this.returnList()
        // debugger
        if(this.state.currentIndex == -1)
            list.push(data)
        else
            list[this.state.currentIndex] = data
        localStorage.setItem('transactions',JSON.stringify(list))
        this.setState({list})
    }
    handleEdit = index =>
    {
        this.setState({
            currentIndex:index
        })
    }
    handleDelete = index =>
    {
        // debugger
        var list = this.returnList()
        list.splice(index,1)
        localStorage.setItem('transactions',JSON.stringify(list))
        this.setState({list})
    }
    render() {
        return (
            <div>
               <TransactionForm
                    onAddOrEdit = {this.onAddOrEdit}
                    currentIndex = {this.state.currentIndex}
                    list = {this.state.list}
               />
                <table className="datalist">
                    <tbody>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Button</th>
                        
                        {
                           
                            this.state.list.map((item,index)=>{
                                return<tr key={index}>
                                    <td>{item.Name}</td>
                                    <td>{item.Email}</td>
                                    <td><button onClick={() => this.handleEdit(index)}>Edit</button>
                                    <button onClick={() => this.handleDelete(index)}>Delete</button></td>
                                </tr>
                            })
                            
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default TransactionList