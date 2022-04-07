import React from "react";
import { Grid, Text, Image, Button } from "../elements";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../redux/configureStore";
import { actionCreators as postActions } from "../redux/modules/post";


const Post = props => {
  const uid = useSelector(state => state.user.user.user_id);
  const dispatch = useDispatch();
  return (
    <>
      <Grid margin="40px 0" border="1px solid red">
        <Grid is_flex>
          <Image shape="circle" src={props.user_info.user_profile}></Image>
          <Text bold>{props.user_info.user_name}</Text>
          <Text>{props.insert_dt}</Text>
          {props.user_info.user_id === uid ? (
            <>
              <Button
                width="60px"
                bg="#666"
                _onClick={() => history.push(`/postedit/${props.id}`)}
              >
                수정
              </Button>
              <Button
                width="60px"
                bg="#666"
                _onClick={() => dispatch(postActions.deletePostFB(props.id))}
              >
                삭제
              </Button>
            </>
          ) : null}
        </Grid>
        <Grid padding={"16px"}>
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.image_url}></Image>
        </Grid>
        <Grid>
          <Text bold>{props.comment_cnt}개</Text>
        </Grid>
      </Grid>
    </>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "min",
    user_profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmHjmasqWbB3IdXO80h_PDBPg3Th4SGcpTwg&usqp=CAU",
  },
  image_url: "https://reactrealbaisc.s3.ap-northeast-2.amazonaws.com/31_RM.png",
  contents: "선장님~~~",
  comment_cnt: 0,
  insert_dt: "2022-04-01 10:00:00",
};

export default Post;