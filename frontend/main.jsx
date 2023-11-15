import { createRoot } from 'react-dom/client';
import React from 'react'
import App from "./components/App";
import { AuthClient } from "@dfinity/auth-client"

const init = async () => { 


// for locla dev
  const domNode = document.getElementById('root');
  const root = createRoot(domNode);
  root.render(<App loggedInPrincipal={"2vxsx-fae"} />);

  // for online dev

  // const authClient = await AuthClient.create();

  // if (await authClient.isAuthenticated()) {
  //   handleAuthenticated(authClient);
  // }else {
  //   await authClient.login({
  //   identityProvider: "https://identity.ic0.app/#authorize",
  //   onSuccess: () => {
  //     handleAuthenticated(authClient);
  //   }
  // })
  // }

}

// async function handleAuthenticated(authClient) {
//   const identity = await authClient.getIdentity();
//   const userPrincipal = await identity._principal.toString();

//   const domNode = document.getElementById('root');
//   const root = createRoot(domNode);
//   root.render(<App loggedInPrincipal={userPrincipal} />);

// }

init();


