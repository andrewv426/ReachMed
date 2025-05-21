function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-red-900 text-white py-8">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold">ReachMed</h2>
            <p className="text-red-200 text-sm mt-1">&copy; {currentYear} All rights reserved</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a 
              href="#" 
              className="text-red-200 hover:text-white transition-colors"
              aria-label="Privacy Policy"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="text-red-200 hover:text-white transition-colors"
              aria-label="Contact Us"
            >
              Contact
            </a>
            <a 
              href="https://github.com" 
              className="text-red-200 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
