
import './index.css'
const Postitem=(props)=>{
    const {postDetails} =props
    const {authorname,title,description}=postDetails 


    return(
        <div className="postItem-con">
             <h1 className="title">{title}</h1>
            <h1 className="authror-name">{authorname}</h1>
           <p className="desctiption">{description}</p>

        </div>
    )
} 

export default Postitem