import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Article from "../components/Article";
import Comment from "../components/Comment";


function ArticlePage() {
    const { slug } = useParams();

    const [article, setArticle] = useState();
    const [comments, setComments] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchArticle = async () => {
        try {
            const articleResponse = await fetch('/api/articles');

            if (!articleResponse.ok) {
            throw new Error('Failed to fetch article');
            }

            const data = await articleResponse.json();
            setArticle(data.articles.find((article) => article.slug == slug));

            const commentResponse = await fetch(`/api/articles/${slug}/comments`);

            if (!commentResponse.ok) {
                throw new Error('Failed to fetch comments');
            }

            const data2 = await commentResponse.json(); 
            
            setComments(data2.comments);

        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };
        
    fetchArticle();
    }, [slug]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>데이터를 불러오지 못했습니다.</p>;
    }

    return (
        <>
            <Article article={article} />
            <ul>
                {comments.map((comment)=> (
                    <li key={comment.id}>
                        <Comment comment={comment}/>
                    </li>
                ))}
            </ul> 
        </>
    )
};

export default ArticlePage;