import React from 'react'
import DefaultLayoutHoc from '../layout/Default.layout';

// components 
import Poster from "../Components/Poster/Poster.Component";
import PlayFilters from "../Components/PlayFilters/PlayFiltersComponent";

const PlayPage = () => {
  return (
   <>
     <div className='container mx-auto px-4 my-10 '>
      <div className='w-full flex  flex-col-reverse lg:flex-row-reverse gap-4 '>
        <div className='lg:w-3/4 p-4 background-white rounded'>
          <h2 className='text-2xl font-bold mb-4'>
            Play in NCR in Delhi</h2>
          <div className='flex flex-wrap'>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster
              isPlay = {true}
              src = "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMCBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00348690-ugelexfgrn-portrait.jpg" 
              title = "Kun Faya Kun"
            
              subtitle = "Felicity Theatre"
              />
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster
              isPlay = {true}
              src = "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-pehli-mohabbat-a-musical-tale-of-first-love-0-2023-8-25-t-5-57-42.jpg" 
              title = "Pehli Mohobbat"
            
              subtitle = "Felicity Theatre"
              />
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster
              isPlay = {true}
              src = "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAzMSBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00325368-lablqjsuhb-portrait.jpg" 
              title = "Demo Session"
            
              subtitle = "Felicity Theatre"
              />
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster
              isPlay = {true}
              src = "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362210-ttepleudpe-portrait.jpg" 
              title = "Open Mic"
            
              subtitle = "Felicity Theatre"
              />
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster
              isPlay = {true}
              src = "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyOCBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358308-hlaajcelxz-portrait.jpg" 
              title = "Sunburn Goa"
            
              subtitle = "Felicity Theatre"
              />
            </div>
          </div>
        </div>

        <div className='lg:w-1/4 p-4 bg-white rounded'>
          <h2 className='text-2xl font-bold mb-4'>Filters</h2>
          <div>
            <PlayFilters
            title='Date'
            tags = {["Today", "Tomorrow", "This weekend"]}
            />
          </div>
          <div>
            <PlayFilters
            title='Language'
            tags = {["English", "Hindi", "Tamil"]}
            />
          </div>
        </div>
      </div>

     { /* <iframe
       src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d31113.86509807299!2d80.241348!3d12.892725!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDUzJzMzLjgiTiA4MMKwMTQnMjguOSJF!5e0!3m2!1sen!2sus!4v1693458458967!5m2!1sen!2sus" 
       width="600" 
       height="450"
        style={{border:"0" }}
        allowFullScreen="" loading="lazy"
         referrerPolicy="no-referrer-when-downgrade"
         title='play location'
         > 
         </iframe> */}

     </div>
   </>
  )
}

export default DefaultLayoutHoc(PlayPage);