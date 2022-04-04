import React from "react";
import { Text, Input, Grid, Button } from "../elements";
import { setCookie } from "../shared/Cookie";

const Login = (props) => {

  const [id, setId] = React.useState('');
    const [pwd, setPwd] = React.useState('');

    const changeId = (e) => {
        setId(e.target.value);
    }

    const changePwd = (e) => {
        setPwd(e.target.value);
    }

    const login = () => {
      console.log(id)
      console.log(pwd)
        setCookie("user_id", id, 3);
        setCookie("user_pwd", pwd, 3);
    }

  
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={changeId}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            placeholder="패스워드 입력해주세요."
            _onChange={changePwd}
            type="password"
          />
        </Grid>

        <Button
          text="로그인하기"
          _onClick={() => {
            console.log("로그인 했어!");
            login();
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
