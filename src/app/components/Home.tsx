





import styles from "./Home.module.css";
import Today from "./Today";
import CategoriesSection from "./CategoriesSection";
import Month from "./Month";
import MusicBanner from "./MusicBanner";
import Product from "./Product";
import Featured from "./Featured";

import Heros from "./Heros";


export default function Home() {
  return (
    <>
     <div className={styles.headerWrapper}>
      <div className={styles.line}></div> 
       
        <Heros/>
      
      
       </div>
        <div>
          <Today />
        </div>
        <div>
          <CategoriesSection/>
        </div>
        <div>
          <Month/>
        </div>
        <div>
          <MusicBanner/>
        </div>
        <div>
          <Product/>
        </div>
        <div>
          <Featured/>
        </div>
        
     
          
             
          
        
      
      
    </>   
        
        
      
  );
}
