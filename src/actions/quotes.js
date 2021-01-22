// TODO: Create action creators as defined in tests
export default function addQuote(quote){
    return {
        type: 'ADD_QOUTE',
        quote
    };
}

//console.log(addQuote({content: "Job", media: "HTML"}));