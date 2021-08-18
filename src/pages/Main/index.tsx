/*
 * @Author: Jwma
 * @Date: 2021-08-18 10:40:38
 * @LastEditors: Jwma
 * @LastEditTime: 2021-08-18 10:55:13
 * @FilePath: \MyUmiFrame\src\pages\Main\index.tsx
 */
import React, { Component } from 'react';
import styles from './style.less';

interface IMainProps {}
interface IMainState {}

class Main extends Component<IMainProps, IMainState> {
  render() {
    return (
      <div className={styles.main}>
        <h1>Home Page</h1>
      </div>
    );
  }
}
export default Main;
