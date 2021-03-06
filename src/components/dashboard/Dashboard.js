import React, { Component } from 'react'
import Notifications from './Notifications'
import ProductList from '../products/ProductList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
class Dashboard extends Component {
    render(){
        // console.log(this.props);
        const { products, auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin'/>
        return (
            <div className="dashboard">
            <div className="row">
                <div className="col s12 m6">
                    <ProductList products={products} />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications />
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.firestore.ordered.products,
        auth: state.firebase.auth
    }
}

export default compose(
    firestoreConnect([
        { collection: 'products' }
    ]),
    connect(mapStateToProps)
)(Dashboard);