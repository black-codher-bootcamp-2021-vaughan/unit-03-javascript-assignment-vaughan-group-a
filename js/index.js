import { dates } from "./data.js";


export default function createTimelineList(dates){

    const timeline = document.querySelector(".timeline");

    /* Title for Page */
    const title = document.createElement("h1");
    const pageTitleText = document.createTextNode("History of Baking Timeline");
    const wrapper = document.createElement("section");
    

    // The Loop
    dates.map((dates) => {

        const timelineItemWrapper = document.createElement("div");
        timelineItemWrapper.className = "timeline-item"

        // Title
        const timelineItemTitle = document.createElement("h2");
        timelineItemTitle.className = "timeline-item-title"
        timelineItemTitle.textContent = dates.title;
        timelineItemWrapper.appendChild(timelineItemTitle);

        // Date
        const timelineItemDate = document.createElement("span");
        timelineItemDate.className = "timeline-item-date"
        timelineItemDate.textContent = dates.date;
        timelineItemWrapper.appendChild(timelineItemDate);

        // Summary
        const timelineItemSummary = document.createElement("p");
        timelineItemSummary.className = "timeline-item-summary"
        timelineItemSummary.textContent = dates.summary;
        timelineItemWrapper.appendChild(timelineItemSummary);

        // Button
        const timelineItemBT = document.createElement("button");
        timelineItemBT.className = "timeline-item-more-info"
        timelineItemBT.textContent = "Read More";
        timelineItemWrapper.appendChild(timelineItemBT);

        wrapper.appendChild(timelineItemWrapper);
        
        });


title.appendChild(pageTitleText);
timeline.appendChild(title);
timeline.appendChild(wrapper);
}

// Call the function
createTimelineList(dates);