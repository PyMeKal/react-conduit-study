import { useState } from "react";
import { useOutletContext } from "react-router";

function EditorPage(){

    const { token } = useOutletContext();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [body, setBody] = useState('');
    //const [posted, setPosted] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    async function newArticle(e) {
        e.preventDefault();

        setError(null);
        setIsLoading(true);

        try{
            const response = await fetch('/api/articles', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${token}`
                },
                body: JSON.stringify({
                    article: {
                        title,
                        description,
                        body
                    }
                })
            });

            if (!response.ok) {
                throw new Error('Failed to write article');
            }

            // const data = await response.json();

            // setPosted(data.status == 201 ? true : false);     
        }
        catch (err){
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };
    

    return (
        <>
            <div>새글쓰기</div>
            <form onSubmit={newArticle}>
                <label>
                    제목
                    <input
                    type="title"
                    autoComplete="title"
                    required
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    />
                </label>
                <label>
                    설명
                    <input
                    type="description"
                    autoComplete="description"
                    required
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    />
                </label>
                <label>
                    본문
                    <input
                    type="body"
                    autoComplete="body"
                    required
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                    />
                </label>

                <button type="submit" disabled={isLoading}>
                    {isLoading ? "글 쓰는중..." : "새글쓰기"}
                </button>

                {error && <p>{error}</p>}
            </form>
        </>
    );
}

export default EditorPage;