import React from 'react'
import "./body_style.css"

function Body_form () {
    return (
        <div className="body_form">
        <div>
            <div className="form_body">
                <h5 class="form_title">Яг одоо туршиж үзэх</h5>
                <h6 class="form_desc">Таны бөглөсөн мэдээллээр онлайн дэлгүүр үүснэ.</h6>
                <form class="login_ form">
                    <div class="row">

                        <div class="d_name">
                            <div class="form_in">
                                <label class="form_label">Дэлгүүрийн нэр</label>
                                <div class="input_form">
                                   

                                    <input placeholder="Cool shop г.м." name="shop_name" type="text" class="form-control" /> 
                                </div>
                            </div>
                        </div>

                        <div class="fl_name">
                            <div class="form_in">
                                <label class="form_label">Таны нэр </label>
                                <div class="input_form">
                                    

                                    <input placeholder="Нэрээ оруулна." name="name" type="text" class="form-control" />
                                </div>
                            </div>
                        </div>

                        <div class="PhNum">
                            <div class="form_in">
                                <label class="form_label">Таны утас </label>
                                <div class="input_form">
                                    

                                    <input name="number" placeholder="Дугаараа оруулна уу" type="number" class="form-control" /> 
                                </div>
                            </div>
                        </div>


                        <div class="open_d">
                            <div class="d-grid">
                                <a class="btn btn-primary" href="#">Дэлгүүр нээх</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Body_form;