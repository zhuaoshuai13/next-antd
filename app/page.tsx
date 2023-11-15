import Image from 'next/image';
import styles from './page.module.css';
import { Button, ConfigProvider } from 'antd';
import theme from '@/theme/themeConfig';

export default function Home() {
  return (
    <main className={styles.main}>
      <ConfigProvider theme={theme}>
        <div className='App'>
          <Button type='primary'>Button</Button>
        </div>
      </ConfigProvider>
    </main>
  );
}
