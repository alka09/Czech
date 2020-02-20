const smartgrid = require('smart-grid');

const settings = {
    columns: 12,
    offset: '10px',
    container: {
      maxWidth: '1290px',
        fields: '30px'
    },
    breakPoint: {
        lg: {
            width: "1290px",
            fields: "20px"
        },
        md: {
            width: "768px",
            fields: "15px"
        },
        sm: {
            width: "668px",
            fields: "20px"
        },
        xs: {
            width: "375px",
            fields: "15px"
        }
    },
    oldSizeStyle: false,
    properties: [],
    filename: '_smartgrid',
    outputStyle: 'sass'
};

smartgrid('scss', settings);