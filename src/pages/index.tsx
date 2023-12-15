import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`Personal Blog ${siteConfig.title}`}>
    <div style={{ textAlign: "center", position: 'relative', minHeight: '94vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1>Скорее всего вы тут оказались случайно!</h1>
      <a href='/blog' style={{ color: 'blue' }}>Перейдите в блог по этой ссылке</a>
      <div style={{ position: 'relative', minHeight: '80vh' }}></div>
      <p style={{ bottom: 0 }}>Тут могла бы быть ваша реклама, но я не продаю места</p>
    </div>
    </Layout>
  );
}
