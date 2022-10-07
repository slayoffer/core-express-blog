const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ props }) {
  return (
    <Layout>
      <h1 className="text-5xl text-center mt-4">Yo, this is main page!</h1>
      <h2 className="text-3xl text-center mt-4">Go to Entries to see all entries!</h2>
    </Layout>
  );
};
