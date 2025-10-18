import Navigation from '@/Components/Navigation';
import Footer from '@/Components/Footer';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Navigation user={null} />
            <main className="flex-grow container mx-auto px-6 py-8">{children}</main>
            <Footer />
        </div>
    );
}
