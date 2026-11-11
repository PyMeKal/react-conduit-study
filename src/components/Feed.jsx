import { useState, useEffect } from "react";
import Article from "./Article";


function Feed(){
    const [articles, setArticles] = useState([]);
    //const [comments] = useState([...initialComments]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchArticle = async () => {
        try {
            const response = await fetch('/api/articles');

            if (!response.ok) {
            throw new Error('Failed to fetch todos');
            }

            const data = await response.json();

            setArticles(data.articles);

        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };
        
    fetchArticle();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>데이터를 불러오지 못했습니다.</p>;
    }

    return (
        <ul>
            <div>
                {articles.map((article)=> (
                    <Article key={article.slug} article={article}/>
                ))}
            </div>        
        </ul>
    );
}

export default Feed;