import React, { useEffect } from 'react';
import clsx from 'clsx';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import ZhanXiFuChangLiu from '../../static/img/zxfcl.png'
import YunWoYiShangLeng from '../../static/img/ywysl.png'
const taglines = [
  '含哺而熙，鼓腹而游。',
  '一个人应该有能力换尿布、策划侵略、杀猪、给轮船掌舵、设计建筑物、写十四行诗、平衡收支、造墙、接骨、安慰临终之人、写菜单、发布命令、合作、独立工作、解方程、分析新问题、施肥、写电脑程序、做可口的饭菜、有效地战斗、英勇地死去。——罗伯特·海因莱因',
]

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{taglines[Math.floor(Math.random() * taglines.length)]}</p>
        <div className={styles.buttons}>
          {/* <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link> */}
        </div>
      </div>

      <img src={ZhanXiFuChangLiu} alt="展席俯長流" className={styles.zxfcl} />
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="全栈工程师｜主前端｜区块链深耕｜让可能性发生">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <img src={YunWoYiShangLeng} alt="雲臥衣裳冷" className={styles.ywysl} />
      </main>
    </Layout>
  );
}
