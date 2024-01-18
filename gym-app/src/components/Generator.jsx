import Header from "./Header";
import SectionWrapper from "./SectionWrapper";

const Generator = () => {
  return (
    <div className="min-h-screen">
      <SectionWrapper
        header={"generate your workout"}
        title={["It's", "Huge", "o'clock"]}
      >
        <Header
          index={"01"}
          title={"Pick your poison"}
          description={"Select the workout you wish to endure"}
        />
      </SectionWrapper>
    </div>
  );
};
export default Generator;
