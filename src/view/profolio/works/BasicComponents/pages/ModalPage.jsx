import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      Custom
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal ? modal : null}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero
        sunt quos voluptates accusantium amet earum id. In sequi consequatur
        odit fugiat incidunt repudiandae voluptatibus reiciendis autem, optio
        totam. Nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero
        sunt quos voluptates accusantium amet earum id. In sequi consequatur
        odit fugiat incidunt repudiandae voluptatibus reiciendis autem, optio
        totam. Nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero
        sunt quos voluptates accusantium amet earum id. In sequi consequatur
        odit fugiat incidunt repudiandae voluptatibus reiciendis autem, optio
        totam. Nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero
        sunt quos voluptates accusantium amet earum id. In sequi consequatur
        odit fugiat incidunt repudiandae voluptatibus reiciendis autem, optio
        totam. Nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero
        sunt quos voluptates accusantium amet earum id. In sequi consequatur
        odit fugiat incidunt repudiandae voluptatibus reiciendis autem, optio
        totam. Nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero
        sunt quos voluptates accusantium amet earum id. In sequi consequatur
        odit fugiat incidunt repudiandae voluptatibus reiciendis autem, optio
        totam. Nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero
        sunt quos voluptates accusantium amet earum id. In sequi consequatur
        odit fugiat incidunt repudiandae voluptatibus reiciendis autem, optio
        totam. Nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero
        sunt quos voluptates accusantium amet earum id. In sequi consequatur
        odit fugiat incidunt repudiandae voluptatibus reiciendis autem, optio
        totam. Nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero
        sunt quos voluptates accusantium amet earum id. In sequi consequatur
        odit fugiat incidunt repudiandae voluptatibus reiciendis autem, optio
        totam. Nulla.
      </p>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero
        sunt quos voluptates accusantium amet earum id. In sequi consequatur
        odit fugiat incidunt repudiandae voluptatibus reiciendis autem, optio
        totam. Nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero
        sunt quos voluptates accusantium amet earum id. In sequi consequatur
        odit fugiat incidunt repudiandae voluptatibus reiciendis autem, optio
        totam. Nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero
        sunt quos voluptates accusantium amet earum id. In sequi consequatur
        odit fugiat incidunt repudiandae voluptatibus reiciendis autem, optio
        totam. Nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero
        sunt quos voluptates accusantium amet earum id. In sequi consequatur
        odit fugiat incidunt repudiandae voluptatibus reiciendis autem, optio
        totam. Nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero
        sunt quos voluptates accusantium amet earum id. In sequi consequatur
        odit fugiat incidunt repudiandae voluptatibus reiciendis autem, optio
        totam. Nulla.
      </p>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
    </div>
  );
};

export default ModalPage;
