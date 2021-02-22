import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'


class App extends React.Component {
    render(){
        return (
            <React.Fragment>
                <div className="top">
                    <header>
                        <img src="./images/ironhack-logo.svg"/>
                        <img src="./images/menu-top.svg"/>
                    </header>
                    <div class="textBtn">
                        <h1>Say hello to ReactJS</h1>
                        <h4>You will learn how to use the most popular frontend library, and become a super Ninja developer</h4>
                        <button>Awesome!</button>
                    </div>
                    
                </div>
                <div className="bottom">
                    <div className="eachBot">
                        <img src="/images/icon1.png" className="img"/>
                        <h2>Declaritve</h2>
                        <h6>React makes it painless to create interactive UIs.</h6>
                    </div>
                    <div className="eachBot">
                        <img src="/images/icon2.png" className="img"/>
                        <h2>Components</h2>
                        <h6>Build encapsulated components that manage their state.</h6>
                    </div>
                    <div className="eachBot">
                        <img src="/images/icon3.png" className="img"/>
                        <h2>Single-Way</h2>
                        <h6>A set of immutble values ares passed to the component's</h6>
                    </div>
                    <div className="eachBot">
                        <img src="/images/icon4.png" className="img"/>
                        <h2>JSX</h2>
                        <h6>Statically-typed designed to run on modern browsers.</h6>
                    </div>
                    
                   
                </div>

            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#myApp'))