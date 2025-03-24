
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Leaf, ArrowLeft } from "lucide-react";

const NotFound = () => {
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route"
    );
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cerber-green-pale/30 px-4">
      <div className="text-center max-w-md animate-fade-in">
        <div className="flex justify-center mb-6">
          <Leaf className="h-16 w-16 text-cerber-green-medium animate-leaf-sway" />
        </div>
        <h1 className="text-5xl font-bold mb-4 text-cerber-green-dark font-serif">404</h1>
        <p className="text-xl text-cerber-green-dark mb-8">
          Przepraszamy, ta strona nie istnieje lub została przeniesiona.
        </p>
        <Link 
          to="/" 
          className="cta-button inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Wróć na stronę główną
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
