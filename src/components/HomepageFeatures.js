import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: 'ZERO code',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Build your site without writing a single line of code. Our platform's intuitive interface makes it easy for anyone to create professional websites effortlessly.
      </>
    ),
  },
  {
    title: 'ZERO dev/dev-ops',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        No development or DevOps required. We handle updates, deployment, and infrastructure so you can focus on your content.
      </>
    ),
  },
  {
    title: 'ZERO app upgrades',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Enjoy automatic updates with no need for manual upgrades. Your site stays secure and up-to-date effortlessly.
      </>
    ),
  },
];


function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
