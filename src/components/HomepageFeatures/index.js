import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Builder Pattern',
    Svg: require('@site/static/img/builder-pattern.svg').default,
    description: (
      <>
        Spring HTML Generator leverages the Builder pattern to construct HTML pages, 
        providing a clean and intuitive way to generate dynamic HTML content programmatically.
      </>
    ),
  },
  {
    title: 'Lightweight',
    Svg: require('@site/static/img/light-weight.svg').default,
    description: (
      <>
        This application is designed to be minimalistic and lightweight, ensuring that it doesn't introduce unnecessary complexity to your project.
      </>
    ),
  },
  {
    title: 'Dependency-Free',
    Svg: require('@site/static/img/dependency-free.svg').default,
    description: (
      <>
        You won't need to manage any external dependencies when using Spring HTML Generator. 
        It relies solely on Java, making it easy to integrate into your existing Java projects.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
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
