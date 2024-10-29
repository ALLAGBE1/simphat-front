import { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false); // false pour afficher connexion d'abord

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        {isSignUp ? (
          <>
            <SignUp />
            <p className="text-center text-gray-600 mt-4">
              Vous avez déjà un compte ?{" "}
              <button
                onClick={toggleAuthMode}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                Connectez-vous ici
              </button>
            </p>
          </>
        ) : (
          <>
            <Login />
            <p className="text-center text-gray-600 mt-4">
              Vous n&apos;avez pas de compte ?{" "}
              <button
                onClick={toggleAuthMode}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                Inscrivez-vous ici
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;



//////////

// import { useState } from "react";
// import SignUp from "./SignUp";
// import Login from "./Login";

// const Auth = () => {
//   const [isSignUp, setIsSignUp] = useState(true);

//   const toggleAuthMode = () => {
//     setIsSignUp(!isSignUp);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
//         {isSignUp ? (
//           <>
//             <SignUp />
//             <p className="text-center text-gray-600 mt-4">
//               Vous avez déjà un compte ?{" "}
//               <button
//                 onClick={toggleAuthMode}
//                 className="text-blue-500 hover:underline focus:outline-none"
//               >
//                 Connectez-vous ici
//               </button>
//             </p>
//           </>
//         ) : (
//           <>
//             <Login />
//             <p className="text-center text-gray-600 mt-4">
//               Vous n&apos;avez pas de compte ?{" "}
//               <button
//                 onClick={toggleAuthMode}
//                 className="text-blue-500 hover:underline focus:outline-none"
//               >
//                 Inscrivez-vous ici
//               </button>
//             </p>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Auth;
