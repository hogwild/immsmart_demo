import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";


const BACKEND_ACCESS_TOKEN_LIFETIME = 45*60;
const BACKEND_REFRESH_TOKEN_LIFETIME = 6*24*60*60;

const getCurrentEpochTime = () => {
    return Math.floor(new Date().getTime() / 1000);
};


const SIGN_IN_HANDLERS = {
    "credentials": async (user, account, profile, email, credentials) => {
        return true;
    }
};

const SIGN_IN_PROVIDERS = Object.keys(SIGN_IN_HANDLERS);

export const authOptions = {
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: BACKEND_REFRESH_TOKEN_LIFETIME,
  },
  providers: [
    CredentialsProvider({
    //   id: "login",
      credentials: {
        email: {label: "Email", type: "email"},
        password: {label: "Password", type: "password"}
      },
      // The data returned from this function is passed forward as the
      // `user` variable to the signIn() and jwt() callback
      async authorize(credentials, req) {
        try {
          const response = await axios({
            url: process.env.NEXTAUTH_BACKEND_URL + "user/login/", //note: in immsmart_backend_ver2, it is users/login/ 
            method: "post",
            data: credentials,
          });
          const data = response.data;
          console.log("data", data);
          if (data) return data;
        } catch (error) {
          console.error(error);
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn:'/login',
    //signOut:'/api/auth/signout', //it is the rest api of NextAuth; when call signOut(), this page will be visited and log out the user and back to the current page automatically.
  },
  callbacks: {
    async signIn({user, account, profile, email, credentials}) {
        // console.log(user, profile);
      if (!SIGN_IN_PROVIDERS.includes(account.provider)) return false;

      // try {
      //   const response = await axios({
      //     url: process.env.NEXTAUTH_BACKEND_URL + `users/${user.user.pk}`,
      //     method: "get",
      //     headers: {
      //           "Authorization": 'Bearer '+user.access
      //       },
      //   });
      //   const data = response.data;
      //   // console.log("data", data);
      //   if (data) return data;
      // } catch (error) {
      //   console.error(error);
      // }

      return SIGN_IN_HANDLERS[account.provider](
        user, account, profile, email, credentials
      );
    },
    async jwt({user, token, account}) {
      // If `user` and `account` are set that means it is a login event
      // The user is the data returned in signIn
      if (user && account) {
        let backendResponse = account.provider === "credentials" ? user : account.meta;
        token["user"] = backendResponse.user;
        token["profile"] = backendResponse.profile; //it is sent by the CustomLoginView in django/user/views.py
        token["access_token"] = backendResponse.access;
        token["refresh_token"] = backendResponse.refresh;
        token["ref"] = getCurrentEpochTime() + BACKEND_ACCESS_TOKEN_LIFETIME;
        // console.log("backendResponse", backendResponse);
        return token;
      }
      // Refresh the backend token if necessary
      if (getCurrentEpochTime() > token["ref"]) {
        const response = await axios({
          method: "post",
          url: process.env.NEXTAUTH_BACKEND_URL + "users/token/refresh/",
          data: {
            refresh: token["refresh_token"],
          },
        });
        token["access_token"] = response.data.access;
        token["refresh_token"] = response.data.refresh;
        token["ref"] = getCurrentEpochTime() + BACKEND_ACCESS_TOKEN_LIFETIME;
      }
      return token;
    },
    // Since we're using Django as the backend we have to pass the JWT
    // token to the client instead of the `session`.
    async session({ token }) {
        // console.log("token in session", token)
        // session.user.id = token.user.id
      return token
    },
  }
};

export default NextAuth(authOptions);