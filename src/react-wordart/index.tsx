import classNames from "clsx";
import * as styles from "./styles.scss";

const themes = {
  rainbow: "rainbow",
  blues: "blues",
  superhero: "superhero",
  radial: "radial",
  tilt: "tilt",
  purple: "purple",
  horizon: "horizon",
  italicOutline: "italicOutline",
  slate: "slate",
};

const cx = classNames.bind(styles);

interface WordArtProps {
  text: string;
  theme?: keyof typeof themes;
  fontSize?: number;
}

const WordArt = ({ text, theme = "rainbow", fontSize = 50 }: WordArtProps) => {
  const th = themes[theme];
  const className = cx("wordart", th);

  return (
    <div className={className} style={{ fontSize }}>
      <span className={cx("text")}>{text}</span>
    </div>
  );
};

WordArt.themes = Object.keys(themes);

export default WordArt;
