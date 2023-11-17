import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import connectDB from "./../../../utils/connectDB";
import User from "./../../../models/User";
import { verifyPassword } from "../../../utils/auth";

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

      async authorize(credentials, req) {
        const { email, password } = credentials;

        try {
          await connectDB();
        } catch (error) {
          throw new Error("Error in connecting to DB!");
        }

        if (!email || !password) {
          throw new Error("Ivalid Data!");
        }

        const user = await User.findOne({ email: email });
        if (!user) throw new Error("User does'nt exist!");

        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error("Username or password is incorrect!");

        return { email };
      },
    }),
  ],
  //   pages:{
  //       signIn:"/signin"
  //   }
};

export default NextAuth(authOptions);
