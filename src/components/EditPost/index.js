import { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ListContext from "../../context/listContext";

const EditPost = () => {
    const { postsList, updatePost } = useContext(ListContext);
    const { postId } = useParams();
    const navigate = useNavigate();

    const post = postsList.find(p => p.id === postId);

    const [name, setName] = useState(post ? post.authorname : '');
    const [title, setTitle] = useState(post ? post.title : '');
    const [description, setDescription] = useState(post ? post.description : '');

    useEffect(() => {
        if (!post) {
            navigate('/');
        }
    }, [post, navigate]);

    const onAuthorNameInput = (event) => setName(event.target.value);
    const onTitleInput = (event) => setTitle(event.target.value);
    const onDescriptionInput = (event) => setDescription(event.target.value);

    const onSubmitForm = (event) => {
        event.preventDefault();
        const updatedPost = { id: postId, authorname: name, title: title, description: description };
        updatePost(updatedPost);
        navigate('/');
    }

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <input type="text" onChange={onAuthorNameInput} value={name} placeholder="Author Name" />
                <input type="text" onChange={onTitleInput} value={title} placeholder="Title" />
                <input type="text" onChange={onDescriptionInput} value={description} placeholder="Description" />
                <div>
                    <button type="submit">Update Post</button>
                </div>
                <div>
                    <button type="button" onClick={() => navigate('/')}>Back to Post List</button>
                </div>
            </form>
        </div>
    );
}

export default EditPost;
