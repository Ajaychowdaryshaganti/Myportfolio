export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Ajay Shaganti. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
