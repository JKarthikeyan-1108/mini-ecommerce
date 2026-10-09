import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Signup() {
    const { signup } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            return toast.error('Passwords do not match');
        }

        try {
            setLoading(true);
            await signup(email, password);
            toast.success('Successfully created an account!');
            navigate('/');
        } catch (error) {
            toast.error('Failed to create an account: ' + error.message);
        }
        setLoading(false);
    }

    return (
        <div className="container container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
            <div className="card shadow-lg p-4" style={{ width: '400px' }}>
                <h2 className="text-center mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input type="password" className="form-control" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password Confirmation</label>
                        <input type="password" className="form-control" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <button disabled={loading} className="btn btn-primary w-100 mt-4" type="submit">Sign Up</button>
                </form>
                <div className="text-center mt-3">
                    Already have an account? <Link to="/login">Log In</Link>
                </div>
            </div>
        </div>
    );
}
