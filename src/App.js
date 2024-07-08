// // src/App.js

// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ListProvider } from './context/listContext';
// import CreatePost from './components/CreatePost';
// import PostsList from "./components/PostsList" 

// const App = () => {
//     return (
//         <BrowserRouter>
//             <ListProvider>
//                 <Routes>
//                     <Route exact path='/' element={<PostsList />} />
//                     <Route exact path='/post' element={<CreatePost />} />
//                 </Routes>


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ListProvider } from './context/listContext';
import CreatePost from './components/CreatePost';
import PostsList from "./components/PostsList";
import EditPost from "./components/EditPost";

const App = () => {
    return (
        <BrowserRouter>
            <ListProvider>
                <Routes>
                    <Route exact path='/' element={<PostsList />} />
                    <Route exact path='/post' element={<CreatePost />} />
                    <Route exact path='/edit/:postId' element={<EditPost />} />
                </Routes>
            </ListProvider>
        </BrowserRouter>
    );
}

export default App;
