import { useState } from "react";
import { db } from "../mocks/db.js";
import Article from "./Article";


//const initialUsers = db.users;
const initialArticles = db.articles;

function Feed(){
    //const [users, setUsers] = useState([]);
    const [articles] = useState([...initialArticles]);
    //const [comments, setComments] = useState([]);
    //const [isLoading, setIsLoading] = useState(true);
    //const [error, setError] = useState(null);



    return (
        <ul>
            {articles.map((article)=> (
                <Article key={article.id} article={article}/>
            ))}
        </ul>
    );
}

export default Feed;