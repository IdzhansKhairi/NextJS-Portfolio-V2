import { Layout } from "antd";

export default function Footer() {
    return (
        <div className="footer-wrapper d-flex flex-column flex-sm-row justify-content-center align-items-center px-3 py-4 border-top gap-2">
            <div className="d-flex align-items-center pe-sm-2">
                <span className="text-secondary me-1">© {new Date().getFullYear()}</span>
                <span className="text-dark me-1">Idzhans Khairi</span>
                <span className="me-1 d-none d-sm-inline">•</span>
                <span className="text-secondary d-none d-sm-inline">Built with ❤️</span>
            </div>
            <div className="d-flex align-items-center border-sm-start ps-sm-3 gap-3">
                {/* Email Work */}
                <a href="mailto:idzhans.khairi@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-envelope-at-fill text-secondary"></i>
                </a>
                {/* Github */}
                <a href="https://github.com/IdzhansKhairi" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github text-secondary"></i>
                </a>
                {/* Linkedin */}
                <a href="https://www.linkedin.com/in/idzhans-khairi" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin text-secondary"></i>
                </a>
            </div>
        </div>
    );
}