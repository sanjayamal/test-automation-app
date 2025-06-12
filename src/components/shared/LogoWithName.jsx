const LogoWithName = ({ name, className = "" }) => {
  return (
    <div className={`flex items-center justify-center space-x-2 ${className}`}>
      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-sm">
          {name.charAt(0).toUpperCase()}
        </span>
      </div>
      <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {name}
      </h1>
    </div>
  );
};

export default LogoWithName;
