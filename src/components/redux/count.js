import React from "react";
import { connect } from "react-redux";

const Count = (props) => {
  return(
      <div>
            <h1> i am count {props.count_var} </h1>
      </div>
  )
};

function mapStateToProps(state){
    return {
        count_var: state.count
    }
}

export default connect(mapStateToProps)(Count);