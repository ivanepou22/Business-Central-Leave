import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <footer className="app-auth-footer">
                <div className="container text-center py-3">
                    <small className="copyright">Developed <i className="fas fa-heart"></i> by <Link className="app-link" to="https://meevolsoft.com/" target="_blank">MeevolSoft Ltd </Link></small>
                </div>
            </footer>
        </div>
    )
}

export default Footer