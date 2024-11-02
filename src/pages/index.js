import React, { useState } from 'react';
import clsx from 'clsx';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import ZhanXiFuChangLiu from '../../static/img/zxfcl.png';
import YunWoYiShangLeng from '../../static/img/ywysl.png';

const taglines = [
  '在战争中学习战争',
  '恐惧吞蚀灵魂',
  '聪明意味着把事情想清楚，愚蠢意味着直接给出结论而逃避思考。',
  '你不能搞混两样东西，一是你终将胜利的信念，这是你最输不起的；二是训练自己直面残酷现实，无论现实多残酷。',
  '一个人应该有能力换尿布、策划侵略、杀猪、给轮船掌舵、设计建筑物、写十四行诗、平衡收支、造墙、接骨、安慰临终之人、写菜单、发布命令、合作、独立工作、解方程、分析新问题、施肥、写电脑程序、做可口的饭菜、有效地战斗、英勇地死去。',
]

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [showTagline, setShowTagline] = useState(0);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>
          “{taglines[showTagline]}”
        </p>
        <div className={styles.buttons}>
          <button onClick={() => {
            setShowTagline(index => index >= taglines.length - 1 ? 0 : index + 1);
          }}>Next</button>
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
      title={`Welcome`}
      description="在战争中学习战争">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <img src={YunWoYiShangLeng} alt="雲臥衣裳冷" className={styles.ywysl} />
      </main>
    </Layout>
  );
}
