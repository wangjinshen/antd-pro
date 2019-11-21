
import React, { useState } from 'react';
import styles from './index.scss';
import { connect } from 'dva';
import AlertSwiper from '@/components/AlertSwiper/AlertSwiper';
// AlertSwiper
export default connect(({ img }: any) => {
  return img
})((props: any) => {
  let currentUser = props.currentUser
  return (
    <div className={styles.normal}>
      {
        currentUser.length > 0
        && <AlertSwiper imgAll={currentUser} >
          {
            currentUser.map((item: any, i: number) => {
              return (
                <img key={i} className={styles.itemImgimg} src={item.imgUrl}></img>
              )
            })
          }
        </AlertSwiper>
      }
    </div>
  );
}
) 