import React from "react";
import { Text, Input, Grid, Button } from "../elements";
// import { setCookie } from "../shared/Cookie";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";

const Login = (props) => {

  const dispatch = useDispatch();

  const [id, setId] = React.useState('');
  const [pwd, setPwd] = React.useState('');

    const changeId = (e) => {
        setId(e.target.value);
    }

    const changePwd = (e) => {
        setPwd(e.target.value);
    }

    const login = () => {

      if (id === "" || pwd === "") {
        window.alert("아이디 혹은 비밀번호가 공란입니다. 입력해주세요.");
        return;
      }
      dispatch(userActions.loginFB(id, pwd));
      
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
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            placeholder="패스워드 입력해주세요."
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
            type="password"
          />
        </Grid>

        <Button
          text="로그인하기"
          _onClick={login}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
