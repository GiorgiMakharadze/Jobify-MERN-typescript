import Wrapper from "../assets/wrappers/JobInfo";
import { ReactNode } from "react";

const JobInfo = ({ icon, text }: { icon: ReactNode; text: string }) => {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </Wrapper>
  );
};
export default JobInfo;
