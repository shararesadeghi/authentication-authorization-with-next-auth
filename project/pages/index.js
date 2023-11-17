import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { status } = useSession();

  const logoutHandler = () => {
    signOut();
  };
  return (
    <div className={styles.container}>
      <h1>Next-Auth</h1>
      {status === "authenticated" ? (
        <>
          <button>
            <Link href="/dashboard">Dashboard</Link>
          </button>
          <button onClick={logoutHandler}>Log Out</button>
        </>
      ) : null}
      {status === "unauthenticated" ? (
        <>
          <button>
            <Link href="/signup">Register</Link>
          </button>
          <button>
            <Link href="/signin">Login</Link>
          </button>
        </>
      ) : null}
    </div>
  );
}
