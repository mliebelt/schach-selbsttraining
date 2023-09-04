import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Methodik',
    link: 'docs/onlinetraining',
    Svg: require('@site/static/img/chess-buddies.svg').default,
    description: (
      <>
        Worauf muss ein Trainer achten, wenn der Schüler ein Selbsttraining betreiben möchte.
      </>
    ),
  },
  {
    title: 'Online Hilfsmittel',
      link: 'docs/schachonline',
    Svg: require('@site/static/img/tools-svgrepo-com.svg').default,
    description: (
      <>
        Welche Hilfsmittel (Trainingswerkzeuge, Websites, ...) stehen zur Verfügung.
      </>
    ),
  },
  {
    title: 'Was es sonst so gibt',
      link: 'docs/ressourcen',
    Svg: require('@site/static/img/Pictogrammers-Material-Clouds.svg').default,
    description: (
      <>
        Und was findet man zum Schach online, das beim Training (oder auch den Trainer selbst) unterstützt.
      </>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
          <h3><a href={link}>{title}</a></h3>
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
