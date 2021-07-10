export const LeftTitleProject = ({ gitSrc, title, subtitle, imgSrc }) => {
  return (
    <div
      style={{
        height: "512px",
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "28px",
        marginLeft: "5%",
      }}
    >
      <a href={gitSrc} target="_blank" rel="noreferrer">
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <h2 style={{ color: "white" }}>{title}</h2>
            <h3>{subtitle}</h3>
          </div>
          <img src={imgSrc} alt="" />
        </div>
      </a>
    </div>
  );
};
export const RightTitleProject = ({ gitSrc, title, subtitle, imgSrc }) => {
  return (
    <div
      style={{
        height: "512px",
        display: "flex",
        justifyContent: "flex-start",
        marginBottom: "28px",
      }}
    >
      <a href={gitSrc} target="_blank" rel="noreferrer">
        <div style={{ display: "flex" }}>
          <img src={imgSrc} alt="" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <h2 style={{ color: "white" }}>{title}</h2>
            <h3>{subtitle}</h3>
          </div>
        </div>
      </a>
    </div>
  );
};
