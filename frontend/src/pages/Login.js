import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Login() {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setLoading(true);
            await login(email, password);
            toast.success('Successfully logged in!');
            navigate('/');
        } catch (error) {
            toast.error('Failed to log in: ' + error.message);
        }
        setLoading(false);
    }

    return (
        <div className="container container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
            <div className="card shadow-lg p-4" style={{ width: '400px' }}>
                <h2 className="text-center mb-4">Log In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input type="password" className="form-control" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button disabled={loading} className="btn btn-primary w-100 mt-4" type="submit">Log In</button>
                </form>
                <div className="text-center mt-3">
                    Need an account? <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </div>
    );
}
