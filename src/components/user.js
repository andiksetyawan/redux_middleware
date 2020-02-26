import React, { Component } from "react";

import { connect } from "react-redux";

import { getUsers, addUsers } from "../actions/user";

class User extends Component {
  
  componentDidMount() {
  //  this.props.getUsersPending();
    // this.props.addUsers();
    this.props.getUsers();
    //this.props.getUsers();
  }

  handleClick = () => {
    alert("lick");
    this.props.getUsers();
  };

  handleAdd = () => {
    alert("klick");
    this.props.addUsers();
  };

  render() {
    console.log(this.props.user);
    const {isError, isLoading, data} = this.props.user;
    console.log("isError",isError);
    return (
      <div>
        <button onClick={this.handleClick}>LOAD USER FROM SERVER</button>
        <button onClick={this.handleAdd}>ADD USER HARDCORE</button>

        {
            isError&&<div>Error</div>
        }

        {isLoading?<div>Loading</div>:data.map((item, i) => {
          return <h1 key={i}>{item.name}</h1>;
        })}
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
    addUsers: () => dispatch(addUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
