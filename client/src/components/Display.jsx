import React, { Fragment, Component } from 'react'

class Display extends Component {
    // constructor(props) {
    //     super(props);
    // }


    render() {
        return (
            <Fragment>
                <h5>Display</h5>
                <section className='display'>
                    <code>{this.props.balls}</code>
                    <code>{this.props.strikes}</code>
                </section>
                    <code>{this.props.walk ? 
                        <>Walk!</> : <></>
                    }</code>
                    <code>{this.props.strikeout ? 
                        <>Strikeout!</> : <></>
                    }</code>
                
                
            </Fragment>
        );
    }
}

export default Display