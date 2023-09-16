import React from "react";
import { Accordion, AccordionItemHeading, AccordionItem, AccordionItemPanel, AccordionItemButton } from "react-accessible-accordion";
import "./forcast.css";

const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Forcast = ({ data }) => {
    const dayInAweek = new Date().getDay();
    const forcatsDay = WEEK_DAYS.slice(dayInAweek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAweek));

    console.log(forcatsDay);

    if (!data || !data.list) {
        return null;
    }

    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <label className="day">{forcatsDay[idx]}</label>
                                    {item.weather && item.weather[0] && (
                                        <>
                                            <label className="description">{item.weather[0].description}</label>
                                            <label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                        </>
                                    )}
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Pressure</label>
                                    <label>{item.main.pressure}</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Clouds</label>
                                    <label>{item.clouds && item.clouds.all}</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Wind</label>
                                    <label>{item.wind.speed}m/s</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Sea Level</label>
                                    <label>{item.main.sea_level}</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>See Level</label>
                                    <label>{Math.round(item.main.sea_level)}</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};

export default Forcast;

