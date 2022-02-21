import React, { Component } from 'react';
import styles from'./counter.module.css'

class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    addFunc=()=>{
        this.setState({
            count : this.state.count +1
        })
    }

    render() {
        return (
            <div className="text-center mx-auto w-1/2 bg-zinc-50 mt-10 p-6 rounded">
                <div className="count-area">
                    <button className={styles.button}> + </button>
                    <span className={styles.span}>{this.state.count}</span>
                    <button className={styles.button}> - </button>
                </div>
            </div>
        );
    }
}

export default Counter;