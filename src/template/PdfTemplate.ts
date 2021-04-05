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
      .previewColumns {
        display: flex;
        flex-direction: row;
        width: 100vw;
        height: 100vh;
      }
      
      .firstColumn {
        display: flex;
        flex-direction: column;
        flex: 1;
        background-color: #2d2d2d;
      }
      
      .secondColumn {
        flex: 2;
        background-color: #f3f3f3;
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
        padding: 1vw;
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
        border: 2px solid #f3f3f3;
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
        color: #f3f3f3;
        font-family: "Poppins-Light", sans-serif;
        border-top: 2px solid #f3f3f3;
        border-bottom: 2px solid #f3f3f3;
      }
      
      .section__label--secondcolumn {
        color: #2d2d2d;
        font-family: "Poppins-Medium", sans-serif;
        border-top: 2px solid #2d2d2d;
        border-bottom: 2px solid #2d2d2d;
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
        width: 1vw;
        height: 1vw;
        margin-right: 0.3vw;
      }
      
      .github__icon-ico {
        display: block;
        font-size: 0.9vw;
        color: #2d2d2d;
      }
      
      .github__url {
        font-size: 0.8vw;
        font-family: "Poppins-Light", sans-serif;
        color: #2d2d2d;
        white-space: nowrap;
        border-bottom: 1px solid #2d2d2d;
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
        border-top: 1px solid #2d2d2d;
        border-bottom: 1px solid #2d2d2d;
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
