import Work from "./Work";

import { ParallaxProvider, useRef, target, useParallax, styles } from 'react-scroll-parallax';

function WorkScroll() {
    const target = useRef(null);
  
    const mid = useParallax({
      speed: 50,
      targetElement: target.current,
    });
    const close = useParallax({
      speed: 100,
      targetElement: target.current,
    });
  
    const midExtend = 50 * 5 * -1;
    const closeExtend = 100 * 5 * -1;
  
    return (
      <div className={styles.root} ref={target}>
       <Work/>
      </div>
    );
  }

  export default WorkScroll