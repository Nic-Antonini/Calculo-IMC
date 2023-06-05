import { useState } from 'react'
import styles from './App.module.css'
import poweredImage from './assets/powered.png'
import {levels, calculateImc} from './assets/helpers/imc'

const App = () =>{

    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    const handleCalc = () =>{
      if (altura && peso){

      }
      else{
          alert('Informe a altura e o peso')
      }
    }

  return(
    <div className={styles.main}>
      <header>
          <div className={styles.headerContainer}>
            <img src={poweredImage} alt ="" width={150}/>
          </div>
      </header>
        <div className={styles.container}>
          
          <div className={styles.leftSide}>
            <h1>CÁLCULO DO IMC</h1>

            <p>O IMC (Índice de Massa Corporal) é reconhecido pela OMS (Organização Mundial da Saúde)
               como um padrão internacional que avalia se as pessoas, entre 20 e 59 anos,
               estão com peso ideal ou em excesso, em relação a sua altura.</p>
               <br/>

            <input
             type="number"
             placeholder="Informe a altura. Ex. 1.5 (em metro)"
             value={altura > 0 ? altura: ''}
             onChange={t => setAltura(parseFloat(t.target.value) )}
            />

            <input
             type="number"
             placeholder="Informe o peso. Ex. 60.5 (em kilo)"
             value={peso > 0 ? peso: ''}
             onChange={t => setPeso(parseFloat(t.target.value) )}
            />

            <button onClick={handleCalc}>Calcular</button>
          </div>

          <div className={styles.rightSide}>
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <div key={key}>
                  {item.title}
                  
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default App;