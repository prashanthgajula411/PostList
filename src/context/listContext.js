
import React, { useState, createContext } from 'react';

const ListContext = createContext();

export const ListProvider = ({ children }) => {
    const [postsList, setPostsList] = useState([]);

    const updatePost = (updatedPost) => {
        setPostsList(prevList =>
            prevList.map(post => post.id === updatedPost.id ? updatedPost : post)
        );
    };

    return (
        <ListContext.Provider value={{ postsList, setPostsList, updatePost }}>
            {children}
        </ListContext.Provider>
    );
};

export default ListContext;

