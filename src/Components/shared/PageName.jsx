const PageName = ({ page }) => {
  return (
    <h4 className="text-base text-tertiary font-semibold mb-8">
      <span className="font-light text-dimWhite mr-3">Home</span> .
      <span className="font-light text-[#ff5723] ml-3">{page}</span>
    </h4>
  );
};

export default PageName;
