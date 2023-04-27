import { ReactNode } from "react";
import Wrapper from "../assets/wrappers/StatItem";

const StatsItem = ({
  count,
  title,
  icon,
  color,
  bcg,
}: {
  count: number;
  title: string;
  icon: ReactNode;
  color: string;
  bcg: string;
}) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className="count">{count}</span>
        <span className="icon">{icon}</span>
      </header>
      <h5 className="title">{title}</h5>
    </Wrapper>
  );
};
export default StatsItem;
