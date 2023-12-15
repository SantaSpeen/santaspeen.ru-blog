import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`Personal Blog ${siteConfig.title}`}>
      <div style={{textAlign: "center"}}>
        <h1>Скорее всего вы тут оказались случайно!</h1>
        <a href='/blog' style={{color: 'blue'}}>Перейдите в блог по этой ссылке</a>
      </div>
    </Layout>
  );
}
