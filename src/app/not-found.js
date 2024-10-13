
export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="text-2xl font-bold">Page not found</p>
            <div className="flex flex-col items-center justify-center mt-4">
                <a href="/" className="text-amber-500 hover:underline">Return to home</a>
            </div>
        </div>
    );
}