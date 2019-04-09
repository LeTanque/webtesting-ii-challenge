import React, { Fragment, Component } from 'react'

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        console.log(this.props)
        return (
            <Fragment>
                <section className='dashboard'> 
                    <button className='' onClick={this.props.hitBall}>Ball</button>
                    <button className='' onClick={this.props.hitStrike}>Strike</button>
                </section>
                
            </Fragment>
        );
    }
}

export default Dashboard