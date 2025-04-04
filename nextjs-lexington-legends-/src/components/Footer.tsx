export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h3 className="text-lg font-bold mb-2">Lexington Legends</h3>
            <p>207 Legends Lane, Lexington, KY 40505</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">Facebook</a>
              <a href="#" className="hover:text-blue-400">Twitter</a>
              <a href="#" className="hover:text-blue-400">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Lexington Legends. All rights reserved.
        </div>
      </div>
    </footer>
  );
}