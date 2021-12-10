import React from "react";
import "./body_style.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";

function Body_form() {
  return (
    <div className="formB">
      <h5 className="form_title">Яг одоо туршиж үзэх</h5>
      <h6 className="form_desc">
        Таны бөглөсөн мэдээллээр онлайн дэлгүүр үүснэ.
      </h6>
      <form className="login_form">
        <div className="row">
          <div className="form1">
            <div className="form_in">
              <label className="form_label">Дэлгүүрийн нэр</label>
              <div className="input_form">
                <HomeOutlinedIcon sx={{ color: grey[500] }} />
                <input
                  placeholder="Cool shop г.м."
                  name="shop_name"
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <div className="form1">
            <div className="form_in">
              <label className="form_label">Таны нэр </label>
              <div className="input_form">
                <PersonOutlinedIcon sx={{ color: grey[500] }} />
                <input
                  placeholder="Нэрээ оруулна."
                  name="name"
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <div className="form1">
            <div className="form_in">
              <label className="form_label">Таны утас </label>
              <div className="input_form">
                <PhoneOutlinedIcon sx={{ color: grey[500] }} />
                <input
                  name="number"
                  placeholder="Дугаараа оруулна уу"
                  type="number"
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <div className="open_d">
            <div className="d-grid">
              <Button
                href="#"
                variant="contained"
                onClick={() => {
                  console.log("asdasd");
                }}
              >
                Дэлгүүр нээх
              </Button>
              {/* <a className="btn btn-primary" href="#">
                Дэлгүүр нээх
              </a> */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Body_form;
