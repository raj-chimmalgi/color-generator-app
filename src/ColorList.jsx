import { nanoid } from "nanoid";
import SingleColor from "./SingleColor.jsx";

const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, index) => (
        <SingleColor key={nanoid()} color={color} index={index} />
      ))}
    </section>
  );
};

export default ColorList;
