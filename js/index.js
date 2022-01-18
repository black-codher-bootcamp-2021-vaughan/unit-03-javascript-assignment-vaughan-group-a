import { dates } from "./data.js";

export default function createTimelineList(dates) {
  const timeline = document.querySelector(".timeline");

  /* Create title for page inside a header element (header with h1 element) */
  const pageHeader = document.createElement("header");
  const title = document.createElement("h1");
  const pageTitleText = document.createTextNode("History of Baking Timeline");
  title.appendChild(pageTitleText);
  pageHeader.appendChild(title);

  /* Insert header to the top of the body */
  document.body.insertBefore(pageHeader, timeline);

  /* Create wrapper for the timeline (section with class .timeline-wrapper) */
  const timelineWrapper = document.createElement("section");
  timelineWrapper.setAttribute("class", "timeline-wrapper");

  /* Create the gradient line in the centre of the timeline (div with class .centre-line) */
  const timelineCentreLine = document.createElement("div");
  timelineCentreLine.setAttribute("class", "centre-line");
  /* Insert .centre-line inside .timeline-wrapper */
  timelineWrapper.appendChild(timelineCentreLine);

  // The Loop
  dates.map((dates) => {
    /* Create a row for each timeline item (div with class .row) */
    const timelineRow = document.createElement("div");
    timelineRow.setAttribute("class", "row");

    // Timeline Item
    const timelineItem = document.createElement("div");
    timelineItem.className = "timeline-item";

    /* Create icon for each timeline item (i with classes .icon .fas .fa-caret-down) */
    const timelineIcon = document.createElement("i");
    timelineIcon.setAttribute("class", "icon fas fa-caret-down");
    /* Insert icon into each timeline item */
    timelineItem.appendChild(timelineIcon);

    /* Create a wrapper for the timeline title and date (div with class .timeline-summary-header) */
    const timelineSummaryHeader = document.createElement("div");
    timelineSummaryHeader.setAttribute("class", "timeline-summary-header");

    // Title
    const timelineItemTitle = document.createElement("h2");
    timelineItemTitle.className = "timeline-item-title";
    timelineItemTitle.textContent = dates.title;
    timelineSummaryHeader.appendChild(timelineItemTitle);

    // Date
    const timelineItemDate = document.createElement("span");
    timelineItemDate.className = "timeline-item-date";
    timelineItemDate.textContent = dates.date;
    timelineSummaryHeader.appendChild(timelineItemDate);

    /* Insert the .timeline-summary-header into the .timeline-item */
    timelineItem.appendChild(timelineSummaryHeader);

    // Summary
    const timelineItemSummary = document.createElement("p");
    timelineItemSummary.className = "timeline-item-summary";
    timelineItemSummary.textContent = dates.summary;
    timelineItem.appendChild(timelineItemSummary);

    // Button
    const timelineItemBT = document.createElement("button");
    timelineItemBT.className = "timeline-item-more-info";
    timelineItemBT.textContent = "Read More";
    timelineItem.appendChild(timelineItemBT);
    timelineItemBT.addEventListener("click", openModal);

    /* Insert .timeline-item into .row */
    timelineRow.appendChild(timelineItem);

    /* Insert .row into .timeline-wrapper */
    timelineWrapper.appendChild(timelineRow);
    
    const modalWrapper = document.createElement("div");

    function openModal() {
      /* Modal Wrapper for background (div with ID #modal-wrapper) */
      modalWrapper.setAttribute("id", "modal-wrapper");

      /* Modal Container to hold modal content (div with ID #modal-container) */
      const modalContainer = document.createElement("div");
      modalContainer.setAttribute("id", "modal-container");

      /* Close Button (button with ID #modal-close-button) */
      const modalCloseButton = document.createElement("button");
      modalCloseButton.setAttribute("id", "modal-close-button");
      modalCloseButton.setAttribute("type", "reset");
      modalCloseButton.textContent = "Close";
      modalContainer.appendChild(modalCloseButton);
      modalCloseButton.addEventListener("click", closeModal);

      /* Date (p with ID #modal-date) */
      const modalDate = document.createElement("p");
      modalDate.setAttribute("id", "modal-date");
      modalDate.textContent = dates.date;
      modalContainer.appendChild(modalDate);

      /* Title (h2 with ID #modal-title) */
      const modalTitle = document.createElement("h2");
      modalTitle.setAttribute("id", "modal-title");
      modalTitle.textContent = dates.title;
      modalContainer.appendChild(modalTitle);

      /* Image (img with ID #modal-image) */
      const modalImage = document.createElement("img");
      modalImage.setAttribute("src", dates.image);
      modalImage.setAttribute("alt", dates.title);
      modalImage.setAttribute("id", "modal-image");
      modalContainer.appendChild(modalImage);

      /* Full Description (p with ID #modal-full-description) */
      const modalFullDescription = document.createElement("p");
      modalFullDescription.setAttribute("id", "modal-full-description");
      modalFullDescription.textContent = dates.fullDescription;
      modalContainer.appendChild(modalFullDescription);

      /* Insert #modal-container to #modal-wrapper */
      modalWrapper.appendChild(modalContainer);

      /* Insert #modal-wrapper to the body of the HTML */
      document.body.appendChild(modalWrapper);
    }
    function closeModal() {
      document.body.removeChild(modalWrapper);
    }
  });

  timeline.appendChild(timelineWrapper);
}

// Call the function
createTimelineList(dates);
