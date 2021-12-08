import React from 'react'
import AirplayOutlinedIcon from '@mui/icons-material/AirplayOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';

import './footer_style.css'


function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="container">
                    <div className="footer_row">

                        <div className="ftr">
                            <div className="icon_text">
                                <div className="icon">
                                    <AirplayOutlinedIcon color="primary" />
                                </div>

                                <div class="ft_title_desc">
                                    <h4 class="title">Тогтмол хөгжүүлэлт</h4>
                                    <p class="footer_desc">Бид таны онлайн дэлгүүрийн ард ажиллаж буй системд байнгын сайжруулалт хийдэг.</p>
                                </div>
                            </div>
                        </div>

                        <div className="ftr">
                            <div className="icon_text">
                                <div className="icon rounded-circle">
                                    <MovieCreationOutlinedIcon/>
                                </div>

                                <div class="ft_title_desc">
                                    <h4 class="title">Сургалт Зөвлөгөө</h4>
                                    <p class="footer_desc">Та хаанаас эхлэхээ мэдэхгүй байгаа бол манай зөвлөхүүдээс сургалт аваарай.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="ftr">
                            <div className="icon_text">
                                <div className="icon rounded-circle">
                                    <PeopleOutlineIcon/>
                                </div>

                                <div class="ft_title_desc">
                                    <h4 class="title">Аюулгүй байдал</h4>
                                    <p class="footer_desc">Бид харилцагчийнхаа бизнесийн мэдээллийн аюулгүй байдлыг хамгаалж ажилладаг.</p>
                                </div>
                            </div>
                        </div>

                        <div className="ftr">
                            <div className="icon_text">
                                <div className="icon rounded-circle">
                                    <BarChartOutlinedIcon/> 
                                </div>

                                <div class="ft_title_desc">
                                    <h4 class="title">Нэмэлт боломжууд</h4>
                                    <p class="footer_desc">Нэмэлт боломжуудаас өөрийн бизнест тохируулж тусгайлан ашиглах боломжтой.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
