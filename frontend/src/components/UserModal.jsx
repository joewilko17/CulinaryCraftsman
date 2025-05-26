import { X } from "lucide-react"
import { useEffect, useState } from "react";

const UserModal = ({ type, onClose }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    }

    useEffect(() => {
        console.log("modal ", type)
    }, [type])

    return (
        <div className="modal-overlay">
            <div className="modal-content user">
                <div className="modal-header user">
                    <button className="modal-close" onClick={onClose}>
                        <X className="modal-icon" />
                    </button>
                </div>

                <div className="modal-body">
                    {type === 'login' ? (
                        // login modal
                        <div className="login-content">
                            <h2 className="section-title">Login</h2>
                            <form onSubmit={handleLoginSubmit}>
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                <button className="button button-primary" type="submit">Login</button>
                            </form>
                        </div>
                    ) : (
                        // signup modal
                        <div></div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default UserModal;