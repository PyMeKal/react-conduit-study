
function Article({article}){
    return (
        <>
            <span>{article.author.username}</span>
            <h2>{article.title}</h2>       
            <div>
                {article.description}
            </div>
        </>
    );
}

export default Article;