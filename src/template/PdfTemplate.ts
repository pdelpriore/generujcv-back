const PdfTemplate = (data: string): string => {
  return `
    <!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <title>Twoje CV</title>
    <style>     
    :root {
      --width: 100vw;
      --height: 100vh;
      --size: 1vw;
      --primary-color: #f3f3f3;
      --secondary-color: #2d2d2d;
    }
    
    * {
        margin: 0;
        padding: 0;
    }
    
    .previewColumns {
      display: flex;
      flex-direction: row;
      width: var(--width);
      height: var(--height);
      overflow: hidden;
    }
    
    .firstColumn {
      display: flex;
      flex-direction: column;
      flex: 1;
      background-color: var(--secondary-color);
    }
    
    .secondColumn {
      display: flex;
      flex-direction: column;
      flex: 2;
      background-color: var(--primary-color);
    }
    
    .secondColumn__firstsection {
      flex-grow: 20;
    }
    
    .secondColumn__secondsection {
      flex: 1;
    }
    
    .section {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      padding: 0.5vw;
    }
    
    .section--photo {
      align-items: center;
      justify-content: center;
    }
    
    .section--nophoto {
      padding: var(--size);
    }
    
    .section__list-firstcolumn {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    
    .section__list-firstcolumn--competence {
      grid-template-columns: repeat(4, 1fr);
    }
    
    .section__photo {
      width: 11vw;
      height: 11vw;
      object-fit: cover;
      border-radius: 50%;
      border: 2px solid var(--primary-color);
    }
    
    .section__photo--volume {
      width: 9vw;
      height: 9vw;
    }
    
    .section__label {
      font-size: 0.8vw;
      align-self: stretch;
      text-align: center;
    }
    
    .section__label--firstcolumn {
      color: var(--primary-color);
      font-family: "Poppins", sans-serif;
      font-weight: 300;
      border-top: 2px solid var(--primary-color);
      border-bottom: 2px solid var(--primary-color);
    }
    
    .section__label--secondcolumn {
      color: var(--secondary-color);
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      border-top: 2px solid var(--secondary-color);
      border-bottom: 2px solid var(--secondary-color);
    }
    
    .section__label--name {
      text-align: left;
      font-size: 1.5vw;
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      padding-left: 3vw;
      border-top: none;
      border-bottom: none;
    }
    
    .section__label--jobposition {
      font-size: 0.8vw;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
    }
    
    .github {
      display: flex;
      align-items: flex-end;
      flex-direction: row;
      padding-top: 0.7vw;
      padding-bottom: 0.7vw;
      padding-left: 3vw;
      padding-right: 3vw;
    }
    
    .github__icon {
      width: var(--size);
      height: var(--size);
      margin-right: 0.3vw;
    }
    
    .github__icon-ico {
      display: block;
      font-size: 0.9vw;
      color: var(--secondary-color);
    }
    
    .github__url {
      font-size: 0.8vw;
      font-family: "Poppins", sans-serif;
      font-weight: 300;
      color: #2d2d2d;
      white-space: nowrap;
      border-bottom: 1px solid var(--secondary-color);
    }
    
    .section--rodo {
      align-items: flex-start;
      padding-left: 3.5vw;
      padding-right: 3.5vw;
    }
    
    .section__rodo {
      font-size: 0.6vw;
      font-family: "Poppins", sans-serif;
      font-weight: 300;
      color: #2d2d2d;
      word-wrap: break-word;
      white-space: pre-wrap;
      border-top: 1px solid var(--secondary-color);
      border-bottom: 1px solid var(--secondary-color);
    }
    
    .contact {
      display: flex;
      align-items: center;
      flex-direction: row;
      padding: 0.5vw;
    }
    
    .contact__icon {
      width: 1vw;
      height: 1vw;
      margin-right: 0.3vw;
    }
    
    .contact__icon-ico {
      display: block;
      font-size: 0.9vw;
      color: var(--primary-color);
    }
    
    .contact__content {
      font-size: 0.8vw;
      color: var(--primary-color);
      font-family: "Poppins", sans-serif;
      font-weight: 200;
      white-space: nowrap;
    }
    
    .diploma {
      display: flex;
      flex-direction: column;
      padding-top: 0.5vw;
      padding-bottom: 0.5vw;
      padding-left: 3vw;
      padding-right: 3vw;
    }
    
    .diploma__content {
      font-size: 0.8vw;
      font-family: "Poppins", sans-serif;
      font-weight: 300;
      color: #2d2d2d;
      white-space: nowrap;
    }
    
    .diploma__content--degree {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
    }
    
    .diploma__content--description {
      font-size: 0.7vw;
      text-align: justify;
      word-wrap: break-word;
      white-space: normal;
    }
    
    .experience {
      display: flex;
      flex-direction: column;
      padding-top: 0.5vw;
      padding-bottom: 0.5vw;
      padding-left: 3vw;
      padding-right: 3vw;
    }
    
    .experience__content {
      font-size: 0.8vw;
      font-family: "Poppins", sans-serif;
      font-weight: 300;
      color: #2d2d2d;
      white-space: nowrap;
    }
    
    .experience__content--jobposition {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
    }
    
    .experience__content--description {
      font-size: 0.7vw;
      text-align: justify;
      word-wrap: break-word;
      white-space: normal;
    }
    
    .generic {
      display: flex;
      align-items: center;
      flex-direction: row;
      padding: 0.5vw;
    }
    
    .generic__icon {
      display: flex;
      align-items: center;
      width: 0.9vw;
      height: 0.9vw;
      margin-right: 0.3vw;
    }
    
    .generic__icon-ico {
      width: 0.4vw;
      height: 0.4vw;
      border-radius: 50%;
      background-color: var(--primary-color);
    }
    
    .generic__content {
      font-size: 0.8vw;
      color: var(--primary-color);
      font-family: "Poppins", sans-serif;
      font-weight: 200;
      white-space: nowrap;
    }
    
    .language {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .language__shape-track {
      stroke: black;
      fill: none;
    }
    
    .language__shape-progress {
      fill: none;
      stroke: #f3f3f3;
      stroke-width: 3;
      transform: rotate(-90deg);
      transform-origin: center;
    }
    
    .language__flag {
      position: absolute;
      width: 1.2vw;
      height: 1.2vw;
    }
    
    .project {
      display: flex;
      flex-direction: column;
      padding-top: 0.5vw;
      padding-bottom: 0.5vw;
      padding-left: 3vw;
      padding-right: 3vw;
    }
    
    .project__content {
      font-size: 0.8vw;
      font-family: "Poppins", sans-serif;
      font-weight: 300;
      color: #2d2d2d;
      white-space: nowrap;
    }
    
    .project__content--name {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
    }
    
    .project__content--description {
      font-size: 0.8vw;
      text-align: justify;
      word-wrap: break-word;
      white-space: pre-wrap;
    }
    </style>
</head>
<body>
    <div class="previewColumns">
    ${data}
    </div>
</body>
</html>
    `;
};

export default PdfTemplate;
