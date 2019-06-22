import React, { Component } from 'react';
import '../app.css';

export default class LoginView extends Component {
  state = {};

  render() {
    return (
      <form id="new_session" action="#" acceptCharset="UTF-8" method="post">
        <div>
          <input type="text" placeholder="手机号或邮箱" name="email_or_mobile_number" />
        </div>
        <div>
          <input type="password" placeholder="密码" name="password" />
        </div>
        <div>
          <input type="checkbox" value="true" checked="checked" name="rememberme" />
          <span>记住我</span>
        </div>
        <button type="button" id="sign-in-form-submit-btn">
          <span>登录</span>
        </button>
      </form>
    );
  }
}
