import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";

function Profile() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    checkUser();
  }, []);
  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    setUser(user);
  }
  if (!user) return null;
  return (
    <div className="has-text-centered">
      <Navbar />
      <div className="container pt-6">
        <h1 className="mt-6 is-size-3 has-text-weight-semibold">Profile</h1>
        <h3 className="mt-2">Username: {user.username}</h3>
        <h3 className="mt-2 mb-4">Email: {user.attributes.email}</h3>
        <div style={{ maxWidth: "200px", margin: "0 auto" }}>
          <AmplifySignOut />
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator(Profile);
