import React, { Component } from 'react';
import styles from './style.less';
import JwLoading from '@/components/JwLoading';
import { Link } from 'umi';

interface IProps {}
interface IState {}

class List extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    document.title = '';
  }

  render() {
    const { match } = this.props;
    console.log('match ==', match);
    return (
      <div className={styles.listmain}>
        test是听说
        <br />
        <Link to="/home">list</Link>
      </div>
    );
  }
}
export default List;
