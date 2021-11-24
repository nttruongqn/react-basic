import React from "react";
import axios from "axios";
import "./ListUser.css";
import { withRouter } from "react-router";

class ListUser extends React.Component {
  state = {
    listUser: [],
  };
  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=2");
    console.log("check data", res);
    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : [],
    });
  }

  handleViewDetailUser = (user) => {
    console.log("check user",this.props)
    this.props.history.push(`/user/${user.id}`)
  }

  render() {
    let { listUser } = this.state;
    console.log("check state", listUser);
    return (
      <div className="list-user-container">
        <div className="title">Fetch All User</div>
        <div className="list-user-content">
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <div className="list-user-item" key={item.id}
                onClick={()=>this.handleViewDetailUser(item)}>
                  {index + 1} - {item.first_name} - {item.email}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(ListUser);
