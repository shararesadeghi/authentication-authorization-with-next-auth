import { signOut } from "next-auth/react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {

  const logoutHandler = () =>{
    signOut();
  }
  return (
    <div className={styles.container}>
      <h1>Next-Auth</h1>
      <button>
        <Link href="/dashboard">Dashboard</Link>
      </button>
      <button>
        <Link href="/signup">Register</Link>
      </button>
      <button>
        <Link href="/signin">Login</Link>
      </button>
      <button onClick={logoutHandler}>Log Out</button>
    </div>
  );
}
