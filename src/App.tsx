import { useState } from "react";
import styles from "./App.module.css";
import logo from "./assets/powered.png";
import { GridItem } from "./components/GridItem";

import { levels, calculateImc } from "./helpers/imc";

const App = () => {
  const [heightField, setheightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleCalculatorButton = () => {
    if (heightField && weightField) {
    } else {
      alert("Please select");
    }
  };

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={logo} alt="Logo IMC" width={150} />
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>
            IMC é a sigla para índice de Massa Corpórea, parâmetro adotado pela
            Orgamização mundial de Saúde para calcular o peso idela de casa
            pessoa.
          </p>

          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.6 (em metros)"
            value={heightField > 0 ? heightField : ""}
            onChange={(e) => setheightField(parseFloat(e.target.value))}
          />

          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 75.3 (em kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculatorButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.grid}>
            {levels.map((item, key) => (
              <GridItem key={key} item={item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
