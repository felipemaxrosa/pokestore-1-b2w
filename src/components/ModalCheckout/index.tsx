import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./styles.css";

Modal.setAppElement("#root");

interface ModalProps {
  onClose: any;
  totalValue: number;
  amountItems: number;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalCheckout: React.SFC<ModalProps> = ({
  onClose,
  totalValue,
  amountItems,
}) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      className="modal"
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.75)",
          zIndex: 1,
        },
        content: {
          width: "500px",
          height: "300px",
          position: "absolute",
          top: "20%",
          left: "30%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          border: "1px solid #000",
          boxShadow: "black 2px 2px 5px",
          background: "linear-gradient(to right, #ccc, #dbdbdd)",
          WebkitOverflowScrolling: "touch",
          borderRadius: "7px",
          outline: "none",
          padding: "20px",
        },
      }}
      isOpen={true}
    >
      <div className="header-modal">
        <h1>PARABÉNS!</h1>
        <h2>Sua compra foi finalizada</h2>
        <hr />
        <br />

        <p>
          Quantidade: <strong>{amountItems}</strong>
        </p>
        <p>
          Total da Compra: <strong>R$ {totalValue}</strong>
        </p>
      </div>
      <button className="btn-modal" onClick={handleClose}>
        Sair
      </button>
    </Modal>
  );
};

export default ModalCheckout;
// const styles: React.HTMLAttributes<HTMLDivElement>.style? = {
//   flexRow: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginBottom: "40px",
//   },
//   flexStart: {
//     justifyContent: "flex-start",
//   },
//   title: {
//     fontSize: "1.3rem",
//     fontWeight: "bold",
//   },
//   errorMessage: {
//     color: "red",
//     fontWeight: "bold",
//   },
// };
