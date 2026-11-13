
function Comment({comment}){
    return(
        <>
           <span>{comment.author.username}</span>     
                <div>
                    <span>
                        {comment.body}
                    </span>
            </div>
        </>
    )
}

export default Comment;