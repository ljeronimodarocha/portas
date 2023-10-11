import { Component } from "react";
import styles from "../src/styles/Cartao.module.css";

export default function Cartao(props: { bgcolor?: string; children?: any }) {
  return (
    <div
      className={styles.cartao}
      style={{ backgroundColor: props.bgcolor ?? "#fff" }}
    >
      {props.children}
    </div>
  );
}
