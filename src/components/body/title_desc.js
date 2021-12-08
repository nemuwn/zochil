import React from 'react'
import "./body_style.css"
import Button from '@mui/material/Button';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import Stack from '@mui/material/Stack';

function Title_desc () {
    return (
        <div className="title_desc">
            <h6 class="desc_text white-text">Zochil - Онлайн худалдааны платформ</h6>
            <h1 class="title_text">Онлайн бизнесээ <br/> одоо эхлүүл</h1>
	        <p class="long_desc white-text ">Та манай платформыг ашиглан 3 минутын дотор онлайн дэлгүүрээ нээж захиалга, агуулах, төлбөр, хүргэлтээ автоматжуулаарай.</p>
	        <div class="btns">

            <Stack direction="row" spacing={2}>
                <Button  href="#"  variant="contained" startIcon={<CloudDownloadOutlinedIcon />}>Танилцуулга татах</Button>
                <Button  href="#" variant="contained" startIcon={<ImportContactsOutlinedIcon />}>Гарын авлага</Button>
            </Stack>

                 {/* <a target="_blank" class="btn btn-primary m-1 mr-5" href="#">
                    <i class="uil uil-cloud-download"></i> 
                Танилцуулга татах</a> */}
                {/* <a target="_blank" class="btn btn-primary m-1" href="#">
                        <i class="uil uil-book-open"></i> 
                    Гарын авлага</a> */}
                
            </div>
            
        </div>
    )
}

export default Title_desc;