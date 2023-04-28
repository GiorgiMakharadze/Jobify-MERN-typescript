import { useAppContext } from "../context/appContext";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";

const PageBtnContainer = () => {
  const { numOfPages, page } = useAppContext();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  console.log(pages);

  const nextPage = () => {
    console.log("nextPage");
  };
  const prevPage = () => {
    console.log("prevPage");
  };

  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <button className="next-btn" onClick={nextPage}>
        <HiChevronDoubleRight />
        next
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <button
              type="button"
              className={pageNumber === page ? "pageBtn active" : "pageBtn"}
              key={pageNumber}
              onClick={() => console.log("change")}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default PageBtnContainer;
