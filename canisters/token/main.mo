import Principal "mo:base/Principal";
import Text "mo:base/Text";
import HashMap "mo:base/HashMap";


actor Token{
    var owner: Principal = Principal.fromText("ftys7-iyo3k-m5mlc-7fwdz-doewh-ifbwj-eioyy-onisv-vf6s4-ngmeu-sae");
    var totalSupply: Nat = 1000000000;
    var symbol: Text = "MANGO";

    var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
    balances.put(owner, totalSupply);

    public query func balanceOf(who: Principal) :async Nat {

      let balance : Nat = switch(balances.get(who)) {
        case null 0;
        case (?result) result;
      };

      return balance;
    }
};