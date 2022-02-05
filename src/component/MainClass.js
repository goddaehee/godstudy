import React, { Component } from 'react';

class MainClass extends Component {
    render() {
        return (
            <div>
                <main>
                    <h1>안녕하세요. {this.props.name} 입니다.</h1>
                </main>
            </div>
        );
    }
}

export default MainClass;