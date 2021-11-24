import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import { connect } from "react-redux";

class Home extends React.Component {
  // componentDidMount() {
  //     setTimeout(() => {
  //         this.props.history.push('/todo')
  //     },5000)
  // }

  handleDelete = (user) => {
    console.log("check user delete", user);
    this.props.deleteUserRedux(user);
    };
    
    handleAdd = () => {
        this.props.addUserRedux();
    }

  render() {
    console.log("check props", this.props);
    let { dataRedux } = this.props;
    return (
      <div>
        Home Page
        {dataRedux &&
          dataRedux.length > 0 &&
          dataRedux.map((item, index) => {
            return (
              <>
                <div>
                  {" "}
                  {index + 1} - {item.name}
                  <button
                    className="button"
                    onClick={() => this.handleDelete(item)}
                  >
                    Xoa
                        </button>
                        <button
                    className="button"
                    onClick={() => this.handleAdd()}
                  >
                    Them
                  </button>
                </div>
              </>
            );
          })}
      </div>
    );
  }
}

//export default withRouter
const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
          dispatch({ type: "DELETE_USER", payload: userDelete }),
      addUserRedux: () => dispatch({
          type: "ADD_USER",
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
