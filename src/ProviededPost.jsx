import { PostsContext } from "./App";





const Post = ( {children}) => {
    return (
        <PostsContext.Consumer>
            {children}
        </PostsContext.Consumer>
    )
}

export default Post 