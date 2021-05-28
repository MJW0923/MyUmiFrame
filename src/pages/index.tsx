import React from 'react';

import styles from './index.less';
import { Link } from 'umi';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Link to="/users/111">11111</Link>
      <br />
      <Link to="/users/222">222222</Link>
    </div>
  );
}
