import styled from "styled-components";

export const Card = styled.div`
    /*border: 1px solid grey;
    width: 630px;
    height: 400px;
    margin-bottom: 20px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    h3 {
        margin: 0;
    }
    .upper_part {
        display: flex;
        justify-content: space-between;
        padding: 20px; 
        background-color: #f0f0f0;
    }

    .bottom_part {
        display: flex;
        justify-content: space-between;
        padding: 20px; 
        background-color: #e0e0e0;
        width: 400px; 
    }
*/
    box-sizing: border-box;
    display: flex ;
    justify-content: flex-end;

.content {
    //background: linear-gradient(#e66465, #9198e5);
    background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
    width: 630px;
    height: 400px;
    margin-bottom: 20px;
    margin-right: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid grey;
    padding: 20px;
   }

    .column_one, .column_two{
        display: block;
    }


    table {
        background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
        width: 660px;
        height: 400px;
        margin-bottom: 20px;
        margin-right: 20px;
        padding: 20px;
    }
`