import { useState } from "react";
import { useOutletContext } from "react-router";

function LoginPage(){
    const { handleLogin } = useOutletContext();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    async function login(e) {
        e.preventDefault();

        setError(null);
        setIsLoading(true);

        try{
            const response = await fetch('/api/users/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user: {
                        email,
                        password
                    }
                })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user');
            }

            const data = await response.json();

            handleLogin(data.user.token);
        }
        catch (err){
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };
    

    return (
        <>
            <div>Please Login</div>
            <form onSubmit={login}>
                <label>
                    이메일
                    <input
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    />
                </label>
                <label>
                    비밀번호
                    <input
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    />
                </label>

                <button type="submit" disabled={isLoading}>
                    {isLoading ? "로그인 중..." : "로그인"}
                </button>

                {error && <p>{error}</p>}
            </form>
        </>
    );
}

export default LoginPage;