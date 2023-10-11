import PortaModel from "../model/porta_model";
import styles from "../src/styles/Porta.module.css";
import Presente from "./Presente";

interface PortaProps {
  porta: PortaModel;
  onChange: (novaPorta: PortaModel) => void;
}

export default function Porta({ porta, onChange }: PortaProps) {
  const estiloSelecao =
    porta.selecionada && !porta.aberta ? styles.selecionada : "";

  const alternarSelecao = () => onChange(porta.alterarSelecao());

  const abrir = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onChange(porta.abrir());
  };

  function renderizarPorta() {
    return (
      <div className={styles.porta}>
        <div className={styles.numero}>{porta.numero}</div>
        <div className={styles.macaneta} onClick={abrir}></div>
      </div>
    );
  }

  return (
    <div className={styles.area} onClick={alternarSelecao}>
      <div className={`${styles.estrutura} ${estiloSelecao}`}>
        {porta.fechada ? (
          renderizarPorta()
        ) : porta.temPresente ? (
          <Presente />
        ) : (
          false
        )}
      </div>
      <div className={styles.chao}></div>
    </div>
  );
}
