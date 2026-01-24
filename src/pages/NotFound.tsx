import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <figure>
          <svg
            width="24rem"
            height="24rem"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M152.808 149.507C152.808 139.796 152.062 135.108 153.086 124"
              stroke="#E67300"
              stroke-opacity="0.9"
              stroke-width="16"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M229.932 149.507C229.691 140.813 230.102 132.417 230.502 124"
              stroke="#E67300"
              stroke-opacity="0.9"
              stroke-width="16"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M130.458 261.147C140.221 275.146 160.452 277.082 190.839 274.2C234.073 270.099 298.044 266.721 258.47 231.607C228.328 204.861 146.699 204.861 129 239.379"
              stroke="#E67300"
              stroke-opacity="0.9"
              stroke-width="16"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M140.902 246.193C181.011 245.599 221.381 244.979 261.638 244.979"
              stroke="#E67300"
              stroke-opacity="0.9"
              stroke-width="16"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M227.131 224.329C227.451 237.74 227.027 250.5 226.32 263.441"
              stroke="#E67300"
              stroke-opacity="0.9"
              stroke-width="16"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M195.277 226.03C195.155 238.867 194.283 250.905 193.658 263.441"
              stroke="#E67300"
              stroke-opacity="0.9"
              stroke-width="16"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M162.565 224.329C162.493 237.377 162.145 250.491 161.754 263.441"
              stroke="#E67300"
              stroke-opacity="0.9"
              stroke-width="16"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </figure>
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">
          Oops! Page not found
        </p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
