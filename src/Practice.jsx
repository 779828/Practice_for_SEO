import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";

const Practice = () => {
  const userRedux = useSelector((res) => res.user);

  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <title>Latest Posts - My Website</title>
        <meta
          name="description"
          content="Browse the latest blog posts on various topics."
        />
        <meta name="keywords" content="blog, posts, React, SEO, latest news" />
        <meta property="og:title" content="Latest Blog Posts - My Website" />
        <meta
          property="og:description"
          content="Read the latest blog posts with engaging content."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <h1 className="text-3xl font-bold text-center my-6 text-white">
        Latest Blog Posts
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {userRedux?.users?.length > 0 ? (
          userRedux?.users.map(({ body, title, id, tags }, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-2xl transition duration-300 cursor-pointer"
            >
              <Helmet>
                <title>{title} - My Website</title>
                <meta name="description" content={body.substring(0, 150)} />
                <meta property="og:title" content={title} />
                <meta
                  property="og:description"
                  content={body.substring(0, 150)}
                />
              </Helmet>

              <h2 className="text-xl font-bold text-gray-800">ID: {id}</h2>
              <h1 className="text-2xl font-semibold text-red-500 mt-2">
                {title}
              </h1>
              <p className="text-gray-600 mt-3">{body}</p>

              {tags?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-200 text-yellow-600 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Practice;

// import React, { memo } from "react";
// import { useSelector } from "react-redux";
// import { Helmet } from "react-helmet-async";

// /**
//  * PostCard Component - Displays individual blog post.
//  * @param {Object} post - Post data (id, title, body, tags).
//  */
// const PostCard = memo(({ post }) => {
//   const { id, title, body, tags } = post;

//   return (
//     <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-2xl transition duration-300 cursor-pointer">
//       {/* Dynamic SEO Metadata */}
//       <Helmet>
//         <title>{`${title} - My Website`}</title>
//         <meta name="description" content={body.substring(0, 150)} />
//         <meta property="og:title" content={title} />
//         <meta property="og:description" content={body.substring(0, 150)} />
//       </Helmet>

//       <h2 className="text-xl font-bold text-gray-800">ID: {id}</h2>
//       <h1 className="text-2xl font-semibold text-red-500 mt-2">{title}</h1>
//       <p className="text-gray-600 mt-3">{body}</p>

//       {tags?.length > 0 && (
//         <div className="mt-4 flex flex-wrap gap-2">
//           {tags.map((tag) => (
//             <span
//               key={tag}
//               className="bg-blue-200 text-yellow-600 px-3 py-1 rounded-full text-sm font-medium"
//             >
//               #{tag}
//             </span>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// });

// const Practice = () => {
//   const { users } = useSelector((state) => state.user);

//   return (
//     <div className="container mx-auto p-4">
//       <Helmet>
//         <title>Latest Posts - My Website</title>
//         <meta
//           name="description"
//           content="Browse the latest blog posts on various topics."
//         />
//         <meta name="keywords" content="blog, posts, React, SEO, latest news" />
//         <meta property="og:title" content="Latest Blog Posts - My Website" />
//         <meta
//           property="og:description"
//           content="Read the latest blog posts with engaging content."
//         />
//         <meta name="robots" content="index, follow" />
//       </Helmet>

//       <h1 className="text-3xl font-bold text-center my-6 text-white">
//         Latest Blog Posts
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {users && users.length > 0 ? (
//           users.map((post) => <PostCard key={post.id} post={post} />)
//         ) : (
//           <p className="text-center text-gray-500">Loading...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Practice;
