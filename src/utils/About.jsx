import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    // Load the Facebook SDK
    if (!window.FB) {
      const script = document.createElement("script");
      script.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="mx-auto max-w-7xl">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-relaxed">
        We're in the business of growing awesome humans.
      </h2>
    </div>
  );
};

export default About;
