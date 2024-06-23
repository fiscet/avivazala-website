export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content p-4 text-center">
      <div className="container mx-auto">
        <p>© 2024 Your Company. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="link link-hover">
            Privacy Policy
          </a>
          <a href="#" className="link link-hover">
            Terms of Service
          </a>
          <a href="#" className="link link-hover">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
