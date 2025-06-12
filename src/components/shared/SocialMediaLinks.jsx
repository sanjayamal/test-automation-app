import {
  Upload,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

const SocialMediaLinks = ({ className = "" }) => {
  const iconMap = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    linkedin: Linkedin,
    github: Github,
  };

  const defaultLinks = [
    {
      platform: "facebook",
      url: "https://www.facebook.com/profile.php?id=61572944656577",
    },
    // { platform: "twitter", url: "https://twitter.com" },
    // { platform: "instagram", url: "https://instagram.com" },
    // { platform: "linkedin", url: "https://linkedin.com" },
  ];

  return (
    <div className={`flex justify-center space-x-4 ${className}`}>
      {defaultLinks.map((link, index) => {
        const IconComponent = iconMap[link.platform] || Github;
        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors duration-200"
          >
            <IconComponent className="w-5 h-5 text-gray-600 hover:text-blue-600" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialMediaLinks;
