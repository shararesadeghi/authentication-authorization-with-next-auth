import NextAuth from "next-auth";
import { CredentialsProvider } from "next-auth/providers";

const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
    //   name: "credentials",
    //   credentails: {
    //     email: { label: "Email", type: "text", placeholder: "Enter your email" },
    //     password: {
    //       label: "Password",
    //       type: "password",
    //       placeholder: "Enter your password",
    //     },
    //   },

      async authorize(credentials,req){
          return {name:"sheri"}
      }
    }),
  ],
//   pages:{
//       signIn:"/signin"
//   }
};

export default NextAuth(authOptions);
