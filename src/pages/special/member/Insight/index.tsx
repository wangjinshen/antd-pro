import React, { useState, useEffect } from 'react';

import styles from './index.scss';
let arr = [1, 2, 3, 4, 5];

export default function() {
  const [dataArr, setdataArr] = useState(arr);
  useEffect(() => {
    console.log(dataArr);
  });
  let onClickItem = (i: number, dataArr: Array<any>) => {
    let arr = [...dataArr];
    arr.splice(i, 1);
    arr.push(dataArr[i]);
    setdataArr(arr);
  };
  return (
    <div className={styles.normal}>
      <ul className={styles.List}>
        {dataArr.map((item, i) => {
          return (
            <li
              key={i}
              onClick={e => {
                e.stopPropagation();
                onClickItem(i, dataArr);
              }}
              className={styles.li_itme}
              style={{
                top: '' + (i + 1) * 20 + 'px',
                right: '' + (i + 1) * 20 + 'px',
                zIndex: i,
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
