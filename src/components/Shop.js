import React, { useState } from "react";
import { Singleproduct } from "./Singleproduct";
import { products } from "./../data";
import "./../css/shop.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    border: "1.5px solid #000",
    boxShadow: theme.shadows[5],
  },
}));

export default function Shop() {
  const classes = useStyles();
  // const [productarr,setProductarr] = useState(products);

  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [modalproduct, setmodalproduct] = useState(products[0]);

  return (
    <div className="display">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper + " modal"}>
          <img src={modalproduct.img} />
          <div className="modaldetails">
            <h3>{modalproduct.name}</h3>
            <p>Price: {modalproduct.price}</p>
            <ul>
              <li>color: grey</li>
              <li> cloth: cottan</li>
              <li> other detail</li>
            </ul>
            <button>Add to cart</button>
          </div>
        </div>
      </Modal>

      {products.map((product) => {
        return (
          <div
            onClick={() => {
              setOpen(true);
              setmodalproduct(product);
            }}
            key={product.id}
            className="singledisplay"
          >
            <Singleproduct product={product} />
          </div>
        );
      })}
    </div>
  );
}


