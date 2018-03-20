import React, { Component } from "react";
import { Layout } from "antd";
const { Sider } = Layout;
import { connect } from 'dva';

import "./style.css";
import SiderHeader from "../../component/SiderHeader";
import SiderSearch from "../../component/SiderSearch";
import SiderList from "../../component//SiderList";
class SiderComponent extends Component {
  renderList(friendList) {
    const renderUsrs = friendList.map((item, idx) => {
      return (
        <article data-id={item.key} className={`chat_item`} key={idx}>
          <div className="avatar">
            <img src={item.avatar} className="img" />
          </div>
          <div className={`info`}>
            <h3 className={`nickname`}>
              <span className={`nickname_text`}>{item.name}</span>
            </h3>
          </div>
        </article>
      );
    });
    return renderUsrs;
  }
  render() {
    const { friendList, userInfo } = this.props;
    return (
      <Sider width={280} id="aside">
        <SiderHeader />
        <SiderSearch />
        <SiderList />
      </Sider>
    );
  }
  componentDidMount() { }
}



export default connect()(SiderComponent);
