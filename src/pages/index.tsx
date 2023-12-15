import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import TopicsSection from '../components/home/TopicsSection';
import HomeHeader from "../components/home/HomeHero";
import AboutSite from "../components/home/AboutSite";

import styles from './index.module.css';

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
