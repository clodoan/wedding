import Image from "next/image";
import styles from "./HorizontalData.module.scss";

export default function HorizontalData({
  title,
  subtitle,
  //second line of text
  imagePath,
  //internal path in the public folder
  altText,
  //alternative text for images
  children,
  //add paragraphs, links, or whatever you want here
  orientation,
  //use 'left' if you need content on the left and image on the right, leave empty if opposite
}) {
  return (
    <div
      className={`${
        orientation === "left"
          ? styles.container
          : styles.container + " " + styles.inverted
      }`}
    >
      <div className={styles.content}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        {children}
      </div>
      <div className={styles.imageContainer}>
        <Image src={imagePath} alt={altText} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
