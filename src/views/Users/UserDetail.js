import axios from "axios";
import React from "react";
import "./UserDetail.scss"
import { withRouter } from "react-router";


class UserDetail extends React.Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res.data.data ? res.data.data : {},
      });
      console.log("check res user", res);
    }
  }

  handleBackListUser = () => {
    this.props.history.push(`/user`);
  };

  render() {
    let { user } = this.state;
    let isEmptyObject = Object.keys(user).length === 0;
    console.log("check props", this.props);
    return (
      <>
        <div className="title">
          hello user with id : {this.props.match.params.id}
        </div>

        {isEmptyObject === false && (
          <>
            <div className="user-item">
              <div className="user-name">{user.first_name}</div>
              <div className="user-email">{user.email}</div>
              <img src={user.avatar} />
              <div>
                <button type="button" onClick={() => this.handleBackListUser()}>
                  Back
                </button>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default withRouter(UserDetail);
