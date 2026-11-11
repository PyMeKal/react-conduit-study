
function Article({article}){

   
    return (
        <li>
            <div>
                {article.title}
            </div>       
            <div>
                {article.body}
            </div>
        </li>
    );
}

export default Article;