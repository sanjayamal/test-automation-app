const Logo = ({ alt = "Logo", className = "", height=36 }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img src="/logo.jpeg" alt={alt} className={`h-${height} w-auto object-contain`}/>
    </div>
  );
};

export default Logo;
