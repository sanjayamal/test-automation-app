const Logo = ({ alt = "Logo", className = ""}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src="/logo.jpeg"
        alt={alt}
        className={`h-36 w-auto object-contain`}
      />
    </div>
  );
};

export default Logo;
