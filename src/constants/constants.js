export const style = {
  backgroundImage: 'url(images/Circurement.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

export const itemsData = [
  {
    backgroundImage: 'url(images/Blob.png)',
    index: 0,
    description: `### Blob (Physarum polycephalum) Mapping with Computer Vision

This project focuses on mapping the slow progress of **Blob (Physarum polycephalum)** using computer vision techniques. We monitor its movement inside a Tupperware container with the help of a **Raspberry Pi** connected to a camera.

- **Image Capture**: The Raspberry Pi captures images of the Blob at regular intervals.
- **Image Analysis**: We utilize the **NumPy** and **OpenCV** Python libraries to analyze the captured images.
- **Size Calculation**: The size of the Blob is computed from the images.
- **Progress Prediction**: Predictions regarding the Blob's progression are made based on the analyzed data.

This project combines biology and technology to explore the fascinating behavior of slime molds through innovative imaging techniques
`,
  },
  {
    backgroundImage: 'url(images/GenderPayGap.png)',
    index: 1,
    url: `https://github.com/salaun-marion/GenderPayGap`,
    description: `### Shiny Application: Gender Wage Differences in Europe

This Shiny application aims to highlight the differences in wages between genders across Europe. It is built using the **R** programming language for the statistical analysis, and incorporates **HTML** and **CSS** for the user interface within the Shiny framework.

- **Statistical Analysis**: Utilizes R for in-depth statistical computations.
- **User Interface**: Combines HTML and CSS to create an interactive and visually appealing application.
- **Data Visualization**: The most challenging aspect was selecting the appropriate diagrams to effectively display the information.

This application serves as a valuable tool for understanding gender wage disparities in Europe.
`,
  },
  {
    backgroundImage: 'url(images/Circurement.png)',
    index: 2,
    isVideo: true,
    description: `### Development of Inventory and Process Management Application for Packaging Recycling

This project involves the design and implementation of a visually appealing web application focused on inventory and process management for packaging recycling.

- **Frontend Development**: Built from scratch using **React** to create an engaging user interface.
- **Backend Development**: Developed a prototype with an **API** using **Flask** and **Python**.
- **Database Management**: Utilized **SQLAlchemy** for Object-Relational Mapping (ORM) to facilitate interactions with a relational database created using **PostgreSQL**.
- **Deployment**: Achieved simple and reproducible deployment using **Docker Compose**.

This application aims to streamline the management of packaging recycling processes through effective inventory control and user-friendly design.
`,
  },
  {
    backgroundImage: 'url(images/board.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    index: 3,
    url: `https://github.com/salaun-marion/board-counter`,
    description: `### Example of a Typical Dashboard Based on JSX/React

This dashboard showcases a typical layout built using **JSX** and **React**. It features interactive cards that display various metrics.

- **Dynamic Counters**: Each card includes a counter that can be updated.
- **Modal Interaction**: The counter updates occur when a modal is opened, allowing users to input their email address.
- **User Input**: Upon entering an email address, the corresponding card's counter is refreshed to reflect the new data.

This dashboard provides a user-friendly interface for monitoring key metrics while allowing for real-time updates based on user interactions.
`,
  },
];
