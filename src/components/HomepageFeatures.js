import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "ZERO code",
    Img: require("../../static/img/zero_code.jpg").default,
    description: (
      <>
        Build your site without writing a single line of code. Our platform's
        intuitive interface makes it easy for anyone to create professional
        websites effortlessly.
      </>
    ),
  },
  {
    title: "ZERO dev/dev-ops",
    Img: require("../../static/img/zero_devops.jpg").default,
    description: (
      <>
        No development or DevOps required. We handle updates, deployment, and
        infrastructure so you can focus on your content.
      </>
    ),
  },
  {
    title: "ZERO app upgrades",
    Img: require("../../static/img/zero_updates.jpg").default,
    description: (
      <>
        Enjoy automatic updates with no need for manual upgrades. Your site
        stays secure and up-to-date effortlessly.
      </>
    ),
  },
];

function Feature({ Img, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={Img} className={styles.featureImg} alt={title} />{" "}
        {/* Use img tag for all */}
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
