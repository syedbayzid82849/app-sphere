import Navbar from '../components/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <div className="container mx-auto grow">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default RootLayout;