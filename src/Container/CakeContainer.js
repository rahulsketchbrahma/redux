import React from "react";
import { buyCakes } from "../redux";
import { connect } from "react-redux";

function CakeContainer(props) {
  console.log(props);
  return (
    <div>
      <h1>Number of cakes -{props.numberOfCakes} </h1>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    numberOfCakes: state.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCakes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
