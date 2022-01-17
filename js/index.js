import { dates } from "./data.js";

export default function createTimelineList(dates) {
  const timeline = document.querySelector(".timeline");

  /* Title for Page */
  const title = document.createElement("h1");
  const pageTitleText = document.createTextNode("History of Baking Timeline");
  const wrapper = document.createElement("section");

  // The Loop
  dates.map((dates) => {
    const timelineItemWrapper = document.createElement("div");
    timelineItemWrapper.className = "timeline-item";

    // Title
    const timelineItemTitle = document.createElement("h2");
    timelineItemTitle.className = "timeline-item-title";
    timelineItemTitle.textContent = dates.title;
    timelineItemWrapper.appendChild(timelineItemTitle);

    // Date
    const timelineItemDate = document.createElement("span");
    timelineItemDate.className = "timeline-item-date";
    timelineItemDate.textContent = dates.date;
    timelineItemWrapper.appendChild(timelineItemDate);

    // Summary
    const timelineItemSummary = document.createElement("p");
    timelineItemSummary.className = "timeline-item-summary";
    timelineItemSummary.textContent = dates.summary;
    timelineItemWrapper.appendChild(timelineItemSummary);

    // Button
    const timelineItemBT = document.createElement("button");
    timelineItemBT.className = "timeline-item-more-info";
    timelineItemBT.textContent = "Read More";
    timelineItemWrapper.appendChild(timelineItemBT);
    timelineItemBT.addEventListener("click", openModal);

    wrapper.appendChild(timelineItemWrapper);
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

  title.appendChild(pageTitleText);
  timeline.appendChild(title);
  timeline.appendChild(wrapper);
}

// Call the function
createTimelineList(dates);
