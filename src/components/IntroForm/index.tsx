import { useState, useEffect } from "react";
import { Modal, Input, Button, message, Radio, Select, Switch, Upload } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import type { UploadFile, UploadProps } from "antd";
import axiosInstance from "@/lib/axios";

interface IntroFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  userRole?: string;
}

const IntroForm = ({ isOpen, onClose, onSuccess, userRole }: IntroFormProps) => {
  const [introduction, setIntroduction] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [loading, setLoading] = useState(false);
  
  // AI 생성 관련 상태
  const [useAI, setUseAI] = useState(false);
  const [tone, setTone] = useState("friendly");
  const [keywords, setKeywords] = useState("");
  
  // 가게 사장용 필드
  const [representativeMenus, setRepresentativeMenus] = useState("");
  const [atmosphere, setAtmosphere] = useState("");
  const [concept, setConcept] = useState("");
  
  // 방송국용 필드
  const [targetAudience, setTargetAudience] = useState("");
  const [broadcastFeatures, setBroadcastFeatures] = useState("");
  
  // 인플루언서용 필드
  const [subscriberCount, setSubscriberCount] = useState("");
  const [contentType, setContentType] = useState("");

  const handleSubmit = async () => {
    if (!useAI && !introduction.trim()) {
      message.error("소개글을 입력하거나 AI 생성을 선택해주세요.");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      
      // 기본 데이터 추가
      if (!useAI && introduction.trim()) {
        formData.append("introduction", introduction.trim());
      }
      formData.append("useAI", useAI.toString());
      
      if (useAI) {
        if (tone) formData.append("tone", tone);
        if (keywords) formData.append("keywords", keywords);
        
        // 사용자 역할별 추가 데이터
        if (userRole === "BIZ") {
          if (representativeMenus) formData.append("representativeMenus", representativeMenus);
          if (atmosphere) formData.append("atmosphere", atmosphere);
          if (concept) formData.append("concept", concept);
        } else if (userRole === "MEDIA") {
          if (targetAudience) formData.append("targetAudience", targetAudience);
          if (broadcastFeatures) formData.append("broadcastFeatures", broadcastFeatures);
        } else if (userRole === "INFLUENCER") {
          if (subscriberCount) formData.append("subscriberCount", subscriberCount);
          if (contentType) formData.append("contentType", contentType);
        }
      }

      // 이미지 파일 추가
      fileList.forEach((file) => {
        if (file.originFileObj) {
          formData.append("images", file.originFileObj);
        }
      });

      await axiosInstance.post("/main/intro", formData);

      message.success("소개글이 등록되었습니다!");
      handleClose();
      onSuccess();
    } catch (error) {
      console.error("소개글 등록 실패:", error);
      message.error("소개글 등록에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setIntroduction("");
    setFileList([]);
    setUseAI(false);
    setTone("friendly");
    setKeywords("");
    setRepresentativeMenus("");
    setAtmosphere("");
    setConcept("");
    setTargetAudience("");
    setBroadcastFeatures("");
    setSubscriberCount("");
    setContentType("");
    onClose();
  };

  const uploadProps: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      if (fileList.length >= 3) {
        message.warning("이미지는 최대 3개까지 업로드할 수 있습니다.");
        return false;
      }
      
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('JPG 또는 PNG 파일만 업로드할 수 있습니다!');
        return false;
      }
      
      const isLt5M = file.size / 1024 / 1024 < 5;
      if (!isLt5M) {
        message.error('이미지 파일 크기는 5MB 이하여야 합니다!');
        return false;
      }
      
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
    listType: "picture-card",
    multiple: true,
  };

  return (
    <Modal
      title="소개글 작성"
      open={isOpen}
      onCancel={handleClose}
      footer={[
        <Button key="cancel" onClick={handleClose}>
          취소
        </Button>,
        <Button key="submit" type="primary" loading={loading} onClick={handleSubmit}>
          등록하기
        </Button>,
      ]}
      width={700}
    >
      <div style={{ padding: "20px 0" }}>
        {/* AI 생성 스위치 */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
            소개글 작성 방식
          </label>
          <Switch
            checked={useAI}
            onChange={setUseAI}
            checkedChildren="AI 자동 생성"
            unCheckedChildren="직접 작성"
          />
        </div>

        {/* AI 생성 옵션 */}
        {useAI && (
          <div style={{ marginBottom: "20px", border: "1px solid #f0f0f0", padding: "16px", borderRadius: "8px" }}>
            <h4 style={{ marginBottom: "16px" }}>AI 생성 옵션</h4>
            
            {/* 톤앤매너 선택 */}
            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
                톤앤매너
              </label>
              <Radio.Group value={tone} onChange={(e) => setTone(e.target.value)}>
                <Radio value="friendly">친근하고 따뜻한</Radio>
                <Radio value="professional">전문적이고 신뢰감 있는</Radio>
                <Radio value="humorous">재미있고 유머러스한</Radio>
              </Radio.Group>
            </div>

            {/* 키워드 입력 */}
            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
                강조하고 싶은 키워드 (쉼표로 구분)
              </label>
              <Input
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="예: 맛있는, 신선한, 저렴한"
                maxLength={100}
              />
            </div>

            {/* 사용자 역할별 추가 필드 */}
            {userRole === "BIZ" && (
              <>
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
                    대표 메뉴 (2-3개)
                  </label>
                  <Input
                    value={representativeMenus}
                    onChange={(e) => setRepresentativeMenus(e.target.value)}
                    placeholder="예: 김치찌개, 된장찌개, 제육볶음"
                    maxLength={100}
                  />
                </div>
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
                    가게 분위기
                  </label>
                  <Select
                    value={atmosphere}
                    onChange={setAtmosphere}
                    placeholder="분위기를 선택해주세요"
                    style={{ width: "100%" }}
                  >
                    <Select.Option value="cozy">아늑한</Select.Option>
                    <Select.Option value="modern">모던한</Select.Option>
                    <Select.Option value="traditional">전통적인</Select.Option>
                    <Select.Option value="casual">캐주얼한</Select.Option>
                    <Select.Option value="luxury">럭셔리한</Select.Option>
                  </Select>
                </div>
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
                    특징/컨셉
                  </label>
                  <Select
                    value={concept}
                    onChange={setConcept}
                    placeholder="컨셉을 선택해주세요"
                    style={{ width: "100%" }}
                  >
                    <Select.Option value="family">가족식당</Select.Option>
                    <Select.Option value="date">데이트코스</Select.Option>
                    <Select.Option value="solo">혼밥추천</Select.Option>
                    <Select.Option value="group">단체모임</Select.Option>
                    <Select.Option value="business">회식장소</Select.Option>
                  </Select>
                </div>
              </>
            )}

            {userRole === "MEDIA" && (
              <>
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
                    타겟 시청층
                  </label>
                  <Select
                    value={targetAudience}
                    onChange={setTargetAudience}
                    placeholder="타겟 시청층을 선택해주세요"
                    style={{ width: "100%" }}
                  >
                    <Select.Option value="teens">10대</Select.Option>
                    <Select.Option value="twenties-thirties">20-30대</Select.Option>
                    <Select.Option value="forties-fifties">40-50대</Select.Option>
                    <Select.Option value="all">전연령</Select.Option>
                  </Select>
                </div>
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
                    방송 특징
                  </label>
                  <Input
                    value={broadcastFeatures}
                    onChange={(e) => setBroadcastFeatures(e.target.value)}
                    placeholder="방송의 특징을 간단히 설명해주세요"
                    maxLength={100}
                  />
                </div>
              </>
            )}

            {userRole === "INFLUENCER" && (
              <>
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
                    구독자/팔로워 수
                  </label>
                  <Select
                    value={subscriberCount}
                    onChange={setSubscriberCount}
                    placeholder="구독자 수를 선택해주세요"
                    style={{ width: "100%" }}
                  >
                    <Select.Option value="under-10k">1만 미만</Select.Option>
                    <Select.Option value="10k-50k">1-5만</Select.Option>
                    <Select.Option value="50k-100k">5-10만</Select.Option>
                    <Select.Option value="over-100k">10만 이상</Select.Option>
                  </Select>
                </div>
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
                    주요 콘텐츠 유형
                  </label>
                  <Select
                    value={contentType}
                    onChange={setContentType}
                    placeholder="콘텐츠 유형을 선택해주세요"
                    style={{ width: "100%" }}
                  >
                    <Select.Option value="review">리뷰</Select.Option>
                    <Select.Option value="mukbang">먹방</Select.Option>
                    <Select.Option value="daily">일상</Select.Option>
                    <Select.Option value="information">정보전달</Select.Option>
                    <Select.Option value="entertainment">엔터테인먼트</Select.Option>
                  </Select>
                </div>
              </>
            )}
          </div>
        )}

        {/* 직접 작성 모드 */}
        {!useAI && (
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
              소개글 *
            </label>
            <Input.TextArea
              value={introduction}
              onChange={(e) => setIntroduction(e.target.value)}
              placeholder="소개글을 입력해주세요..."
              rows={6}
              maxLength={500}
              showCount
            />
          </div>
        )}

        <div>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
            이미지 업로드 ({fileList.length}/3)
          </label>
          
          <Upload {...uploadProps}>
            {fileList.length >= 3 ? null : (
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>업로드</div>
              </div>
            )}
          </Upload>
          
          <div style={{ marginTop: "8px", fontSize: "12px", color: "#666" }}>
            JPG, PNG 파일만 가능하며, 파일 크기는 5MB 이하여야 합니다.
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default IntroForm;