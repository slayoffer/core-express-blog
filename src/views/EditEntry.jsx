const React = require('react');
const Layout = require('./Layout');

module.exports = function EditEntry({ entry, tags }) {
  return (
    <Layout>
      <h2 className="text-5xl text-center mt-8">Edit Entry</h2>
      <div className=" max-w-xl mx-auto my-6">
        <form method="POST" action={`/edit/${entry.id}`}>

          <label htmlFor="small-input" className="block mb-2 text-lg font-bold text-black-900">Entry Name</label>
          <input type="text" name="title" id="small-input" value={entry.title} className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

          <label htmlFor="large-input" className="block mb-2 text-lg font-bold text-black-900">Entry Text</label>
          <input type="text" id="large-input" name="body" value={entry.body} className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

          <div className="flex mt-6">
            {tags.map((tag) => (tag.id === entry['Tags.id'] ? (
              <div className="flex items-center mr-4">
                <input id="inline-radio" type="radio" name="tagName" value={tag.tagName} checked className="w-4 h-4 text-black-800 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" />
                <label htmlFor="inline-radio" className="ml-2 text-lg font-bold text-black-600">{tag.tagName}</label>
              </div>
            ) : (
              <div className="flex items-center mr-4">
                <input id="inline-radio" type="radio" name="tagName" value={tag.tagName} className="w-4 h-4 text-black-800 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" />
                <label htmlFor="inline-radio" className="ml-2 text-lg font-bold text-black-600">{tag.tagName}</label>
              </div>
            )))}
          </div>

          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mt-4 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Entry</button>
        </form>
      </div>
    </Layout>
  );
};
