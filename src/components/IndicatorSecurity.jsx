import { indicatorSecurityText } from "../constants";

export const IndicatorSecurity = ({ security }) => {

  return (
    <div className="indicator-security">
      <div className={`indicator-security-line ${security}`}>
        <div className={`indicator-security-line-item ${security}`}/>
      </div>
      <p className={`indicator-security-text ${security}`}>{security.length ? indicatorSecurityText[security] : "Waiting"}</p>
    </div>
  )
}