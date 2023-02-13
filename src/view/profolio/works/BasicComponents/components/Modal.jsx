import ReactDOM from "react-dom";
import { useEffect } from "react";

const Modal = ({ onClose, children, actionBar }) => {
  // 如果Modal被打開 阻止body可以滑動 原因:滑到下面會有沒被灰層遮住的地方
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      {/* inset-0:  填滿上一個是Position是relative的父節點擁有的大小
          top: 0px;
          right: 0px;
          bottom: 0px;
          left: 0px; 
    */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
};

export default Modal;
