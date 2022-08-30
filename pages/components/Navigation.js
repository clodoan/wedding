import Link from "next/link";
import Button from "./Button";
import styles from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <div className={styles.navigationBounds}>
      <div className={styles.leftLinks}>
        <Link href="/story.js">
          <a>Our story</a>
        </Link>
        <Link href="/travel-stay.js">
          <a>Travel & Stay</a>
        </Link>
        <Link href="/registry.js">
          <a>Registry</a>
        </Link>
      </div>
      <h3>S&A 10.14.20</h3>
      <div className={styles.rightLinks}>
        <Button> RSVP </Button>
      </div>
    </div>
  );
}
