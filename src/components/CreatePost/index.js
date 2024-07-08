import { v4 as uuidv4 } from 'uuid';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ListContext from "../../context/listContext";

import './index.css'

const CreatePost = () => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const { setPostsList } = useContext(ListContext);

    const onAuthorNameInput = (event) => setName(event.target.value);
    const onTitleInput = (event) => setTitle(event.target.value);
    const onDescriptionInput = (event) => setDescription(event.target.value);

    const onSubmitForm = (event) => {
        event.preventDefault();
        const newPost = { id: uuidv4(), authorname: name, title: title, description: description };
        setPostsList(prevList => [...prevList, newPost]);
    }

    const navigate = useNavigate();
    const onBackPostList = () => {
        navigate("/");
    }

    return (
        <div>
            <form onSubmit={onSubmitForm} className="input-form">
                <label>Authorname </label>
                <input type="text" onChange={onAuthorNameInput} placeholder="Author Name"/>
                <label>Title</label>
                <input type="text" onChange={onTitleInput} placeholder="Title"/>
                <label>Description </label>
                <input onChange={onDescriptionInput} placeholder="Description" />

        
                <div>
                    <button type="submit">Add Post</button>
                </div>
                <div>
                    <button type="button" onClick={onBackPostList}>Back to Post List</button>
                </div>
            </form>
        </div>
    );
}

export default CreatePost;
