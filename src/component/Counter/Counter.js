import React, { Component } from 'react';

class Counter extends Component {
    state={
        count:0
    }
    intervalId = null

    increment=()=>{
        this.setState({
            count : this.state.count + 1
        })
    }
    decrement=()=>{
        if(this.state.count>0){
            this.setState({
                count : this.state.count - 1
            })
        }
    }
    start=()=>{
        this.intervalId=setInterval(()=>{
            this.setState({
                count : this.state.count - 1
            })
        },1000)
    }

    render() {
        return (
            <div className="text-center mx-auto w-1/2 bg-zinc-50 mt-10 p-6 rounded">
                <p className="text-2xl font-bold bg-green-200 rounded text-bold p-1">Simple Counter App</p>
                <div className="count-area mt-6">
                   <div className="timer">
                        <button onClick={this.increment} className='border w-20'> + </button>
                        <span className='mx-6 text-xl'>{this.state.count}</span>
                        <button onClick={this.decrement} className='border w-20'> - </button>
                   </div>
                   <div className="control mt-6">
                   <button onClick={this.start} className='border w-20 mx-2'> Start </button>
                   <button className='border w-20 mx-2'> Pause </button>
                   <button className='border w-20 mx-2'> Reset </button>
                   </div>
                </div>
            </div>
        );
    }
}

export default Counter;