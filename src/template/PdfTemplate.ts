const PdfTemplate = (data: string): string => {
  return `
    <!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Twoje CV</title>
    <style>
    :root {
        --width: 100vw;
        --height: 100vh;
        --size: 1vw;
        --primary-color: #f3f3f3;
        --secondary-color: #2d2d2d;
      }
      
      .previewColumns {
        display: flex;
        flex-direction: row;
        width: var(--width);
        height: calc(var(--height) - 5vh);
      }
      
      .firstColumn {
        display: flex;
        flex-direction: column;
        flex: 1;
        background-color: var(--secondary-color);
      }
      
      .secondColumn {
        flex: 2;
        background-color: var(--primary-color);
      }
      
      .section {
        display: flex;
        flex: 1;
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
        font-family: "Poppins-Light", sans-serif;
        border-top: 2px solid var(--primary-color);
        border-bottom: 2px solid var(--primary-color);
      }
      
      .section__label--secondcolumn {
        color: var(--secondary-color);
        font-family: "Poppins-Medium", sans-serif;
        border-top: 2px solid var(--secondary-color);
        border-bottom: 2px solid var(--secondary-color);
      }
      
      .section__label--name {
        text-align: left;
        font-size: 1.5vw;
        font-family: "Poppins-Medium", sans-serif;
        padding-left: 3vw;
        border-top: none;
        border-bottom: none;
      }
      
      .section__label--jobposition {
        font-size: 0.8vw;
        font-family: "Poppins-Regular", sans-serif;
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
        font-family: "Poppins-Light", sans-serif;
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
        font-family: "Poppins-Light", sans-serif;
        color: #2d2d2d;
        word-wrap: break-word;
        white-space: pre-wrap;
        border-top: 1px solid var(--secondary-color);
        border-bottom: 1px solid var(--secondary-color);
      }
    </style>
</head>
<body>
    ${data}
</body>
</html>
    `;
};

export default PdfTemplate;
