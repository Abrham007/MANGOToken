import React, { useState } from "react";
import { AuthClient } from "@dfinity/auth-client"
import { canisterId, createActor, token } from "../../src/declarations/token/index.js"

function Faucet(props) {

  const [isDisabled, setDisable] = useState(false);
  const [buttonText, setText] = useState("Gimme gimme");

  async function handleClick(event) {
    setDisable(true);

    // when online to the network other wise 403 error

    // const authClient = await AuthClient.create();
    // const identity = await authClient.getIdentity();

    // const authenticatedCanister = createActor(canisterId, {
    //   agentOptions: {
    //     identity,
    //   }
    // })

    // const result = await authenticatedCanister.payOut();

    // for local development
    const result = await token.payOut();
    setText(result);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free MANGO tokens here! Claim 10,000 MANGO coins to your {props.userPrincipal} Account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
