// PostList.js
import React from "react";

import Post from "../components/Post";
import {useSelector, useDispatch} from "react-redux";
import {actionCreators as postActions} from "../redux/modules/post";



const PostList = (props) => {
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.post.list);

    React.useEffect(() => {
        if(post_list.length === 0) {
            dispatch(postActions.getPostFB());
        }
    }, []);


    return (
        <React.Fragment>
            {post_list.map((p, idx) => {
                console.log(p)
                return <Post key={p.id} {...p}/>
            })}
        </React.Fragment>
    )
}

export default PostList;

