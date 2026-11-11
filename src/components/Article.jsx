
function Article({article}){
    return (
        <li>
            <span>{article.author.username}</span>
            <h2>{article.title}</h2>       
            <div>
                {article.body}
            </div>
        </li>
    );
}

export default Article;