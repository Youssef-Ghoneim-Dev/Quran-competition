import logo from './assets/logo.png';
export default function FooterComponent() {
    return (
        <div className="footer">
            <img src={logo} alt="logo" />
            <div className='footer-text-flex'>
                <p>Developed by a technical team from<span> Bytix</span></p>
                <p>Copyright © 2025 All rights reserved</p>
            </div>
            <i className='bx bx-chevrons-right'></i>
        </div>
    )
}