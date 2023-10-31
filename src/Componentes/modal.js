import React, { useEffect } from "react";
import "./modal.css";

const Modal = () => {
  useEffect(() => {
    const openModalButton = document.querySelector("#open-modal");
    const closeModalButton = document.querySelector("#close-modal");
    const modal = document.querySelector("#modal");
    const fade = document.querySelector("#fade");

    const toggleModal = () => {
      [modal, fade].forEach((el) => el.classList.toggle("hide"));
    };

    [openModalButton, closeModalButton, fade].forEach((el) => {
      el.addEventListener("click", toggleModal);
    });

    return () => {
      [openModalButton, closeModalButton, fade].forEach((el) => {
        el.removeEventListener("click", toggleModal);
      });
    };
  }, []);

  return (
    <div>
      <button id="open-modal">Abrir</button>
      <div id="fade" class="hide"></div>
      <div id="modal" class="hide">

        <div class="modal-header">
          <h3 style={{ color: "black", padding: "1rem" }}>Vota CODE</h3>
          <button id="close-modal">Fechar</button>
        </div>

        <div class="modal-body">
          <p style={{ color: "black", padding: "1rem" }}>
            Aqui estarão todas as informações de um grupo do Festival de apps
          </p>
        </div>

      </div>
    </div>
  );
};

export default Modal;







