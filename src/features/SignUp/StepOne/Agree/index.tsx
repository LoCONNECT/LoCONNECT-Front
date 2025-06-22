import Image from "next/image";

interface AgreeProps {
  oneAgree: boolean;
  twoAgree: boolean;
  setOneAgree: React.Dispatch<React.SetStateAction<boolean>>;
  setTwoAgree: React.Dispatch<React.SetStateAction<boolean>>;
}

const Agree = ({
  oneAgree,
  twoAgree,
  setOneAgree,
  setTwoAgree,
}: AgreeProps) => {
  return (
    <div className="StepOne_agree">
      <div className="StepOne_agreeDiv">
        <div
          className="StepOne_icon"
          onClick={() => {
            if (oneAgree && twoAgree) {
              setOneAgree(false);
              setTwoAgree(false);
            } else {
              setOneAgree(true);
              setTwoAgree(true);
            }
          }}
        >
          <Image
            src={
              oneAgree && twoAgree
                ? "/icon/checkBox_active.png"
                : "/icon/checkBox.png"
            }
            alt="checkBox"
            fill
          />
        </div>
        <p>전체동의</p>
      </div>

      <div className="StepOne_line"></div>

      <div className="StepOne_agreeDiv">
        <div className="StepOne_icon" onClick={() => setOneAgree(!oneAgree)}>
          <Image
            src={oneAgree ? "/icon/checkBox_active.png" : "/icon/checkBox.png"}
            alt="checkBox"
            fill
          />
        </div>
        <p>(필수) 서비스 이용약관 동의</p>
      </div>

      <div className="StepOne_agreeDiv">
        <div className="StepOne_icon" onClick={() => setTwoAgree(!twoAgree)}>
          <Image
            src={twoAgree ? "/icon/checkBox_active.png" : "/icon/checkBox.png"}
            alt="checkBox"
            fill
          />
        </div>
        <p>(선택) 광고성 정보 수신 동의 (SNS/MMS)</p>
      </div>
    </div>
  );
};

export default Agree;
