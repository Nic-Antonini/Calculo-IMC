import { Level, calculateImc } from '../../helpers/imc';
import styles from './GridItem.module.css'
import upImage from '../../up.png';
import downImage from '../../down.png'

type Props = {
    item: Level
}

export const GridItem = ({item} : Props) => {
    return(
        <div className={styles.main} style={{backgroundColor: item.color}}>
           <div className={styles.gridIcon}>
            { item.icon === 'up'   && <img src={upImage}   alt="" width="30"/> }
            { item.icon === 'down' && <img src={downImage} alt="" width="30"/> }
           </div>

           <div className={styles.gridTitle}>{item.title} </div>
           <div className={styles.gridInfo}>
           <>
            IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
           </>

          </div>
          {item.yourImc&&
          <div className={styles.yourImc}> Seu IMC é: {item.yourImc.toFixed(2)} </div>
}
</div>
    )
}