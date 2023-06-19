import {Level, calculateImc} from '../../helpers/imc'
import styles from '../GridItem/GridItem.module.css' 
import upImage from '../../up.png'
import downImage from '../../down.png'

type Props ={ 
   item: Level
}


export const GridItem = ({item} : Props) => {
 return(
    <div className={styles.main} style={{backgroundColor: item.color}}>
      <div className={styles.gridIcon}>
         { item.icon === 'up' && <img src={upImage} alt="" width="80"/>}
         { item.icon === 'down' && <img src={downImage} alt="" width="80"/>}
         
      </div>
    </div>
 )
}