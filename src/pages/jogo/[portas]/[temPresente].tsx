import { useEffect, useState } from "react";
import Porta from "../../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../../functions/portas";

import styles from "../../../styles/Jogo.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import PortaModel from "../../../../model/porta_model";

export default function Jogo() {
  const router = useRouter();

  const [portas, setPortas] = useState<PortaModel[]>([]);
  const [valido, setValido] = useState(false);

  useEffect(() => {
    const portas = +router.query?.portas!;
    const temPresente = +router.query?.temPresente!;
    const qtdePortasValidas = portas >= 3 && portas <= 100;
    const temPresenteValida = temPresente >= 1 && temPresente <= portas;
    setValido(qtdePortasValidas && temPresenteValida);
  }, [portas, router.query?.portas, router.query?.temPresente]);

  useEffect(() => {
    const portas = +router.query?.portas!;
    const temPresente = +router.query?.temPresente!;

    setPortas(criarPortas(portas, temPresente));
  }, [router?.query]);

  function redenrizarPortas() {
    return portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          porta={porta}
          onChange={(novaporta) =>
            setPortas(atualizarPortas(portas, novaporta))
          }
        />
      );
    });
  }
  return (
    <div className={styles.jogo}>
      <div className={styles.portas}>
        {valido ? redenrizarPortas() : <h1>Valores inválidos</h1>}
      </div>
      <div className={styles.botoes}>
        <Link href={"/"} passHref>
          <button>Reiniciar jogo </button>
        </Link>
      </div>
    </div>
  );
}
