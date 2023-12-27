import React from 'react';
import { useLocation } from 'react-router';
import '../css/public.css';
import '../css/login.css';

function Login() {
  const params = useLocation();

  console.log('login 接收的 params', params);
  return (
    <div className="login">
      <form action="#" method="post">
        <h1>
          <a href="index.html">
            <img src="img/temp/logo.png" />
          </a>
        </h1>
        <p></p>
        <div className="msg-warn hide">
          <b></b>公共场所不建议自动登录，以防账号丢失
        </div>
        <p>
          <input type="text" name="" value="" placeholder="昵称/邮箱/手机号" />
        </p>
        <p>
          <input type="text" name="" value="" placeholder="密码" />
        </p>
        <p>
          <input type="submit" name="" value="登  录" />
        </p>
        <p className="txt">
          <a className="" href="reg.html">
            免费注册
          </a>
          <a href="forget.html">忘记密码？</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
