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
        沉淀日常的技术和知识. 不免于模仿, 但总是在消化后才成文章.
      </>
    ),
    linkTo: '/docs/intro'
  },
  {
    title: 'Blog',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        一些过往的记录和闲言碎语加上一些技术的输出. 往日害怕于思想和文字水平的不成熟, 迟迟不肯动笔,
        想来, 这是每个阶段真实的自己, 用不着逃避, 些许时日以后, 再回看当时的想法, 或许会有不同的感受.
      </>
    ),
    linkTo: '/blog'
  },
  {
    title: 'About',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        这里可以认识一个具体的我.
      </>
    ),
    linkTo: '/about'
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
