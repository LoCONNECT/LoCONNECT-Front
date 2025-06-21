const BizInfo = () => {
  return (
    <div className="StepTwo_wrap">
      <div className="StepOne_userInfo">
        <p className="SignUp_font">업체명</p>

        <div className="SignUp_inputDiv">
          <input
            className="SignUp_input"
            // type={showPassword ? "text" : "password"}
            placeholder="업체명을 작성해주세요."
            // {...passwordField}
          />

          {/* {showPwError && <p className="SignUp_error">{passwordMeta.error}</p>} */}
        </div>
      </div>
    </div>
  );
};

export default BizInfo;
