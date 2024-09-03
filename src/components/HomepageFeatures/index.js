import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Wiki',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: <></>,
    linkTo: '/docs/intro'
  },
  {
    title: 'Mark',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: <></>,
    linkTo: '/mark/2024'
  },
  {
    title: 'Blog',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: <></>,
    linkTo: '/blog'
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
          <h2>{title}</h2>
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
