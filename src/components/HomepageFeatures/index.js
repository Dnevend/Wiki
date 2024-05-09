import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Wiki',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        沉淀日常的技术和知识。
      </>
    ),
    linkTo: '/docs/intro'
  },
  {
    title: 'Blog',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        一些过往的记录和闲言碎语加上一些技术的输出。
      </>
    ),
    linkTo: '/blog'
  },
  {
    title: 'Weekly',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        每周读到的有意思的文章和内容.
      </>
    ),
    linkTo: '/docs/weekly/2024'
  },
];

function Feature({ Svg, title, description, linkTo }) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={linkTo}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
