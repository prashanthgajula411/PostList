
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ListContext from '../../context/listContext';
import PostItem from '../PostItem';
import './index.css'

const PostsList = () => {
    const { postsList } = useContext(ListContext);
    const navigate = useNavigate();

    const onCreatePost = () => {
        navigate("/post");
    }

    const onEditPost = (postId) => {
        navigate(`/edit/${postId}`);
    }

    return (
        <div>
            <h1 className="main-heading">Post List</h1>
            {postsList.map((eachPost) => (
                <div key={eachPost.id}>
                    <PostItem id={eachPost.id} postDetails={eachPost} />
                    <button type='button' onClick={() => onEditPost(eachPost.id)} className='Edit-button'>Edit Post</button>
                </div>
            ))}
            <button type='button' onClick={onCreatePost} className='btn-create-post'>Create Post</button>
        </div>
    );
}

export default PostsList;

