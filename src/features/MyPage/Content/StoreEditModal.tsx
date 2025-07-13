import React, { useState } from "react";
import { ModalOverlay, StoreEditModalWrap } from "../styled";

interface StoreEditModalProps {
  open: boolean;
  onClose: () => void;
  store: {
    id: number;
    name: string;
    location: string;
    price: number;
    desc: string;
    thumbnail: string;
  };
  onSave: (data: any) => void;
}

const StoreEditModal = ({
  open,
  onClose,
  store,
  onSave,
}: StoreEditModalProps) => {
  const [form, setForm] = useState({
    name: store.name,
    location: store.location,
    price: store.price,
    desc: store.desc,
    thumbnail: store.thumbnail,
  });

  if (!open) return null;

  return (
    <ModalOverlay>
      <StoreEditModalWrap>
        <div className="modal-title">가게 관리</div>
        <div className="modal-close" onClick={onClose}>
          ×
        </div>
        <div className="modal-row">
          <label>썸네일 사진 업로드</label>
          <input type="file" />
          <img
            src={form.thumbnail}
            alt="썸네일"
            style={{ width: 120, marginTop: 8, borderRadius: 8 }}
          />
        </div>
        <div className="modal-row">
          <label>가게명</label>
          <input
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
        </div>
        <div className="modal-row">
          <label>가게 위치</label>
          <input
            value={form.location}
            onChange={(e) =>
              setForm((f) => ({ ...f, location: e.target.value }))
            }
          />
        </div>
        <div className="modal-row">
          <label>희망 가격</label>
          <input
            value={form.price}
            onChange={(e) =>
              setForm((f) => ({ ...f, price: Number(e.target.value) }))
            }
          />
        </div>
        <div className="modal-row">
          <label>AI 소개글</label>
          <textarea
            value={form.desc}
            onChange={(e) => setForm((f) => ({ ...f, desc: e.target.value }))}
          />
        </div>
        <div className="modal-actions">
          <button className="cancel" onClick={onClose}>
            취소
          </button>
          <button className="save" onClick={() => onSave(form)}>
            수정완료
          </button>
        </div>
      </StoreEditModalWrap>
    </ModalOverlay>
  );
};

export default StoreEditModal;
