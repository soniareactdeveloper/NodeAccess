const Home = () => {


  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {/* Welcome Message */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome Back!
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          You are now logged in. Explore your dashboard and manage your content effortlessly.
        </p>

        {/* User Details */}
        <div className="bg-gray-50 p-4 rounded-md mb-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700">
            User: John Doe
          </h2>
          <p className="text-gray-500">Email: johndoe@example.com</p>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => alert("Logged out!")}
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
