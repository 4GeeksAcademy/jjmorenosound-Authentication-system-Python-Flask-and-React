import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';

export const ModalLogin = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (email, password) => {
  

        const success = await actions.login(email, password);

        if (success) {
            navigate("/");
            setEmail('');
            setPassword('');
            handleClose();
        } 
    };

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => setShow(true);

    return (
        <>

<button className="btn btn-primary" onClick={handleShow}>
                Login
            </button>
            <div className={`modal ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">login</h5>
                            <button type="button" className="btn-close" onClick={handleClose}></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="emailInput" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="emailInput"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="passwordInput" className="col-sm-2 col-form-label">Password</label>
                                    <div className="col-sm-10">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="passwordInput"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => handleLogin(email, password)}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
            {show && <div className="modal-backdrop fade show"></div>}
        </>
 
    );
};
