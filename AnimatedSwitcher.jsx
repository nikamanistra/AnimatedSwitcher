import { useEffect, useState, useRef } from 'react';
import classes from './AnimatedSwitcher.module.css';

export const animatedSwitcherTypes = {
  SECONDARY: classes.secondarySwitcher,
  TABS: classes.tabsSwitcher,
  SWITCHER: classes.customSwitcher
};

export const AnimatedSwitcher = ({
  containerClass = '',
  switcherClass = '',
  switcherType = '',
  x = 0,
  y = 0
}) => {
  const switcher = useRef(null);
  const [left, setLeft] = useState(x);
  const [top, setTop] = useState(y);

  useEffect(() => {
    if (switcher.current) {
      const height = switcher.current.clientHeight;
      const width = switcher.current.clientWidth;
      setLeft(x - width / 2);
      setTop(y - height / 2);
    }
  }, [x, y]);

  return (
    <div className={`${classes.container} ${containerClass}`}>
      {[animatedSwitcherTypes.TABS, animatedSwitcherTypes.SWITCHER].includes(
        switcherType
      ) && (
        <div className={classes.tabsLineBox}>
          <div className={classes.tabsLine}></div>
        </div>
      )}
      <div
        style={{ left, top, display: x || y ? 'block' : 'none' }}
        className={`${classes.switcher} ${switcherClass} ${switcherType}`}
        ref={switcher}
      ></div>
    </div>
  );
};
