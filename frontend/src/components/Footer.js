import { Link } from 'react-router-dom';

export default function Footer() {
    return  <footer className="py-1 bg-dark">
                <p className="text-center text-white mt-1 mb-0">
                    JVLcart - 2023-2024, All Rights Reserved
                </p>
                <p className="text-center mt-0">
                    <Link to="/contact" className="text-white-50" style={{ fontSize: '0.9rem' }}>Contact Us</Link>
                </p>
            </footer>
}