const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Blog</title>
        <link rel="shortcut icon" href="css/favicon.ico" />
        <link rel="stylesheet" href="/css/output.css" />
        <script defer src="/js/script.js" />
      </head>
      <body className="min-h-screen flex flex-col">
        <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-yellow-200 shadow sm:items-baseline w-full">
          <div className="flex gap-4 mb-2 sm:mb-0">
            <a href="/" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Home</a>
            <a href="/entries" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Entries</a>
          </div>
        </nav>

        {children}

        <div className="flex-grow" />

        <footer className="mt-auto p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022
            {' '}
            <a href="https://flowbite.com/" className="hover:underline">vVolodya™</a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="/" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
              <a href="/" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
              <a href="/" className="mr-4 hover:underline md:mr-6">Licensing</a>
            </li>
            <li>
              <a href="/" className="hover:underline">Contact</a>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
};
