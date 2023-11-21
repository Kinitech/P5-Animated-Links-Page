import React from 'react';
import Header from './components/Header'
import HeaderPhoto from "./components/HeaderPhoto";
import Subheader from './components/Subheader'
import Box from './components/Box'
import Desc from "./components/Description";
import PhotoCard from "./components/PhotoCard";

import avatar from "./assets/icons/pfp.jpeg";
import main_links from './assets/main_links'
import social_links from "./assets/social_links";
import special_link from "./assets/special_link";
import alt_links from "./assets/alt_links";
import SketchBackground from "./components/sketch";
import Dropdown from "./components/Dropdown";
import donation_link from "./assets/donation_links";
import EventBox from "./components/EventBox";

const header_left = "-> "
const header_right = " <-"
const main_title = "joseph meow";
const description = "click on my links!";
const subhead_left = "~ ";
const subhead_right =  " ~";
const spicy_subheading = "sales";
const socials_subheading = "social medias";
const donate_subheading = "donations";

function App() {
    return (
        <div className = "App" >
            <SketchBackground/>
            <div className = "dot-pattern"/>
            <div className = "container">
                <div className="column">
                    <HeaderPhoto source={avatar}/>
                    <Header text={main_title} header_left={header_left} header_right={header_right} style={"inline wobble"}/>
                    <Desc text={description}/>
                    <Subheader text={spicy_subheading} subhead_left={subhead_left} subhead_right={subhead_right} style={"inline shake"}/>
                    <div className="gridbox marginBottom">
                    {main_links.map((item, i) => {
                        if (i === 0) return (
                            <EventBox key={i} i={i} title={item.title} subtitle={item.subtitle} link={item.link}
                                        style={"Box"}/>
                        )
                        return (
                                <Box key={i} i={i} title={item.title} subtitle={item.subtitle} link={item.link}
                                customStyle={{height:'100%', alignItems:'center'}}/>
                            )
                    })}
                    </div>
                    <Dropdown i={2}
                         title={'Alternative links'}
                         style={'Box Dropdown'}
                         dropdownItems={alt_links}/>

                    <Subheader text ={socials_subheading} subhead_left={subhead_left} subhead_right={subhead_right} style={"inline shake2"}/>
                    <div className="marginBottom">
                        {special_link.map ((item, i) => {
                            return (
                                <PhotoCard key={i} i={i + 3} title={item.title} subtitle={item.subtitle} link={item.link} photos={item.photos} icon={item.icon} style={"Box"}/>
                            )})}
                    </div>
                    <div className="gridbox marginBottom">
                        {social_links.map((item, i) => {
                            return(
                                <Box key={i} i={i + 4} title={item.title} subtitle={item.subtitle} link={item.link} icon={item.icon}/>
                            )})}
                    </div>

                    <Subheader text={donate_subheading} subhead_left={subhead_left} subhead_right={subhead_right} style={"inline shake"}/>
                    <div className="gridbox marginBottom">
                    {donation_link.map((item, i) => {
                        return (
                            <Box key={i} i={i + 10} title={item.title} subtitle={item.subtitle} link={item.link}
                                 icon={item.icon}/>
                        )
                    })}
                    </div>
                </div>
            </div>
            <div className="container emptySpace"/>
        </div>
    );
}
export default App;
