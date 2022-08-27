import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [error, setError] = useState(false);
  const [name, setName] = useState([]);
  const k = undefined;

  useEffect(() => {
    axios
      .get("https://api.opendota.com/api/heroes")
      .then((res) => {
        console.log(res);
        const data = res.data;
        setName(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div className={styles.container}>
      {error
        ? k.map((n, k) => <h1 key={k}>{n}</h1>)
        : name.map((n, k) => {
            return <h1 key={k}>{n.name}</h1>;
          })}

      <button onClick={() => setError(false)}>dota</button>

      <button onClick={() => setError(true)}>undefined</button>
    </div>
  );
}
